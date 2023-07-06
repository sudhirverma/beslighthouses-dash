import React, { useState } from "react";

import {
  Card,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { applySortFilter, getComparator } from "../../ProjectOfInterestTrack";

const TABLE_HEAD = [
  { id: "descriiption", label: "Description", alignRight: false },
  { id: "ssl", label: "Security Severity Level", alignRight: false },
  { id: "environment", label: "Environment", alignRight: false },
  { id: "Message", label: "Message", alignRight: false },
  { id: "Path", label: "Path", alignRight: false },
  { id: "Start Line", label: "Start Line", alignRight: false },
  { id: "End Line", label: "End Line", alignRight: false },
];

export default function CodeQL({ data }: any) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [filterName, setFilterName] = useState("");
  let codeQLData: any = data;
  const filteredUsers = applySortFilter(
    codeQLData,
    getComparator("desc", "name"),
    filterName
  );
  debugger;
  const handleChangePage = (
    event: any,
    newPage: React.SetStateAction<number>
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: { target: { value: string } }) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  return (
    <>
      <Container style={{ padding: "0px", marginTop: "12px" }}>
        <Card>
          <TableContainer sx={{ minWidth: 800, color: "red" }}>
            <Table>
              <TableHead>
                <TableRow>
                  {TABLE_HEAD.map((headCell: any) => (
                    <TableCell
                      sx={{ color: "#637381", backgroundColor: "#F4F6F8" }}
                      key={headCell.id}
                      align={headCell.alignRight ? "right" : "left"}
                    >
                      {headCell.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              {/* <TableBody>
                {filteredUsers
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map(
                    (
                      row: {
                        rule: any;
                        score: any;
                        reason: any;
                        details: string[];
                      },
                      index: number
                    ) => {
                      const { rule, score, reason, details } = row;
                      return (
                        <TableRow hover key={index} tabIndex={-1}>
                          <TableCell align="center" sx={{paddingLeft: '10px'}} padding="none">
                            {name}
                          </TableCell>
                          <TableCell align="left">{score}</TableCell>
                          <TableCell align="left">{reason}</TableCell>
                          <TableCell align="left">{details}</TableCell>
                          <TableCell align="left">{score}</TableCell>
                          <TableCell align="left">{reason}</TableCell>
                          <TableCell align="left">{details}</TableCell>
                        </TableRow>
                      );
                    }
                  )}
              </TableBody> */}
            </Table>
          </TableContainer>
          <TablePagination
            sx={{
              ".MuiTablePagination-selectLabel": {
                margin: "auto",
              },
              ".MuiTablePagination-displayedRows": {
                margin: "auto",
              },
            }}
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={codeQLData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Container>
    </>
  );
}
