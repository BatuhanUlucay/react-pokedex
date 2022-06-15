import { createContext, useState } from "react";
import axios from "axios";

const POKEAPI_URL = "https://pokeapi.co/api/v2/";
const pokeapi = axios.create({
  baseURL: POKEAPI_URL,
});

const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonsFiltered, setPokemonsFiltered] = useState([]);
  const [pokemonsSearched, setPokemonsSearched] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pokemonDesc, setPokemonDesc] = useState("");

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
      result.map(async (pokemonItem) => {
        return axios
          .get(`https://pokeapi.co/api/v2/pokemon/${pokemonItem.name}`)
          .then((result) => {
            pokemonArr.push(result.data);
          });
      })
    );

    pokemonArr.sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0));

    setPokemons(pokemonArr);
    setLoading(false);
    console.log(pokemonArr);
  };

  const getPokemonDesc = async (pokemonName) => {
    const response = await pokeapi
      .get(`pokemon-species/${pokemonName}`)
      .catch((err) => {
        console.log(err);
      });

    try {
      setPokemonDesc(response.data.flavor_text_entries[7].flavor_text);
    } catch (e) {
      console.log(e);
    }
    //let desc = await response.data.flavor_text_entries[7].flavor_text;
    //console.log(response.data.flavor_text_entries[7].flavor_text);
    //return response //response.data.flavor_text_entries[7].flavor_text //.data.data.flavor_text_entries[7];
  };

  return (
    <PokemonContext.Provider
      value={{
        getAllPokemons,
        setPokemonsFiltered,
        setPokemonsSearched,
        getPokemonDesc,
        pokemonsSearched,
        pokemonsFiltered,
        loading,
        pokemons,
        pokemonDesc,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContext;
