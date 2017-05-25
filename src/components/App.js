import React, { Component } from 'react';

import CardSearch from './CardSearch'
import Map from './Map';


class App extends Component {




  render() {
    return (
      <div className="App">
        <CardSearch  />
        <Map />
      </div>
    );
  }
}

export default App;
