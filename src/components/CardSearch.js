import React from 'react'
import mtg from 'mtgsdk'

import Card from './Card'


class CardSearch extends React.Component{

  constructor(){
    super();
    this.state = {
      //inital state
      cards: {}
    };
  }

//much like add fish | declare state here with cards
  searchForCards(event){
    event.preventDefault();

    mtg.card.where({ name: this.cardInput.value})
      .then(cards => {
          console.log(cards);
          this.setState({cards});
      })
    //console.log(this.cardInput.value);
  }

  render(){
    return(

      <div className='cardSearch'>

        <form className='card-search' onSubmit={(e) => this.searchForCards(e)}>
          <input type="text" required placeholder="Card Name" ref={(input) => {this.cardInput = input}} />
          <button type="submit">Search Cards</button>
        </form>

        <ul className="list-of-cards">
          {Object
            .keys(this.state.cards)
            .map(key => <Card key={key} details={this.state.cards[key]} />)
          }
        </ul>

      </div>

    );
  }

}

export default CardSearch;
