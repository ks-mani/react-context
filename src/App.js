import React from 'react';
import { Component1 } from './Components';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: 'Bengaluru'
    }
  }

  render() {
    return (
      <div style={{margin: '20px 20px', padding: '5px 10px 10px 10px', border: '2px solid red'}}>
        <h4>App.js</h4>
        <Component1 city={this.state.city}></Component1>
      </div>
    )
  }
}

export default App;
