import React, { Component } from 'react';
//import DeckList from './DeckList';



class Card extends Component {

  test(e){
    e.preventDefault();
    console.log(this.props.details.name, this.props.details.manaCost);
  }

  render() {
    return (
      <a href="#" onClick={(e) => this.test(e)}><li className="display-card"><img alt={this.props.details.name} src={this.props.details.imageUrl}/></li></a>
    );
  }
}
export default Card;
