import React, { Component } from 'react';
import logo from './logo.svg';
import Button from 'material-ui/Button';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Button raised>
            Hello World
          </Button>
          <img src={logo} alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
