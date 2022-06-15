import React from "react";
import SearchBar from "../components/ui/SearchBar";
import PokemonList from "../components/pokemon/PokemonList";
import RegionFilter from "../components/ui/RegionFilter";
import { PokemonProvider } from "../context/PokemonContext";

function Home() {
  return (
    <PokemonProvider>
      <div className="h-16 flex items-center max-w-screen-lg mx-auto my-16">
        <SearchBar />
        <RegionFilter/>
      </div>
      <PokemonList />
    </PokemonProvider>
  );
}

export default Home;
