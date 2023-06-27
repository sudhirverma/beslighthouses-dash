import * as React from "react";


// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';

import {
    Page
} from "tabler-react";
import SiteWrapper from "./SiteWrapper";
import AppCurrentVisits from "./sections/PieChart";
import ProjectOfInterestTrack from "./ProjectOfInterestTrack";



function ProjectOfInterest() {
    const theme = useTheme();

    const languages = [];
    

    return (
        <SiteWrapper>
            <Page.Content title="Projects Of Interest: 112">
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} lg={6}>
                        <AppCurrentVisits
                            title="Languages"
                            chartData={[
                                { label: 'C', value: 1 },
                                { label: 'JavaScript', value: 2 },
                                { label: 'HTML', value: 3 },
                                { label: 'C++', value: 9 },
                            ]}
                            chartColors={[
                                theme.palette.primary.main,
                                theme.palette.info.main,
                                theme.palette.warning.main,
                                theme.palette.error.main,
                            ]} subheader={undefined}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <AppCurrentVisits
                            title="BeS Tech Stack"
                            chartData={[
                                { label: 'L&F', value: 4344 },
                                { label: 'DO', value: 5435 },
                                { label: 'A', value: 1443 },
                                { label: 'S', value: 4443 },
                            ]}
                            chartColors={[
                                theme.palette.primary.main,
                                theme.palette.info.main,
                                theme.palette.warning.main,
                                theme.palette.error.main,
                            ]} subheader={undefined}
                        />
                    </Grid>
                </Grid>
                <ProjectOfInterestTrack />
            </Page.Content>
        </SiteWrapper>
    );
}

export default ProjectOfInterest;