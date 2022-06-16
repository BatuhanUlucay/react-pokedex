import { createContext, useState } from "react";

const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [pokemonFilter, setPokemonFilter] = useState("All pokemons");
  const [searchedText, setSearchedText] = useState("");

  const filterPokemons = () => {
    switch (pokemonFilter) {
      case "All pokemons":
        return [0, 898];
      case "Kanto":
        return [0, 151];
      case "Johto":
        return [151, 251];
      case "Hoenn":
        return [251, 386];
      case "Sinnoh":
        return [386, 494];
      case "Unova":
        return [494, 649];
      case "Kalos":
        return [649, 721];
      case "Alola":
        return [721, 809];
      case "Galar":
        return [809, 898];
      default:
        return [0, 898];
    }
  };

  return (
    <PokemonContext.Provider
      value={{
        setPokemonFilter,
        filterPokemons,
        setSearchedText,
        searchedText,
        pokemonFilter,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContext;
