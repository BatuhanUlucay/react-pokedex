import React, { useContext } from "react";
import PokeCard from "../ui/PokeCard";
import LoadingSpinner from "../ui/LoadingSpinner";
import { useQuery } from "react-query";
import axios from "axios";
import PokemonContext from "../../context/PokemonContext";

const POKEAPI_URL = "https://pokeapi.co/api/v2/";

function PokemonList() {
  const { filterPokemons, searchedText } = useContext(PokemonContext);

  const { isLoading: pokemonNamesIsLoading, data: pokemonNamesData } = useQuery(
    "pokemonNames",
    async () => {
      return axios
        .get(`${POKEAPI_URL}pokemon?limit=898&offset=0`)
        .then((res) => res.data);
    }
  );

  const pokemonNames = pokemonNamesData?.results;

  const {
    data: allPokemons,
    isSuccess: allPokemonsIsSuccess,
    isLoading: allPokemonsIsLoading,
  } = useQuery("allPokemons", () => fetchPokemons(pokemonNames), {
    enabled: !!pokemonNames,
  });

  const fetchPokemons = async (pokemonNames) => {
    return Promise.all(
      pokemonNames.map(async (pokemonItem) => {
        return axios
          .get(`https://pokeapi.co/api/v2/pokemon/${pokemonItem.name}`)
          .then((result) => result.data);
      })
    );
  };

  if (pokemonNamesIsLoading || allPokemonsIsLoading) {
    return <LoadingSpinner />;
  } else if (allPokemonsIsSuccess) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {allPokemons
          .filter((pokemon, index) => {
            return (
              index >= filterPokemons()[0] &&
              index <= filterPokemons()[1] &&
              pokemon.name.includes(searchedText)
            );
          })
          .map((pokemon) => {
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
}

export default PokemonList;
