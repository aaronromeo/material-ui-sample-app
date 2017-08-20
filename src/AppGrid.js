import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
// import List, { ListItem, ListItemText } from 'material-ui/List';
import Column from './Column';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
});

class AppGrid extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <Grid container spacing={8} align="stretch" >
        <Grid item xs={3}>
          <Column title="Published" cards={[1,2,3,4,5,6,7,8,9,10]}/>
        </Grid>
        <Grid item xs={3}>
          <Column title="Pending" cards={[1,2,3,4,5]} />
        </Grid>
        <Grid item xs={6}>
        </Grid>
      </Grid>
    );
  }
}

AppGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppGrid);
