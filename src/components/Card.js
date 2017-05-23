import React, { Component } from 'react';



class Card extends Component {

  test(e){
    e.preventDefault();
    console.log(this.props.details.name);
  }

  render() {
    return (
      <a href="#" onClick={(e) => this.test(e)}><li className="display-card"><img alt={this.props.details.name} src={this.props.details.imageUrl}/>{this.props.details.name} Converted Mana Cost: {this.props.details.cmc}</li></a>
    );
  }
}
export default Card;
