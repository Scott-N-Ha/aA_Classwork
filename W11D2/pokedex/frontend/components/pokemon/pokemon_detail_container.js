import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchSinglePokemon } from '../../actions/pokemon_actions';
// import { selectAllPokemon } from '../../reducers/selectors';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = (state, ownProps) => {
  
  return {
    poke: state.entities.pokemon[ownProps.match.params.pokemonId],
    items: state.entities.items
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestSinglePokemon: (id) => dispatch(fetchSinglePokemon(id))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail));
