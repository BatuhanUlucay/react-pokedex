import React from "react";
import PokeCard from "../ui/PokeCard";
import { useState, useEffect } from "react";
import axios from "axios";

const POKEAPI_URL = "https://pokeapi.co/api/v2/";
const pokeapi = axios.create({
  baseURL: POKEAPI_URL,
});

function PokemonList() {
  const pokemonPerPage = 20;

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async (pokemonCount) => {
    const response = await pokeapi.get(`/pokemon/1`);

    console.log(response.data.name);
  };

  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      <PokeCard />
      <PokeCard />
      <PokeCard />
      <PokeCard />
      <PokeCard />
      <PokeCard />
      <PokeCard />
      <PokeCard />
      <PokeCard />
      <PokeCard />
      <PokeCard />
      <PokeCard />
      <PokeCard />
      <PokeCard />
      <PokeCard />
    </div>
  );
}

export default PokemonList;
