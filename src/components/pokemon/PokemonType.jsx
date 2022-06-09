import React from "react";

function PokemonType({ types }) {
  return (
    <>
      {types.length === 1 && (
        <div>
          <div className="badge badge-lg">{types[0].type.name}</div>
        </div>
      )}
      {types.length === 2 && (
        <div>
          <div className="badge badge-lg">{types[0].type.name}</div>
          <div className="badge badge-lg">{types[1].type.name}</div>
        </div>
      )}
    </>
  );
}

export default PokemonType;
