import * as React from "react";
import SiteWrapper from "./SiteWrapper";
import { Card, CardContent, Grid } from "@mui/material";


import {
    Page
} from "tabler-react";

function BeSVersionHistory() {
    const myStyle: any = {
        fontSize: '1rem',
        fontWeight: 700
    };
    return (
        <SiteWrapper>
            <Page.Content title={`Project: oneTBB`}>
                <Card>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                <span style={myStyle}>BeS Tracking ID:</span> 247
                            </Grid>
                            <Grid item xs={4}>
                                <span style={myStyle}>BeS Tech Stack:</span> 247
                            </Grid>
                            <Grid item xs={4}>
                                <span style={myStyle}>Release Date:</span> 247
                            </Grid>
                            <Grid item xs={4}>
                                <span style={myStyle}>Known Vulnerability Count:</span> 247
                            </Grid>
                            <Grid item xs={4}>
                                <span style={myStyle}>Version:</span> 247
                            </Grid>
                        </Grid>
                    </CardContent>
                    <div style={{padding: '0px 0px 16px 16px'}}>
                        <span style={myStyle}>Description:</span> 247
                    </div>
                </Card>
            </Page.Content>
        </SiteWrapper>
    );
}

export default BeSVersionHistory;