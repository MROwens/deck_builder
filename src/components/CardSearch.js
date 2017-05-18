import React from 'react'

//const mtg = require('mtgsdk');
import mtg from 'mtgsdk'

class CardSearch extends React.Component{

  searchForCards(event){
    event.preventDefault();
    mtg.card.where({ name: this.cardInput.value})
      .then(cards => {
          cards.forEach(showCards)

          function showCards(item){
          console.log(item.imageUrl)
        }
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

        <p id="cardOutput"></p>

      </div>

    );
  }

}

export default CardSearch;
