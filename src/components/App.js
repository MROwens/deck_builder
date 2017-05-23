import React, { Component } from 'react';

import CardSearch from './CardSearch'

const propsTest = "test";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CardSearch propsTest={propsTest} />
      </div>
    );
  }
}

export default App;
