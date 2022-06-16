import React from "react";
import { useContext } from "react";
import PokemonContext from "../../context/PokemonContext";

function RegionFilter() {
  const { setPokemonFilter, pokemonFilter } = useContext(PokemonContext);

  const handleChange = (event) => {
    setPokemonFilter(event.target.value || "All Pokemons");
  };

  return (
    <>
      <select
        className="select select-bordered select-lg w-full max-w-xs ml-16"
        onChange={handleChange}
        value={pokemonFilter}
      >
        <option>All Pokemons</option>
        <option>Kanto</option>
        <option>Johto</option>
        <option>Hoenn</option>
        <option>Sinnoh</option>
        <option>Unova</option>
        <option>Kalos</option>
        <option>Alola</option>
        <option>Galar</option>
      </select>
    </>
  );
}

export default RegionFilter;
