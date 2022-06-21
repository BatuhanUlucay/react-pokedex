import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const POKEAPI_URL = "https://pokeapi.co/api/v2/";

function EvolutionChain({ pokemonSpecies }) {
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
    let mainArr = []
    
    let chain = EvoChainData.chain;

    for(let i = 0; i < chain.evolves_to.length; i++){
      let entry = [chain.species]
      let tmp = chain.evolves_to[i];
      entry.push(tmp.species);
      
      while(tmp.hasOwnProperty("evolves_to") && tmp.evolves_to.length !== 0){
          entry.push(tmp.evolves_to[0].species);
          tmp = chain.evolves_to[i].evolves_to[0];
        }
        mainArr.push(entry);
    }

    console.log(mainArr);
  }

  return (
    <>
      <h2>Evolution Chain</h2>
      <div className="flex my-16">
        <img
          className="mask mask-circle mx-16"
          src="https://api.lorem.space/image/shoes?w=160&h=160"
        />
      </div>
    </>
  );
}

export default EvolutionChain;
