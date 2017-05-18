import React from 'react'
import mtg from 'mtgsdk'


class CardSearch extends React.Component{

  constructor(){
    super();
    this.state = {
      //inital state
      cards: {}
    };
  }

//much like add fish | declare state here with cards
  searchForCards(event, card){
    event.preventDefault();
    // //existing cards state
    // const queryCards = {...this.state.queryCards}
    // //add in new cards
    // const timestamp = Date.now();
    // queryCards[`card-${timestamp}`] = card;
    // //set state
    // this.setState({queryCards})

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

      </div>

    );
  }

}

export default CardSearch;
