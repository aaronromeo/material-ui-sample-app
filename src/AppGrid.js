import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Column from './Column';
import ContentCardViewer from './ContentCardViewer';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
});

class AppGrid extends Component {
  render() {
    return (
      <Grid container spacing={8} align="stretch" >
        <Grid item xs={3}>
          <Column title="Published" cards={[1,2,3,4,5,6,7,8,9,10]}/>
        </Grid>
        <Grid item xs={3}>
          <Column title="Pending" cards={[1,2,3,4,5]} />
        </Grid>
        <Grid item xs={6}>
          <ContentCardViewer />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(AppGrid);
