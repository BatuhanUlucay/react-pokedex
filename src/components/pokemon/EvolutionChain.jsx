import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const POKEAPI_URL = "https://pokeapi.co/api/v2/";

function EvolutionChain({ pokemonSpecies }) {

  const numberPadding = (id) => {
    if (id < 10) {
      return "00" + id;
    } else if (id < 100) {
      return "0" + id;
    } else {
      return id;
    }
  };

  const {
    isLoading: EvoChainIsLoading,
    error: EvoChainError,
    data: EvoChainData,
    isFetching: EvoChainIsFetchnig,
    isSuccess: EvoChainIsSuccess,
  } = useQuery(["pokemonSpecies", pokemonSpecies], async () => {
    return axios
      .get(`${pokemonSpecies.evolution_chain.url}`)
      .then((res) => res.data);
  });

  if (EvoChainIsSuccess) {
    let mainArr = [];

    let chain = EvoChainData.chain;

    for (let i = 0; i < chain.evolves_to.length; i++) {
      let entry = [chain.species];
      let tmp = chain.evolves_to[i];
      entry.push(tmp.species);

      while (tmp.hasOwnProperty("evolves_to") && tmp.evolves_to.length !== 0) {
        entry.push(tmp.evolves_to[0].species);
        tmp = chain.evolves_to[i].evolves_to[0];
      }
      mainArr.push(entry);
    }

    console.log(mainArr);

    return (
      <div className={`grid grid-rows-${mainArr.length}`}>
        {mainArr.map((entry) => {
          return (
            <div className={"flex"}>
              {entry.map((poke) => {
                console.log("pokee" , poke)

                const poke_id = poke.url.split("/")[6];
                console.log("id", poke_id);
                return(

                  <img
                  className="mask mask-circle my-8 mx-16 w-32"
                  src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${numberPadding(
                    poke_id
                  )}.png`}
                  alt="Pokemon"
                />
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
