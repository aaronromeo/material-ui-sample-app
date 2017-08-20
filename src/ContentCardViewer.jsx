import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';

import ContentCardViewerHeader from './ContentCardViewerHeader';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class ContentCardViewer extends Component {
  render() {
    const {classes} = this.props;

    return (
      <Paper className={classes.paper}>
        <ContentCardViewerHeader />
      </Paper>
    );
  }
}

ContentCardViewer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContentCardViewer);
