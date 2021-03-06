import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import numberPadding from "../../util/NumberPadding";

function EvolutionChain({ pokemonSpecies }) {
  const { data: EvoChainData, isSuccess: EvoChainIsSuccess } = useQuery(
    ["pokemonSpecies", pokemonSpecies],
    async () => {
      return axios
        .get(`${pokemonSpecies.evolution_chain.url}`)
        .then((res) => res.data);
    }
  );

  if (EvoChainIsSuccess) {
    let mainChain = [];

    let chain = EvoChainData.chain;

    for (let i = 0; i < chain.evolves_to.length; i++) {
      let entry = [chain.species];
      let tmp = chain.evolves_to[i];
      entry.push(tmp.species);

      while (tmp.hasOwnProperty("evolves_to") && tmp.evolves_to.length !== 0) {
        entry.push(tmp.evolves_to[0].species);
        tmp = chain.evolves_to[i].evolves_to[0];
      }
      mainChain.push(entry);
    }

    if (mainChain.length === 0) {
      mainChain.push([chain.species]);
    }

    return (
      <div className={`grid grid-rows-${mainChain.length} text-center invisible sm:visible`}>
        <h1 className="text-3xl">Evolution Chain</h1>
        {mainChain.map((entry) => {
          return (
            <div className="flex mx-5">
              {entry.map((poke, index) => {
                const poke_id = poke.url.split("/")[6];
                return (
                  <>
                    {index !== 0 && (
                      <AiOutlineRight className="text-5xl self-center" />
                    )}

                    <Link to={`/pokemons/${poke.name}`} className="mx-5">
                      <div className="text-center">
                        <img
                          className="my-8 mx-8 w-32"
                          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${numberPadding(
                            poke_id
                          )}.png`}
                          alt="Pokemon"
                        />
                        <p>
                          {poke.name.charAt(0).toUpperCase() +
                            poke.name.substring(1)}
                        </p>
                      </div>
                    </Link>
                  </>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default EvolutionChain;
