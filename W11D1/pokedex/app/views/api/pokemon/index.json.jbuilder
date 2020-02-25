@pokemon.each do |poke|
  json.set! poke.id do
    json.partial! 'api/pokemon/pokemon', pokemon: poke
  end
end