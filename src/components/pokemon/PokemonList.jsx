import React from "react";
import PokeCard from "../ui/PokeCard";
import { useState, useEffect, useContext } from "react";
import PokemonContext from "../../context/PokemonContext";

function PokemonList() {
  const { getAllPokemons, loading, pokemons, searchText } = useContext(PokemonContext);
  const [searchedPokemons, setSearchedPokemons] = useState();

  useEffect(() => {
    getAllPokemons(0, 898);
  }, []);

  useEffect(() => {
    const searchResult = pokemons.filter((pokemon) => {
      return pokemon.name.includes(searchText);
    });

    setSearchedPokemons(searchResult);

  }, [searchText, pokemons]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      {searchedPokemons.map((pokemon) => {
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
