import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { useParams } from "react-router-dom";
import EvolutionChain from "../components/pokemon/EvolutionChain";
import Card from "../components/ui/Card";
import useFetch from "../hooks/useFetch";

const api_url = "https://pokeapi.co/api/v2";

// You might want to add a 'go back' button that directs you to the home page

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

  const numberPadding = (id) => {
    if (id < 10) {
      return "00" + id;
    } else if (id < 100) {
      return "0" + id;
    } else {
      return id;
    }
  };

  if (pokemonLoading || pokemonSpeciesLoading) {
    return <h2>Loading...</h2>;
  } else if (
    !pokemonLoading &&
    pokemon &&
    !pokemonSpeciesLoading &&
    pokemonSpecies
  ) {
    return (
      <QueryClientProvider client={queryClient}>

      <Card>
        <div className="hero min-h-16 bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${numberPadding(
                pokemon.id
                )}.png`}
                className="max-w-sm rounded-lg shadow-2xl"
                alt="pic"
                />
            <div>
              <h1 className="text-5xl font-bold text-center">
                {params.pokemon.charAt(0).toUpperCase() +
                  params.pokemon.substring(1)}
              </h1>
              <p className="py-6">
                {pokemonSpecies.flavor_text_entries[7].flavor_text}
              </p>
              <div className="stats shadow mb-6 min-w-full">
                <div className="stat">
                  <div className="stat-figure text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-8 h-8 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        ></path>
                    </svg>
                  </div>
                  <div className="stat-title">HP</div>
                  <div className="stat-value text-primary">
                    {pokemon.stats[0].base_stat}
                  </div>
                  {/* <div class="stat-desc">21% more than last month</div> */}
                </div>

                <div className="stat">
                  <div className="stat-figure text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-8 h-8 stroke-current"
                      >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        ></path>
                    </svg>
                  </div>
                  <div className="stat-title">Attack</div>
                  <div className="stat-value text-primary">
                    {pokemon.stats[1].base_stat}
                  </div>
                  {/* <div class="stat-desc">21% more than last month</div> */}
                </div>

                <div className="stat">
                  <div className="stat-figure text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-8 h-8 stroke-current"
                      >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        ></path>
                    </svg>
                  </div>
                  <div className="stat-title">Defense</div>
                  <div className="stat-value text-primary">
                    {pokemon.stats[2].base_stat}
                  </div>
                  {/* <div class="stat-desc">21% more than last month</div> */}
                </div>
              </div>
              <div className="stats shadow min-w-full">
                <div className="stat">
                  <div className="stat-figure text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-8 h-8 stroke-current"
                      >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        ></path>
                    </svg>
                  </div>
                  <div className="stat-title">Special Attack</div>
                  <div className="stat-value text-primary">
                    {pokemon.stats[3].base_stat}
                  </div>
                  {/* <div class="stat-desc">21% more than last month</div> */}
                </div>
                <div className="stat">
                  <div className="stat-figure text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-8 h-8 stroke-current"
                      >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      ></path>
                    </svg>
                  </div>
                  <div className="stat-title">Special Defense</div>
                  <div className="stat-value text-primary">
                    {pokemon.stats[4].base_stat}
                  </div>
                  {/* <div class="stat-desc">21% more than last month</div> */}
                </div>
                <div className="stat">
                  <div className="stat-figure text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-8 h-8 stroke-current"
                      >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        ></path>
                    </svg>
                  </div>
                  <div className="stat-title">Speed</div>
                  <div className="stat-value text-primary">
                    {pokemon.stats[5].base_stat}
                  </div>
                  {/* <div class="stat-desc">21% more than last month</div> */}
                </div>
              </div>
            </div>
            <EvolutionChain pokemonSpecies={pokemonSpecies}/>
          </div>
        </div>
      </Card>
    </QueryClientProvider>
    );
  } else if (pokemonError || pokemonSpeciesError) {
    return <h2>Oops! Something went wrong I guess !?</h2>;
  }
}

export default PokemonInfo;
