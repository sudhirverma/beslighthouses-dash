import { Card, CardContent, Container, Grid, Table, TableContainer } from "@mui/material";
import * as React from "react";
import { spanStyle } from "../BesAssessmentReport";

export default function Scorecard({
  date,
  version,
  github,
  commit,
  score,
}: any) {
  return (
    <>
      <CardContent key={"CardContentkey"}>
        <Grid key={"gridkey1"} container spacing={2}>
          <Grid key={"gridkey2"} item xs={4}>
            <span style={spanStyle}>Date:</span> {date}
          </Grid>
          <Grid key={"gridkey3"} item xs={4}>
            <span style={spanStyle}>Scorecard Version:</span> {version}
          </Grid>
          <Grid key={"gridkey3"} item xs={4}>
            <span style={spanStyle}>OSSP:</span> {`https://${github}`}
          </Grid>
          <Grid key={"gridkey3"} item xs={4}>
            <span style={spanStyle}>Commit:</span> {commit}
          </Grid>
          <Grid key={"gridkey3"} item xs={4}>
            <span style={spanStyle}>Score:</span> {score}
          </Grid>
        </Grid>
      </CardContent>
      {/* <Container style={{ padding: "0px", marginTop: "12px" }}>
        <Card>
          <TableContainer sx={{ minWidth: 800, color: "red" }}>
            <Table>
              <PoiListHead
                order={order}
                orderBy={orderBy}
                headLabel={TABLE_HEAD}
                rowCount={getUSERLIST.length}
                numSelected={selected.length}
                onRequestSort={handleRequestSort}
              />
              <TableBody>
                {filteredUsers
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map(
                    (row: {
                      id: any;
                      name: string;
                      description: any;
                      bes_technology_stack: any;
                      html_url: string;
                      license: any;
                    }) => {
                      const {
                        id,
                        name,
                        description,
                        bes_technology_stack,
                        license,
                        html_url,
                      } = row;
                      let licenseName;
                      if (license) {
                        licenseName = license.name;
                      } else {
                        licenseName = "Not Available";
                      }
                      return (
                        <TableRow hover key={id} tabIndex={-1}>
                          <TableCell component="th" scope="row" padding="none">
                            <Stack
                              direction="row"
                              alignItems="center"
                              spacing={2}
                            >
                              <Typography
                                sx={{ position: "relative", left: "16px" }}
                                variant="subtitle2"
                                noWrap
                              >
                                <Button
                                  onClick={() => openGithubLink(html_url)}
                                >
                                  {" "}
                                  {id}{" "}
                                </Button>
                              </Typography>
                            </Stack>
                          </TableCell>
                          <TableCell align="left">
                            <a href={`/bes_version_history/:${id}/:${name}`}>
                              {name}{" "}
                            </a>
                          </TableCell>
                          <TableCell align="left">{description}</TableCell>
                          <TableCell align="left">
                            {bes_technology_stack}
                          </TableCell>
                          <TableCell align="left">{licenseName}</TableCell>
                        </TableRow>
                      );
                    }
                  )}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
              {isNotFound && (
                <TableBody>
                  <TableRow>
                    <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                      <Paper
                        sx={{
                          textAlign: "center",
                          boxShadow: "none",
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
              },
            }}
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={getUSERLIST.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Container> */}
    </>
  );
}
