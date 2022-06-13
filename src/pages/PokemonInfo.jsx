import React from "react";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import PokemonContext from "../context/PokemonContext";
import Card from "../components/ui/Card";

function PokemonInfo() {
  const params = useParams();
  const { pokemonDesc, getPokemonDesc, getPokemonStats, pokemonStats } = useContext(PokemonContext);


  useEffect(() => {
    getPokemonDesc(params.pokemon);
    console.log("hello");
    getPokemonStats(params.pokemon);

    console.log(pokemonStats);

  }, [pokemonStats,  params]);

  return (
    <Card>
      <div className="hero min-h-16 bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://api.lorem.space/image/movie?w=260&h=400"
            className="max-w-sm rounded-lg shadow-2xl"
            alt="pic"
          />
          <div>
            <h1 className="text-5xl font-bold text-center">
              {params.pokemon.charAt(0).toUpperCase() +
                params.pokemon.substring(1)}
            </h1>
            <p className="py-6">{pokemonDesc}</p>
            <div className="stats shadow mb-6 ">
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
                <div className="stat-value text-primary">{pokemonStats[0].base_stat}</div>
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
                <div className="stat-value text-primary">{pokemonStats[1].base_stat}</div>
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
                <div className="stat-value text-primary">{pokemonStats[2].base_stat}</div>
                {/* <div class="stat-desc">21% more than last month</div> */}
              </div>
            </div>
            <div className="stats shadow">
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
                <div className="stat-value text-primary">{pokemonStats[3].base_stat}</div>
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
                <div className="stat-value text-primary">{pokemonStats[4].base_stat}</div>
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
                <div className="stat-value text-primary">{pokemonStats[5].base_stat}</div>
                {/* <div class="stat-desc">21% more than last month</div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default PokemonInfo;
