import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import { Route } from 'react-router-dom';
import pokemonDetailContainer from './pokemon_detail_container';

export default class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const pokes = this.props.pokemon.map(poke => {
      return (
        <PokemonIndexItem key={poke.id} id={poke.id} name={poke.name} image_url={poke.image_url} />
      );
    });

    return(
      <div className="Pokedex">
        {/* <Route
          path="/pokemon/:pokemonId"
          component={pokemon_detail_container}
        /> */}
        <ul>
          {pokes}
        </ul>
      </div>
    )
  }
}