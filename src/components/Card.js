import React, { Component } from 'react';



class Card extends Component {

  // constructor(){
  //   super();
  //   this.deckList = [];
  // }
  //
  test(e){
    e.preventDefault();
    console.log(e.currentTarget);
    console.log(this.props.details.name, this.props.details.manaCost);
    let name = this.props.details.name;
    localStorage.setItem('cardName', name);
    console.log(localStorage.getItem('cardName'));
  }

  render() {
    return (
        <li className="display-card"><a href="#" onClick={(e) => this.test(e)}><img alt={this.props.details.name} src={this.props.details.imageUrl}/></a></li>
    );
  }
}
export default Card;
