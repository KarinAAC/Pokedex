'use strict';

const filterByPokemon = (pokemons,query) => {
  /*console.log(pokemons.pokemon_entries);
  console.log(query);*/
  return pokemons.pokemon_entries.filter((poke) => {
    return (poke.pokemon_species.name).toLowerCase().indexOf(query.toLowerCase()) != -1;

    
  });

}
