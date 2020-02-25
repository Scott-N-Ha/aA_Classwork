import * as PokeAPIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";

// regular actions

export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon 
});

// thunk actions:

export const fetchAllPokemon = () => (dispatch) => {
  return PokeAPIUtil.fetchAllPokemon()
    .then(pokes => dispatch(receiveAllPokemon(pokes)));
}