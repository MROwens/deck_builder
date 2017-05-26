import React from 'react';
import mtg from 'mtgsdk';
import DeckList from './DeckList';
import Card from './Card';
import styles from '../css/card-search.css';

class CardSearch extends React.Component{

  //consturctor to hold the state object that searchForCards() pushes into
  constructor(){
    super();
    //setting state
    this.state = {
      //inital state
      cards: {}
    };
  }

  //Search for card functionality
  searchForCards(event){
    //prevent page reload
    event.preventDefault();

    //Searches for card name that matches what is input in search box
    //only returns cards from the current standard set
    mtg.card.where({ name: this.cardInput.value, gameFormat: 'Standard'})
      .then(cards => {
          //sets results to state
          this.setState({cards});
      })
  }


  render(){
    return(
      <div className='cardSearch'>
        {/* Card search form that is bound to this class */}
        <form className='card-search' onSubmit={(e) => this.searchForCards(e)}>
          {/* creating a reference to text input */}
          <input type="text" required placeholder="Card Name" ref={(input) => {this.cardInput = input}} />
          <button type="submit">Search Cards</button>
        </form>
        {/* List that loops through and holds the instances of cards created */}
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
