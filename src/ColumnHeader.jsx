import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import CachedIcon from 'material-ui-icons/Cached';
import FilterListIcon from 'material-ui-icons/FilterList';

class ColumnHeader extends Component {
  render() {
    const {title} = this.props;

    return (
      <span>
        <Grid container spacing={0} align="center">
          <Grid item xs={8}>
            <Typography type="subheading" component="h3" align="left">
              {title}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <IconButton>
              <CachedIcon />
            </IconButton>
          </Grid>
          <Grid item xs={2}>
            <IconButton>
              <FilterListIcon />
            </IconButton>
          </Grid>
        </Grid>
      </span>
    );
  }
}

ColumnHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ColumnHeader;
