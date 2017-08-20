import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import CachedIcon from 'material-ui-icons/Cached';
import FilterListIcon from 'material-ui-icons/FilterList';
import ColumnHeader from './ColumnHeader';
import CardList from './CardList';

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

class Column extends Component {
  render() {
    const {classes, cards, title} = this.props;

    return (
      <Paper className={classes.paper}>
        <ColumnHeader title={title} />
        <CardList cards={cards} />
      </Paper>
    );
  }
}

Column.propTypes = {
  classes: PropTypes.object.isRequired,
  cards: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default withStyles(styles)(Column);
