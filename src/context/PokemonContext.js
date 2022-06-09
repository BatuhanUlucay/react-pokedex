import { createContext, useState } from "react";
import axios from "axios";

const POKEAPI_URL = "https://pokeapi.co/api/v2/";
const pokeapi = axios.create({
  baseURL: POKEAPI_URL,
});

const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllPokemons = async (offset, limit) => {
    const response = await pokeapi
      .get(`pokemon?limit=${limit}&offset=${offset}`)
      .catch((err) => {
        console.log(err);
      });

    getPokemons(response.data.results);
  };

  const getPokemons = async (result) => {
    const pokemonArr = [];

    await Promise.all(
      result.map((pokemonItem) => {
        return axios
          .get(`https://pokeapi.co/api/v2/pokemon/${pokemonItem.name}`)
          .then((result) => {
            pokemonArr.push(result.data);
            //setPokemons([...pokemons, result.data]);
          });
      })
    );

    pokemonArr.sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0));

    setPokemons(pokemonArr);
    setLoading(false);
    console.log(pokemons);
  };

  return (
    <PokemonContext.Provider value={{ getAllPokemons, loading, pokemons }}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContext;
