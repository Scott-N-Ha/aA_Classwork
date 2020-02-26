import { RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      Object.keys(action.pokemon).forEach(key => {
        if (!nextState[key]) {
          nextState[key] = action.pokemon[key];
        }
      });

      return nextState;
    case RECEIVE_SINGLE_POKEMON:
      let pokeId = Object.keys(action.poke)[0];
      nextState[pokeId] = action.poke[pokeId];
      return nextState;
    default:
      return state;
  }
};