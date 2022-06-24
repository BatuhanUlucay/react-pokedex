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
      <div className="h-16 flex items-center max-w-screen-lg mx-auto my-16">
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
