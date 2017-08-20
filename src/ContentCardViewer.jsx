import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import { CardHeader } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import grey from 'material-ui/colors/grey';

import ContentCardViewerHeader from './ContentCardViewerHeader';
import IntegrationAutosuggest from './IntegrationAutosuggest';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    alignContent: 'stretch',
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  avatar: {
    backgroundColor: grey[500],
    borderRadius: "20%",
  },
  media: {
    width: '100%',
    height: '100%',
  },
});

// const styles = theme => ({
//   media: {
//     height: 194,
//   },
//   flexGrow: {
//     flex: '1 1 auto',
//   },
//   button1: {
//     color: yellow[700],
//     flex: "1 1 auto",
//     borderWidth: "1px",
//     borderStyle: "solid",
//     borderColor: grey[200],
//   },
//   button2: {
//     color: lightGreen['A400'],
//     flex: "1 1 auto",
//     borderWidth: "1px",
//     borderStyle: "solid",
//     borderColor: grey[200],
//   },
//   chipPublished: {
//     margin: theme.spacing.unit / 2,
//     borderRadius: '10%',
//     backgroundColor: blue[700],
//     color: '#FFF',
//   },
//   chipPending: {
//     margin: theme.spacing.unit / 2,
//     borderRadius: '10%',
//     borderWidth: "1px",
//     borderStyle: "solid",
//     borderColor: blue[700],
//     backgroundColor: '#FFF',
//     color: blue[700],
//   },
//   chipRow: {
//     display: 'flex',
//     justifyContent: 'flex-start',
//     flexWrap: 'wrap',
//   },
// });

class ContentCardViewer extends Component {
  render() {
    const {classes} = this.props;

    return (
      <Paper className={classes.paper}>
        <ContentCardViewerHeader style={{flexGrow: 1, alignSelf: 'stretch'}}/>
        <CardHeader
          style={{flexGrow: 1, alignSelf: 'stretch'}}
          avatar={
            <Avatar aria-label="Instagram"
              alt="Instagram"
              className={classes.avatar}
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxNnB4IiBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4gICAgICAgIDx0aXRsZT5pY29uLWluc3RhZ3JhbTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtb3BhY2l0eT0iMC4zIj4gICAgICAgIDxnIGlkPSJBcnRib2FyZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExNy4wMDAwMDAsIC02NS4wMDAwMDApIiBmaWxsPSIjRkZGRkZGIj4gICAgICAgICAgICA8cGF0aCBkPSJNMTI0Ljk5OTk4Niw2NiBDMTI2LjkwMTA4Niw2NiAxMjcuMTM5NDM5LDY2LjAwODA1ODEgMTI3Ljg4NjA2Myw2Ni4wNDIxMjQ0IEMxMjguNjMxMTU5LDY2LjA3NjEwNzMgMTI5LjEzOTk4Nyw2Ni4xOTQ0NTAyIDEyOS41ODUyNjYsNjYuMzY3NTA0OCBDMTMwLjA0NTU3OCw2Ni41NDYzNjY4IDEzMC40MzU5NTEsNjYuNzg1NzIwMSAxMzAuODI1MTAyLDY3LjE3NDg3MDYgQzEzMS4yMTQyOCw2Ny41NjQwNDkgMTMxLjQ1MzYwNSw2Ny45NTQ0MjIxIDEzMS42MzI0OTUsNjguNDE0NzA2MiBDMTMxLjgwNTU1LDY4Ljg1OTk4NTYgMTMxLjkyMzg5Myw2OS4zNjg4MTI4IDEzMS45NTc4NzYsNzAuMTEzOTA5IEMxMzEuOTkxOTQyLDcwLjg2MDUzMzQgMTMyLDcxLjA5ODkxNDEgMTMyLDcyLjk5OTk4NjEgQzEzMiw3NC45MDEwODU5IDEzMS45OTE5NDIsNzUuMTM5NDY2NiAxMzEuOTU3ODc2LDc1Ljg4NjA5MSBDMTMxLjkyMzg5Myw3Ni42MzExNTk0IDEzMS44MDU1NSw3Ny4xNDAwMTQ0IDEzMS42MzI0OTUsNzcuNTg1MjY2IEMxMzEuNDUzNjA1LDc4LjA0NTU3NzkgMTMxLjIxNDI4LDc4LjQzNTk1MSAxMzAuODI1MTAyLDc4LjgyNTEwMTYgQzEzMC40MzU5NTEsNzkuMjE0Mjc5OSAxMzAuMDQ1NTc4LDc5LjQ1MzYwNTQgMTI5LjU4NTI2Niw3OS42MzI1MjMgQzEyOS4xMzk5ODcsNzkuODA1NTQ5OCAxMjguNjMxMTU5LDc5LjkyMzg5MjcgMTI3Ljg4NjA2Myw3OS45NTc5MDM0IEMxMjcuMTM5NDM5LDc5Ljk5MTk0MTkgMTI2LjkwMTA4Niw4MCAxMjQuOTk5OTg2LDgwIEMxMjMuMDk4OTE0LDgwIDEyMi44NjA1MDYsNzkuOTkxOTQxOSAxMjIuMTEzOTA5LDc5Ljk1NzkwMzQgQzEyMS4zNjg4MTMsNzkuOTIzODkyNyAxMjAuODU5OTg2LDc5LjgwNTU0OTggMTIwLjQxNDcwNiw3OS42MzI1MjMgQzExOS45NTQ0MjIsNzkuNDUzNjA1NCAxMTkuNTY0MDIxLDc5LjIxNDI3OTkgMTE5LjE3NDg3MSw3OC44MjUxMDE2IEMxMTguNzg1NjkyLDc4LjQzNTk1MSAxMTguNTQ2MzY3LDc4LjA0NTU1MDEgMTE4LjM2NzQ3Nyw3Ny41ODUyNjYgQzExOC4xOTQ0MjIsNzcuMTQwMDE0NCAxMTguMDc2MTA3LDc2LjYzMTE1OTQgMTE4LjA0MjA5Nyw3NS44ODYwOTEgQzExOC4wMDgwMyw3NS4xMzk0NjY2IDExOCw3NC45MDEwODU5IDExOCw3Mi45OTk5ODYxIEMxMTgsNzEuMDk4ODg2NCAxMTguMDA4MDMsNzAuODYwNTMzNCAxMTguMDQyMDk3LDcwLjExMzkwOSBDMTE4LjA3NjEwNyw2OS4zNjg4MTI4IDExOC4xOTQ0MjIsNjguODU5OTg1NiAxMTguMzY3NDc3LDY4LjQxNDcwNjIgQzExOC41NDYzNjcsNjcuOTU0NDIyMSAxMTguNzg1NjkyLDY3LjU2NDA0OSAxMTkuMTc0ODcxLDY3LjE3NDg3MDYgQzExOS41NjQwMjEsNjYuNzg1NzIwMSAxMTkuOTU0NDIyLDY2LjU0NjM2NjggMTIwLjQxNDcwNiw2Ni4zNjc1MDQ4IEMxMjAuODU5OTg2LDY2LjE5NDQ1MDIgMTIxLjM2ODgxMyw2Ni4wNzYxMDczIDEyMi4xMTM5MDksNjYuMDQyMTI0NCBDMTIyLjg2MDUwNiw2Ni4wMDgwNTgxIDEyMy4wOTg5MTQsNjYgMTI0Ljk5OTk4Niw2NiBaIE0xMjQuOTk5OTg2LDY3LjI2MTI1OSBDMTIzLjEzMDg5Niw2Ny4yNjEyNTkgMTIyLjkwOTUyMSw2Ny4yNjgzNzI0IDEyMi4xNzEzNzIsNjcuMzAyMDQ5NyBDMTIxLjQ4ODkwNiw2Ny4zMzMxOTg0IDEyMS4xMTgyMzQsNjcuNDQ3MjM0MyAxMjAuODcxNTczLDY3LjU0MzA5NzkgQzEyMC41NDQ4NTgsNjcuNjcwMDgyNCAxMjAuMzExNjQ2LDY3LjgyMTc2OTIgMTIwLjA2NjcwOCw2OC4wNjY3MzUzIEMxMTkuODIxNzY5LDY4LjMxMTY3MzcgMTE5LjY3MDA1NSw2OC41NDQ4NTg0IDExOS41NDMwNyw2OC44NzE2MDA0IEMxMTkuNDQ3MjM0LDY5LjExODI2MTUgMTE5LjMzMzE5OCw2OS40ODg5MDYyIDExOS4zMDIwNSw3MC4xNzEzOTkzIEMxMTkuMjY4MzcyLDcwLjkwOTUyMTEgMTE5LjI2MTI1OSw3MS4xMzA5MjQyIDExOS4yNjEyNTksNzIuOTk5OTg2MSBDMTE5LjI2MTI1OSw3NC44NjkwNzU4IDExOS4yNjgzNzIsNzUuMDkwNDc4OSAxMTkuMzAyMDUsNzUuODI4NjAwNyBDMTE5LjMzMzE5OCw3Ni41MTEwOTM4IDExOS40NDcyMzQsNzYuODgxNzM4NSAxMTkuNTQzMDcsNzcuMTI4Mzk5NiBDMTE5LjY3MDA1NSw3Ny40NTUxMTM4IDExOS44MjE3NjksNzcuNjg4MzI2MyAxMjAuMDY2NzA4LDc3LjkzMzI2NDcgQzEyMC4zMTE2NDYsNzguMTc4MjMwOCAxMjAuNTQ0ODU4LDc4LjMyOTkxNzYgMTIwLjg3MTU3Myw3OC40NTY5MDIxIEMxMjEuMTE4MjM0LDc4LjU1MjczNzkgMTIxLjQ4ODkwNiw3OC42NjY4MDE2IDEyMi4xNzEzOTksNzguNjk3OTIyNiBDMTIyLjkwOTQxLDc4LjczMTU5OTggMTIzLjEzMDc1OCw3OC43Mzg3NDEgMTI0Ljk5OTk4Niw3OC43Mzg3NDEgQzEyNi44NjkyMTUsNzguNzM4NzQxIDEyNy4wOTA1NjIsNzguNzMxNTk5OCAxMjcuODI4NTczLDc4LjY5NzkyMjYgQzEyOC41MTEwNjYsNzguNjY2ODAxNiAxMjguODgxNzExLDc4LjU1MjczNzkgMTI5LjEyODM3Miw3OC40NTY5MDIxIEMxMjkuNDU1MTE0LDc4LjMyOTkxNzYgMTI5LjY4ODMyNiw3OC4xNzgyMzA4IDEyOS45MzMyNjUsNzcuOTMzMjY0NyBDMTMwLjE3ODIwMyw3Ny42ODgzMjYzIDEzMC4zMjk4OSw3Ny40NTUxMTM4IDEzMC40NTY5MDIsNzcuMTI4Mzk5NiBDMTMwLjU1MjczOCw3Ni44ODE3Mzg1IDEzMC42NjY3NzQsNzYuNTExMDkzOCAxMzAuNjk3OTIzLDc1LjgyODU3MjkgQzEzMC43MzE1NzIsNzUuMDkwNDc4OSAxMzAuNzM4NzEzLDc0Ljg2OTA3NTggMTMwLjczODcxMyw3Mi45OTk5ODYxIEMxMzAuNzM4NzEzLDcxLjEzMDkyNDIgMTMwLjczMTU3Miw3MC45MDk1MjExIDEzMC42OTc5MjMsNzAuMTcxMzk5MyBDMTMwLjY2Njc3NCw2OS40ODg5MDYyIDEzMC41NTI3MzgsNjkuMTE4MjYxNSAxMzAuNDU2OTAyLDY4Ljg3MTYwMDQgQzEzMC4zMjk4OSw2OC41NDQ4NTg0IDEzMC4xNzgyMDMsNjguMzExNjczNyAxMjkuOTMzMjY1LDY4LjA2NjcwNzYgQzEyOS42ODgzMjYsNjcuODIxNzY5MiAxMjkuNDU1MTE0LDY3LjY3MDA4MjQgMTI5LjEyODM3Miw2Ny41NDMwOTc5IEMxMjguODgxNzExLDY3LjQ0NzIzNDMgMTI4LjUxMTA2Niw2Ny4zMzMxOTg0IDEyNy44Mjg1NzMsNjcuMzAyMDQ5NyBDMTI3LjA5MDQ1MSw2Ny4yNjgzNzI0IDEyNi44NjkwNzYsNjcuMjYxMjU5IDEyNC45OTk5ODYsNjcuMjYxMjU5IFogTTEyNC45OTk5ODYsNjkuNDA1NDA3NyBDMTI2Ljk4NTIyNCw2OS40MDU0MDc3IDEyOC41OTQ1NjUsNzEuMDE0NzQ4NyAxMjguNTk0NTY1LDcyLjk5OTk4NjEgQzEyOC41OTQ1NjUsNzQuOTg1MjUxMyAxMjYuOTg1MjI0LDc2LjU5NDU5MjMgMTI0Ljk5OTk4Niw3Ni41OTQ1OTIzIEMxMjMuMDE0NzQ5LDc2LjU5NDU5MjMgMTIxLjQwNTM4LDc0Ljk4NTI1MTMgMTIxLjQwNTM4LDcyLjk5OTk4NjEgQzEyMS40MDUzOCw3MS4wMTQ3NDg3IDEyMy4wMTQ3NDksNjkuNDA1NDA3NyAxMjQuOTk5OTg2LDY5LjQwNTQwNzcgWiBNMTI0Ljk5OTk4Niw3NS4zMzMzMzMzIEMxMjYuMjg4NjQzLDc1LjMzMzMzMzMgMTI3LjMzMzMzMyw3NC4yODg2NDI2IDEyNy4zMzMzMzMsNzIuOTk5OTg2MSBDMTI3LjMzMzMzMyw3MS43MTEzMjk2IDEyNi4yODg2NDMsNzAuNjY2NjY2NyAxMjQuOTk5OTg2LDcwLjY2NjY2NjcgQzEyMy43MTEzMyw3MC42NjY2NjY3IDEyMi42NjY2MzksNzEuNzExMzI5NiAxMjIuNjY2NjM5LDcyLjk5OTk4NjEgQzEyMi42NjY2MzksNzQuMjg4NjQyNiAxMjMuNzExMzMsNzUuMzMzMzMzMyAxMjQuOTk5OTg2LDc1LjMzMzMzMzMgWiBNMTI5LjU3NjU5OSw2OS4yNjMzODUxIEMxMjkuNTc2NTk5LDY5LjcyNzMwOTIgMTI5LjIwMDUzNiw3MC4xMDMzNzIzIDEyOC43MzY2MTIsNzAuMTAzMzcyMyBDMTI4LjI3MjY4OCw3MC4xMDMzNzIzIDEyNy44OTY1OTcsNjkuNzI3MzA5MiAxMjcuODk2NTk3LDY5LjI2MzM4NTEgQzEyNy44OTY1OTcsNjguNzk5NDYwOSAxMjguMjcyNjg4LDY4LjQyMzM5NzkgMTI4LjczNjYxMiw2OC40MjMzOTc5IEMxMjkuMjAwNTM2LDY4LjQyMzM5NzkgMTI5LjU3NjU5OSw2OC43OTk0NjA5IDEyOS41NzY1OTksNjkuMjYzMzg1MSBaIiBpZD0iQ29tYmluZWQtU2hhcGUtQ29weSI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+"
            />
          }
          title="theScore"
          subheader="September 14, 2016"
          classes={{ content: classes.content }}
        />
        <div style={{flex: "1 1 auto"}}>
          <img
          style={{ maxWidth: "100%" }}
          src="https://upload.wikimedia.org/wikipedia/commons/4/47/Mumbai_workers_Victor_Grigas_Random_Shots-9.jpg"
          alt="Muscle Man" />
        </div>
        <div style={{flex: "1 1 auto"}}>
          <Typography component="title">
            This is a Mumbai worker flexing like a bauss. <span role="img" aria-label="photo">📷</span> by Victor Grigas.
          </Typography>
        </div>
        <div style={{flex: "1 1 auto"}}>
          <IntegrationAutosuggest />
        </div>

      </Paper>
    );
  }
}

ContentCardViewer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContentCardViewer);
