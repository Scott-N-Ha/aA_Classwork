import { connect } from 'react-redux';
import { fetchAllPokemon } from '../../actions/pokemon_actions';
import { selectAllPokemon } from '../../reducers/selectors';
import PokemonIndex from './pokemon_index';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  pokemon: selectAllPokemon(state)
});

const mapDispatchToProps = dispatch => ({
  requestAllPokemon: () => dispatch(fetchAllPokemon())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonIndex));

