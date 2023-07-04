// @mui
import PropTypes from 'prop-types';
import { Card, Typography, CardHeader, CardContent, Grid } from '@mui/material';
// utils

// ----------------------------------------------------------------------

AppOrderTimeline.propTypes = {
  title: PropTypes.string,
};

export default function AppOrderTimeline({ title, ...other }: any) {
  return (
    <Card {...other}>
      <CardHeader title={title} />
      <CardContent key={'CardContentkey'}>
        {/* <Grid container spacing={9}>
        <Grid> */}
          <span>sudhir</span>
          <span>pooja</span>
        {/* </Grid>
        <Grid>
        </Grid>
        
      </Grid> */}
      </CardContent>
      
    </Card>
  );
}

