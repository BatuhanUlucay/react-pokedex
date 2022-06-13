import React from "react";
import { useContext, useEffect } from "react";
import PokemonContext from "../../context/PokemonContext";

function RegionFilter() {
  const { pokemons, setPokemonsFiltered} = useContext(PokemonContext);

useEffect(() => {
    setPokemonsFiltered(pokemons);
}, [pokemons]); // eslint-disable-line


  const handleChange = (event) => {

    switch (event.target.value) {
      case "All pokemons":
        setPokemonsFiltered(pokemons);
        break;
      case "Kanto":
        setPokemonsFiltered(
          pokemons.filter((pokemon, index) => {
            return index < 151;
          })
        );
        break;
      case "Johto":
        setPokemonsFiltered(
          pokemons.filter((pokemon, index) => {
            return index >= 151 && index < 251;
          })
        );
        break;
      case "Hoenn":
        setPokemonsFiltered(
          pokemons.filter((pokemon, index) => {
            return index >= 251 && index < 386;
          })
        );
        break;
      case "Sinnoh":
        setPokemonsFiltered(
          pokemons.filter((pokemon, index) => {
            return index >= 386 && index < 494;
          })
        );
        break;
      case "Unova":
        setPokemonsFiltered(
          pokemons.filter((pokemon, index) => {
            return index >= 494 && index < 649;
          })
        );
        break;
      case "Kalos":
        setPokemonsFiltered(
          pokemons.filter((pokemon, index) => {
            return index >= 649 && index < 721;
          })
        );
        break;
      case "Alola":
        setPokemonsFiltered(
          pokemons.filter((pokemon, index) => {
            return index >= 721 && index < 809;
          })
        );
        break;
      case "Galar":
        setPokemonsFiltered(
          pokemons.filter((pokemon, index) => {
            return index >= 809;
          })
        );
        break;
      default:
        setPokemonsFiltered(pokemons);
        break;
    }
  }
        

  return (
    <>
      <select
        className="select select-bordered select-lg w-full max-w-xs ml-16"
        onChange={handleChange}
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