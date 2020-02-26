import React from 'react';

export default class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
   this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.pokemonId !== this.props.match.params.pokemonId) {
      this.props.requestSinglePokemon(this.props.match.params.pokemonId);
    }
  }

  render() {
    let poke = this.props.poke;
    if (poke === undefined || poke.moves === undefined) return null;

    const moves = poke.moves.map(move => {
      let titelize = [];

      move.split(' ').forEach(word => {
        titelize.push(word[0].toUpperCase() + word.slice(1));
      });

      let mo = titelize.join(' ');

      return (
        <li>
          {mo}
        </li>
      );
    });

    const items = poke.item_ids.map(item_id => {
      if (this.props.items[item_id]){
        return (
          <img className="item-image" src={this.props.items[item_id].image_url} alt={this.props.items[item_id].name}/>
        )
      }
    });

    return (
      <div className="pokemon-detail">
        Name: {poke.name} <br/>
        Attack: {poke.attack} <br/>
        Defense: {poke.defense} <br/>
        Moves: <ul>{moves}</ul> <br/>
        Image: <img src={poke.image_url} alt={poke.name} /> <br/>
        Items: {items}
      </div>
    )
  }
}