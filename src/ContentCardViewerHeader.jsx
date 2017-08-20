import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import grey from 'material-ui/colors/grey';
import yellow from 'material-ui/colors/yellow';
import lightGreen from 'material-ui/colors/lightGreen';

const styles = theme => ({
  button1: {
    color: yellow[700],
    flex: "1 1 auto",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: grey[200],
  },
  button2: {
    flex: "1 1 auto",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: grey[200],
  },
  button3: {
    color: lightGreen['A400'],
    flex: "1 1 auto",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: grey[200],
  },
});

class ColumnHeader extends Component {
  render() {
    const {classes} = this.props;

    return (
      <span>
        <Grid container spacing={0} align="center">
          <Grid item xs={7}>
            <Typography type="subheading" component="h3" align="left">
              Instagram Card
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'stretch'}}>
              <Button classes={{root: classes.button1}}>
                ✖ Unpublish
              </Button>
              <Button classes={{root: classes.button2}}>
                Edit
              </Button>
              <Button classes={{root: classes.button3}}>
                ✔ Publish
              </Button>
            </div>
          </Grid>
        </Grid>
      </span>
    );
  }
}

ColumnHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ColumnHeader);
