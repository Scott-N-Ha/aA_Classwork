import React from 'react';

export default class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.requestAllPokemon();

  }

  render() {
    const pokes = this.props.pokemon.map(poke => {
      debugger
      return (
        <li>
          {poke.name}
          <br/>
          <img src={poke.image_url}/>
          <br/>
        </li>
      )
    })
    return(
      <ul>
        {pokes}
      </ul>
    )
  }
}