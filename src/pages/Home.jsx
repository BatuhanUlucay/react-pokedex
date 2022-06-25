import React from "react";
import SearchBar from "../components/ui/SearchBar";
import PokemonList from "../components/pokemon/PokemonList";
import RegionFilter from "../components/ui/RegionFilter";
import { PokemonProvider } from "../context/PokemonContext";
import { QueryClient, QueryClientProvider } from "react-query";
import ScrollToTop from "../components/ui/ScrollToTop";

const queryClient = new QueryClient();

function Home() {
  return (
    <PokemonProvider>
      <div className="flex items-center mx-auto my-16 place-content-center">
        <SearchBar />
        <RegionFilter />
        <ScrollToTop />
      </div>
      <QueryClientProvider client={queryClient}>
        <PokemonList />
      </QueryClientProvider>
    </PokemonProvider>
  );
}

export default Home;
