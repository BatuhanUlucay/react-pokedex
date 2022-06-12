import React from "react";
import PokeCard from "../ui/PokeCard";
import {  useEffect, useContext } from "react";
import PokemonContext from "../../context/PokemonContext";
import LoadingSpinner from "../ui/LoadingSpinner";

function PokemonList() {
  const { getAllPokemons, loading, pokemonsSearched } = useContext(PokemonContext);

  useEffect(() => {
    getAllPokemons(0, 898);
  }, []);



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
