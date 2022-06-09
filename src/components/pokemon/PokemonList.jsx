import React from "react";
import PokeCard from "../ui/PokeCard";
import { useEffect, useContext } from "react";
import PokemonContext from "../../context/PokemonContext";

function PokemonList() {
  const { getAllPokemons, loading, pokemons } = useContext(PokemonContext);

  useEffect(() => {
    getAllPokemons(0, 151);
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      {pokemons.map((pokemon) => {
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
