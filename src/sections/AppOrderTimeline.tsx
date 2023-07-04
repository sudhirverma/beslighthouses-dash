// @mui
import PropTypes from "prop-types";
import {
  Card,
  Typography,
  CardContent,
  Grid,
  Divider,
  Link,
} from "@mui/material";
// utils

// ----------------------------------------------------------------------

AppOrderTimeline.propTypes = {
  title: PropTypes.string,
};

const dividerDiv = (index: number) => {
  if (index !== 0) return <Divider sx={{ my: 1.5 }} />;
};

export default function AppOrderTimeline({ title, ...other }: any) {
  const report: string[] = [
    "Scorecard",
    "Criticality Score",
    "Sonarqube",
    "Codeql",
    "SBOM",
    "Fossology",
    "Fuzz Report",
    "Snyk",
  ];
  return (
    <Card {...other}>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid
              container
              alignContent="center"
              justifyContent="space-between"
            >
              <Grid item>
                <Typography variant="h5">{title}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            {report.map((value, index) => {
              return (
                <>
                  {dividerDiv(index)}
                  <Grid container direction="column">
                    <Grid item>
                      <Grid
                        container
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Grid item>
                          <Typography variant="subtitle1" color="inherit">
                            {value}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Grid
                            container
                            alignItems="center"
                            justifyContent="space-between"
                          >
                            <Grid item>
                              {/* <Typography variant="subtitle1" color="inherit">
                            Not Available
                          </Typography> */}
                              <Link
                                href="https://example.com"
                                target="_blank"
                                rel="noopener"
                              >
                                Click here
                              </Link>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </>
              );
            })}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
