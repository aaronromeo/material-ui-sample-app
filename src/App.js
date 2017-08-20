import React, { Component } from 'react';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
// import createPalette from 'material-ui/styles/palette';
// import purple from 'material-ui/colors/purple';
// import green from 'material-ui/colors/green';
// import red from 'material-ui/colors/red';
import Typography from 'material-ui/Typography';

import AppGrid from './AppGrid.js';

const theme = createMuiTheme(
// {
//   palette: createPalette({
//     primary: purple, // Purple and green play nicely together.
//     accent: {
//       ...green,
//       A400: '#00e677',
//     },
//     error: red,
//   }),
// }
);

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <span>
          <Typography type="display4" gutterBottom>MaterialUI Demo</Typography>
          <AppGrid/>
        </span>
      </MuiThemeProvider>
    );
  }
}

export default App;
