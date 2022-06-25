import React from "react";
import { useContext } from "react";
import PokemonContext from "../../context/PokemonContext";

function RegionFilter() {
  const { setPokemonFilter, pokemonFilter } = useContext(PokemonContext);

  const handleChange = (event) => {
    setPokemonFilter(event.target.value || "All Pokemons");
  };

  return (
    <div>
      <select
        className="select select-bordered select-lg max-w-xs ml-5 flex-grow"
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
    </div>
  );
}

export default RegionFilter;
