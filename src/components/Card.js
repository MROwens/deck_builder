import React, { Component } from 'react';


class Card extends Component {

  //Creating an instance of Card for each card that matches search
  render() {
    return (
        <li className="display-card"><a href="#" onClick={(e) => this.test(e)}><img alt={this.props.details.name} src={this.props.details.imageUrl}/></a></li>
    );
  }
}
export default Card;
