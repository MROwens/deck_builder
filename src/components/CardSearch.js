import React from 'react'
import mtg from 'mtgsdk'
import DeckList from './DeckList'
import Card from './Card'
import styles from '../css/card-search.css';

class CardSearch extends React.Component{

  constructor(){
    super();
    this.state = {
      //inital state
      cards: {}
    };
  }

  searchForCards(event){
    event.preventDefault();

    mtg.card.where({ name: this.cardInput.value, gameFormat: 'Standard'})
      .then(cards => {
          //console.log(cards);
          this.setState({cards});
      })
    //console.log(this.cardInput.value);
  }

  // test(e){
  //   e.preventDefault();
  //   //console.log(e.currentTarget);
  //   console.log('clicked');
  //   console.log(e.currentTarget);
  //   console.log(this.props.children.details.name);
  //
  // }

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
//pass function through props, call it in decklist , pass back
}
export default CardSearch;
