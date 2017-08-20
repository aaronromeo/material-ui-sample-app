import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import IconButton from 'material-ui/IconButton';
import Tabs, { Tab } from 'material-ui/Tabs';
import CloseIcon from 'material-ui-icons/Close';
import Column from './Column';
import ContentCardViewer from './ContentCardViewer';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
});

const WrappedTab = props => <span>
  <Tab {...props} />
  <IconButton><CloseIcon /></IconButton>
</span>;
WrappedTab.muiName = 'Tab';

class AppGrid extends Component {
  render() {
    return (
      <span>
        <Tabs
          value={0}
          onChange={()=>{}}
          indicatorColor="primary"
          textColor="primary"
          scrollable
          scrollButtons="auto"
        >
          <WrappedTab label="NFL" />
          <WrappedTab label="Baltimore Ravens" />
          <WrappedTab label="New England Patriots" />
          <WrappedTab label="Tom Brady" />
        </Tabs>
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
      </span>
    );
  }
}

export default withStyles(styles)(AppGrid);
