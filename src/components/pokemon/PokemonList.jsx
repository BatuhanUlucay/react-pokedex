import React from "react";
import PokeCard from "../ui/PokeCard";
import {  useEffect, useContext } from "react";
import PokemonContext from "../../context/PokemonContext";
import LoadingSpinner from "../ui/LoadingSpinner";

function PokemonList() {
  const { getAllPokemons, loading, pokemonsSearched } = useContext(PokemonContext);

  useEffect(() => {
    // You call this method everyime user comes to this page
    // Semantically it is not wrong, but you might do some kind of caching. for example: if you have pokemons do not call this method
    // Calling this method every time also causes the flicker at first.
    // But we have pokemon at hand, we can show them.
    getAllPokemons(0, 898);
  }, []); // eslint-disable-line


  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      {pokemonsSearched.map((pokemon) => {
        return (
          <PokeCard
            name={pokemon.name}
            types={pokemon.types}
            key={pokemon.id}
            id={pokemon.id}
          />
        );
      })}
    </div>
  );
}

export default PokemonList;
