import React from "react";
import { useContext, useEffect, useState } from "react";
import PokemonContext from "../../context/PokemonContext";

function SearchBar() {
  const { setSearchedText } = useContext(PokemonContext);
  const [text, setText] = useState("");

  useEffect(() => {
    setSearchedText(text);
  }, [text]); // eslint-disable-line

  const handleChange = (event) => {
    setText(event.target.value);
  };

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
