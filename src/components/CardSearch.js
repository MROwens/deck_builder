import React from 'react'
import mtg from 'mtgsdk'


class CardSearch extends React.Component{

  constructor(){
    super();
    this.state = {
      cards: {}
    };
  }

  searchForCards(event){
    event.preventDefault();
    mtg.card.where({ name: this.cardInput.value})
      .then(cards => {
          console.log(cards);
      })
    console.log(this.cardInput.value);


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
