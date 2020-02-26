export const fetchAllPokemon = () => {
  return $.ajax({
    url: 'api/pokemon'
  });
};

export const fetchSinglePokemon = (poke) => {
  return $.ajax({
    url: `api/pokemon/${poke}`
  });
};