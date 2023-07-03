import * as React from "react";
import SiteWrapper from "./SiteWrapper";
import { Card, CardContent, Container, Grid, MenuItem, Select } from "@mui/material";
import { makeStyles } from "@mui/styles";


import {
    Page
} from "tabler-react";
import { useParams } from "react-router-dom";
import { projectOfInterestData } from "./data/poi_data";
import CveGraph from "./sections/CveGraph";


export const osspoiMasterAndSummary = async (setData: any, besId: string, besName: string, setVersionSummary: any) => {
    const osspoi: any = JSON.parse(await projectOfInterestData.getJsonReportOsspoiMaster());
    const summary: any = JSON.parse(await projectOfInterestData.getJsonReportVersionSummary(besId, besName));
    projectOfInterestData.updateDataPoi("Project_of_interest", osspoi.items);
    setData(osspoi.items);
    setVersionSummary(summary);
}

const useStyles: any = makeStyles((theme: any) => ({
    select: {
        minWidth: '155px',
        '& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.MuiSelect-select': {
            padding: '4px',
        }
    }
}));

function BeSVersionHistory() {
    const classes = useStyles();
    const myStyle: any = {
        fontSize: '1rem',
        fontWeight: 700,
        paddingRight: '13px'
    };
    const { besId, besName }: any = useParams();
    const [data, setData] = React.useState([]);
    const [versionSummary, setVersionSummary]: any = React.useState([]);
    React.useEffect(() => {
        osspoiMasterAndSummary(setData, besId.slice(1), besName.slice(1), setVersionSummary);
    }, []);
    const [selectedOption, setSelectedOption] = React.useState('');
    if (!selectedOption && versionSummary[0]?.version) {
        setSelectedOption(versionSummary[0]?.version)
    }
    const handleOptionChange = (event: any) => {
        setSelectedOption(event.target.value);
    };
    return (
        <SiteWrapper>
            {/* {
                data.map((item: any) => {
                    if (`:${item.name}` === besName) {
                        return(
                            <>
                                <Page.Content key={'pagekey'} title={`Project: ${item.name}`}>
                                    <Card key={'cardkey'}>
                                        <CardContent key={'CardContentkey'}>
                                            <Grid key={'gridkey1'} container spacing={2}>
                                                <Grid key={'gridkey2'} item xs={4}>
                                                    <span style={myStyle}>BeS Tracking ID:</span> {item.id}
                                                </Grid>
                                                <Grid key={'gridkey3'} item xs={4}>
                                                    <span style={myStyle}>BeS Tech Stack:</span> {item.bes_technology_stack}
                                                </Grid>
                                                {versionSummary.map((option: any) => {
                                                    if (option.version === selectedOption) {
                                                        if (option['cve_details'] === 'Not Available') {
                                                            return (
                                                                <>
                                                                    <Grid key={'gridkey4'} item xs={4}>
                                                                        <span style={myStyle}>Release Date:</span> {option.release_date}
                                                                    </Grid>
                                                                    <Grid key={'gridkey5'} item xs={4}>
                                                                        <span style={myStyle}>Known Vulnerability Count:</span> {option['cve_details']}
                                                                    </Grid>
                                                                </>
                                                            )
                                                        }
                                                        return option['cve_details'].map((cve: any) => {
                                                            if (cve.Year === 'Total') {
                                                                return (
                                                                    <>
                                                                        <Grid key={'gridkey14'} item xs={4}>
                                                                            <span style={myStyle}>Release Date:</span> {option.release_date}
                                                                        </Grid>
                                                                        <Grid key={'gridkey15'} item xs={4}>
                                                                            <span style={myStyle}>Known Vulnerability Count:</span> {cve.No_of_Vulnerabilities}
                                                                        </Grid>
                                                                    </>
                                                                )
                                                            }
                                                        })
                                                    }
                                                })}
                                                <Grid key={'gridkey6'} item xs={4}>
                                                    <span style={myStyle}>Version:</span>
                                                    <Select key={'test'} style={{padding: '0px'}}  className={classes.select} value={selectedOption} onChange={handleOptionChange}>
                                                        {versionSummary.map((option: any, index: any) => (
                                                            <MenuItem key={index} value={option.version}>
                                                                {option.version}
                                                            </MenuItem>
                                                        ))}
                                                    </Select>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                        <div style={{padding: '0px 0px 16px 16px'}}>
                                            <span style={myStyle}>Description:</span> {item.description}
                                        </div>
                                    </Card>
                                </Page.Content>
                            </>
                        )
                    }
                })
            } */}
            <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
            <CveGraph
              title="Website Visits"
              subheader="(+43%) than last year"
              chartLabels={[
                '2001',
                '2002',
                '2003',
                '2004',
                '2005',
                '2006',
                '2007',
                '2008',
                '2009',
                '2010',
                '2011',
              ]}
              chartData={[
                {
                  name: 'Team A',
                  type: 'line',
                  fill: 'solid',
                  data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30],
                },
                {
                  name: 'Team B',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Team C',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
                {
                  name: 'Team D',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
                {
                  name: 'Team E',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
                {
                  name: 'Team F',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
                {
                  name: 'Team G',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
                {
                  name: 'Team H',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ]}
            />
          </Grid>
        </Grid>
      </Container>
        </SiteWrapper>
    );
}

export default BeSVersionHistory;