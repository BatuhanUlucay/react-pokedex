import React from "react";
import PokeCard from "../ui/PokeCard";
import { useState, useEffect, useContext } from "react";
import PokemonContext from "../../context/PokemonContext";



function PokemonList() {
  const pokemonPerPage = 20;

  const [pokemons, setPokemons] = useState([]);

  const {getAllPokemons} = useContext(PokemonContext);
  

  useEffect(() => {
    getAllPokemons(0,151);
  }, []);

  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {pokemons.map((pokemon) => {
        return <PokeCard name={"pokemon.name"} />;
      })}
    </div>
  );
}

export default PokemonList;
