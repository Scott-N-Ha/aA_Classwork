import * as PokeAPIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_SINGLE_POKEMON = "RECEIVE_SINGLE_POKEMON";

export const RECEIVE_ITEMS = "RECEIVE_ITEMS";

// regular actions
export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon 
});

export const receiveSinglePokemon = (poke) => ({
  type: RECEIVE_SINGLE_POKEMON,
  poke
});

export const receiveItems = (items) => ({
  type: RECEIVE_ITEMS,
  items
});

// thunk actions:
export const fetchAllPokemon = () => (dispatch) => {
  return PokeAPIUtil.fetchAllPokemon()
    .then(
      pokes => {
        dispatch(receiveAllPokemon(pokes))
      });
};

export const fetchSinglePokemon = (poke) => (dispatch) => {
  return PokeAPIUtil.fetchSinglePokemon(poke)
    .then(
      poke => {
        dispatch(receiveSinglePokemon(poke));
        dispatch(receiveItems(poke.items));
      });
        
};