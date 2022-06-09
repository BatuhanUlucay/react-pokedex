import React from 'react'
import SearchBar from '../components/ui/SearchBar'
import PokemonList from '../components/pokemon/PokemonList'

function Home() {
  return (
    <>
        <SearchBar />
        <PokemonList />
    </>
  )
}

export default Home