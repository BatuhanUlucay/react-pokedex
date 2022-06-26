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
    setText(event.target.value.toLowercase());
  };

  return (
    <input
      type="text"
      className="bg-gray-200 input-lg text-black rounded-lg shadow min-w-0"
      placeholder="Search"
      onChange={handleChange}
    ></input>
  );
}

export default SearchBar;
