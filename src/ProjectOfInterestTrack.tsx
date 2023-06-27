import * as React from "react";

import { Card, Container, Paper, Stack, Table, TableBody, TableCell, TableContainer, TablePagination, TableRow, Typography } from "@mui/material";
import { useState } from "react";
import { PoiListHead, PoiListToolbar } from "./components/PoiTable";

// mock
import USERLIST from './data/poi_data';
import { filter } from "lodash";

const TABLE_HEAD = [
    { id: 'BeSId', label: 'BeS Id', alignRight: false },
    { id: 'name', label: 'Name', alignRight: false },
    { id: 'description', label: 'Description', alignRight: false },
    { id: 'BeSTechStack', label: 'BeS Tech Stack', alignRight: false },
    { id: 'License', label: 'License', alignRight: false }
];

function applySortFilter(array: any, comparator: any, query: any) {
    const stabilizedThis = array.map((el: any, index: any) => [el, index]);
    stabilizedThis.sort((a: any, b: any) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    if (query) {
        return filter(array, (_user: any) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    }
    return stabilizedThis.map((el: any) => el[0]);
}

function descendingComparator(a: { [x: string]: number; }, b: { [x: string]: number; }, orderBy: string) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
}

function getComparator(order: string, orderBy: string) {
    return order === 'desc'
      ? (a: any, b: any) => descendingComparator(a, b, orderBy)
      : (a: any, b: any) => -descendingComparator(a, b, orderBy);
}


export default function UserPage() {

    const [page, setPage] = useState(0);
    const [selected, setSelected] = useState([]);
    const [filterName, setFilterName] = useState('');
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('BeSId');
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleFilterByName = (event: any) => {
        setPage(0);
        setFilterName(event.target.value);
    };

    const handleRequestSort = (event: any, property: any) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - USERLIST.length) : 0;


    const filteredUsers = applySortFilter(USERLIST, getComparator(order, orderBy), filterName);
    
    const isNotFound = !filteredUsers.length && !!filterName;

    const handleChangePage = (event: any, newPage: React.SetStateAction<number>) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: { target: { value: string; }; }) => {
        setPage(0);
        setRowsPerPage(parseInt(event.target.value, 10));
      };

    return (
        <>
            <Container style={{padding: '0px', marginTop: '12px'}}>
                <Card>
                    <PoiListToolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} />
                    <TableContainer sx={{ minWidth: 800, color: 'red' }}>
                        <Table>
                            <PoiListHead
                                order={order}
                                orderBy={orderBy}
                                headLabel={TABLE_HEAD}
                                rowCount={USERLIST.length}
                                numSelected={selected.length}
                                onRequestSort={handleRequestSort}
                            />
                            <TableBody>
                                {
                                   filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row: { id: any; name: string; role: any; status: any; company: any; avatarUrl: any; isVerified: any; }) => {
                                    const { id, name, role, status, company, avatarUrl, isVerified } = row;
                                    // const selectedUser = selected.indexOf(name) !== -1;
              
                                    return (
                                      <TableRow hover key={id} tabIndex={-1}>
              
                                        <TableCell component="th" scope="row" padding="none">
                                          <Stack direction="row" alignItems="center" spacing={2}>
                                            <Typography sx={{position: 'relative', left: "16px"}} variant="subtitle2" noWrap>
                                              {name}
                                            </Typography>
                                          </Stack>
                                        </TableCell>
              
                                        <TableCell align="left">{company}</TableCell>
              
                                        <TableCell align="left">{role}</TableCell>
              
                                        <TableCell align="left">{isVerified ? 'Yes' : 'No'}</TableCell>
              
                                        <TableCell align="left">
                                            test
                                        </TableCell>
                                      </TableRow>
                                    );
                                  }) 
                                }
                                {
                                    emptyRows > 0 && (
                                        <TableRow style={{ height: 53 * emptyRows }}>
                                            <TableCell colSpan={6} />
                                        </TableRow>
                                    )
                                }
                            </TableBody>
                            { isNotFound && (
                                <TableBody>
                                    <TableRow>
                                        <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                                            <Paper
                                                sx={{
                                                    textAlign: 'center',
                                                    boxShadow: 'none'
                                                }}
                                            >
                                                <Typography variant="h6" paragraph>
                                                    Not found
                                                </Typography>

                                                <Typography variant="body2">
                                                    No results found for &nbsp;
                                                    <strong>&quot;{filterName}&quot;</strong>.
                                                    <br /> Try checking for typos or using complete words.
                                                </Typography>
                                            </Paper>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            )}
                        </Table>
                    </TableContainer>
                    <TablePagination
                        sx={{
                            ".MuiTablePagination-selectLabel": {
                              margin: "auto",
                            },
                            ".MuiTablePagination-displayedRows": {
                              margin: "auto",
                            }
                        }}
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={USERLIST.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Card>
            </Container>
        </>
    )
}
