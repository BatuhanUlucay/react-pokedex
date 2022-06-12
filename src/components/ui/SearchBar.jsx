import React from "react";
import { useContext } from "react";
import PokemonContext from "../../context/PokemonContext";

function SearchBar() {

  const { setSearchText} = useContext(PokemonContext);

  const handleChange = (event) => {
    setSearchText(event.target.value);
  }

  return (
    <div className="h-16 flex items-center max-w-md mx-auto shadow rounded my-16">
      <input
        type="text"
        className="bg-gray-200 input-lg text-black flex-grow"
        placeholder="Search"
        onChange={handleChange}
      ></input>
    </div>
  );
}

export default SearchBar;
