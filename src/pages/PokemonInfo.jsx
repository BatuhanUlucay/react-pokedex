import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { useParams } from "react-router-dom";
import EvolutionChain from "../components/pokemon/EvolutionChain";
import Card from "../components/ui/Card";
import useFetch from "../hooks/useFetch";
import {
  GiBroadsword,
  GiHeartPlus,
  GiPointySword,
  GiSurroundedShield,
  GiWalkingBoot,
} from "react-icons/gi";
import { BsShieldShaded } from "react-icons/bs";
import GoBackButton from "../components/ui/GoBackButton";
import LoadingGif from "../assets/fidget.gif";
import NotFound from "./NotFound";
import numberPadding from "../util/NumberPadding";

const api_url = "https://pokeapi.co/api/v2";

const queryClient = new QueryClient();

function PokemonInfo() {
  const params = useParams();

  const {
    response: pokemon,
    loading: pokemonLoading,
    error: pokemonError,
  } = useFetch(`${api_url}/pokemon/${params.pokemon}`);

  const {
    response: pokemonSpecies,
    loading: pokemonSpeciesLoading,
    error: pokemonSpeciesError,
  } = useFetch(`${api_url}/pokemon-species/${params.pokemon}`);

  if (pokemonLoading || pokemonSpeciesLoading) {
    return (
      <div className="container">
        <img src={LoadingGif} alt="Loading..." className="mx-auto"></img>
      </div>
    );
  } else if (
    !pokemonLoading &&
    pokemon &&
    !pokemonSpeciesLoading &&
    pokemonSpecies
  ) {
    return (
      <QueryClientProvider client={queryClient}>
        <Card>
          <div className="m:hero min-h-16 bg-base-200">
            <div className="sm:hero-content flex-col lg:flex-row mx-auto text-center">
              <div>
                <img
                  src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${numberPadding(
                    pokemon.id
                  )}.png`}
                  className="max-w-xs rounded-lg shadow-2xl mx-auto md:mx-16 md:my-8 my-8"
                  alt="pokemon-img"
                />
              </div>
              <div>
                <h1 className="text-5xl font-bold text-center mt-16">
                  {pokemon.name.charAt(0).toUpperCase() +
                    pokemon.name.substring(1)}
                </h1>
                <p className="py-6">
                  {
                    pokemonSpecies.flavor_text_entries.filter((entry) => {
                      console.log(entry);
                      return entry.language.name === "en";
                    })[0].flavor_text
                  }
                </p>

                <div className="stats shadow mb-6 stats-vertical sm:stats-horizontal w-32 sm:w-full">
                  <div className="stat w-4">
                    <div className="stat-title w-4 md:w-32 lg:w-16 xl:w-26">
                      HP
                    </div>
                    <div className="stat-value text-red-500 flex">
                      {pokemon.stats[0].base_stat}
                      <GiHeartPlus className="text-4xl ml-4"/>
                    </div>
                  </div>

                  <div className="stat w-4">
                    <div className="stat-title w-4 md:w-32 lg:w-16 xl:w-26">
                      Attack
                    </div>
                    <div className="stat-value text-primary flex">
                      {pokemon.stats[1].base_stat}
                      <GiBroadsword className="text-4xl ml-4"/>
                    </div>
                  </div>

                  <div className="stat w-4">
                    <div className="stat-title w-4 md:w-32 lg:w-16 xl:w-26">
                      Defense
                    </div>
                    <div className="stat-value text-green-700 flex">
                      {pokemon.stats[2].base_stat}
                      <BsShieldShaded className="text-4xl ml-4" />
                    </div>
                  </div>
                </div>
                <div className="stats shadow mb-6 stats-vertical sm:stats-horizontal w-32 sm:min-w-full">
                  <div className="stat w-4">
                    <div className="stat-title w-4 md:w-32 lg:w-16 xl:w-26">
                      Special Attack
                    </div>
                    <div className="stat-value text-purple-400 flex">
                      {pokemon.stats[3].base_stat}
                      <GiPointySword className="text-4xl ml-4" />
                    </div>
                  </div>
                  <div className="stat w-4">
                    <div className="stat-title w-4 md:w-32 lg:w-16 xl:w-26">
                      Special Defense
                    </div>
                    <div className="stat-value text-sky-400 flex">
                      {pokemon.stats[4].base_stat}
                      <GiSurroundedShield className="text-4xl ml-4" />
                    </div>
                  </div>
                  <div className="stat w-4">
                    <div className="stat-title w-4 md:w-32 lg:w-16 xl:w-26">
                      Speed
                    </div>
                    <div className="stat-value text-yellow-500 flex">
                      {pokemon.stats[5].base_stat}
                      <GiWalkingBoot className="text-4xl ml-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero min-h-16 bg-base-200">
            <div className="hero-content w-full">
              <EvolutionChain pokemonSpecies={pokemonSpecies} />
            </div>
          </div>
        </Card>
        <GoBackButton />
      </QueryClientProvider>
    );
  } else if (pokemonError || pokemonSpeciesError) {
    return <NotFound />;
  }
}

export default PokemonInfo;
