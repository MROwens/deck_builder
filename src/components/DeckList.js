import React, { Component } from 'react';



class DeckList extends Component {
  render() {
    return (

      <div className="deck-list">

        <ul><li>{this.props.name}</li></ul>

      </div>

    );
  }
}
export default DeckList;
