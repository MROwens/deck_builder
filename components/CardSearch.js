import React from 'react'


class CardSearch extends React.Component{

  searchForCards(){
    mtg.card.all({ name: this.cardInput })
    .on('data', function (card) {
        //console.log(card.name, card.text)
        document.getElementById('cardOutput').innerHTML = "<img src='"+card.imageUrl+"'/>'";
    });
  }

  render(){
    return(

      <div className='cardSearch'>

        <form className='card-search' onSubmit={this.searchForCards}>
          <input type="text" required placeholder="Card Name" ref={(input) => {this.cardInput = input}} />
          <button type="submit">Search Cards</button>
        </form>

        <p className="cardOutput"></p>

      </div>

    )
  }

}

export default CardSearch;
