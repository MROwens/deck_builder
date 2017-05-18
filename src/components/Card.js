import React, { Component } from 'react';



class Card extends Component {
  render() {
    return (
      <li className="display-card"><img alt={this.props.details.name} src={this.props.details.imageUrl}/>{this.props.details.name} Converted Mana Cost: {this.props.details.cmc}</li>
    );
  }
}
export default Card;
