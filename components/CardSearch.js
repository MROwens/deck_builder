import React from 'react'


class CardSearch extends React.Component{

  searchForCards(){

  }

  render(){
    return(

      <div className='cardSearch'>

        <form className='card-search' onSubmit={this.searchForCards}>

        </form>

      </div>

    )
  }

}

export default CardSearch;
