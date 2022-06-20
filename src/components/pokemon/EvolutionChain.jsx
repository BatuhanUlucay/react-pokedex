import React from 'react'
import { useQuery } from "react-query";
import axios from 'axios';

const POKEAPI_URL = "https://pokeapi.co/api/v2/";

function EvolutionChain({pokemonSpecies}) {

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

      console.log(EvoChainData);

      if(EvoChainIsSuccess){

        let tmp = []
        let first = EvoChainData.chain.species.name;
        console.log(first);
        tmp = EvoChainData.chain.evolves_to[0];
        while(tmp !== undefined){
          console.log(tmp.species.name);
          tmp = tmp.evolves_to[0];
          //console.log(EvoChainData);
        }
      }

      

  return (
    <div>EvolutionChain</div>
  )
}

export default EvolutionChain