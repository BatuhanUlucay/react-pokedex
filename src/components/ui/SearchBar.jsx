import React from "react";
import { useContext } from "react";
import PokemonContext from "../../context/PokemonContext";

function SearchBar() {

  const { setSearchText} = useContext(PokemonContext);

  const handleChange = (event) => {
    setSearchText(event.target.value);
  }

  return (
    
      <input
        type="text"
        className="bg-gray-200 input-lg text-black flex-grow rounded-lg shadow"
        placeholder="Search"
        onChange={handleChange}
      ></input>
  );
}

export default SearchBar;
