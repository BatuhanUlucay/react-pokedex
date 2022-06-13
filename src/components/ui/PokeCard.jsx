import React from "react";
import PokemonType from "../pokemon/PokemonType";
import Card from "./Card";
import { Link } from "react-router-dom";

function PokeCard({ id, name, types }) {
  const numberPadding = (id) => {
    if (id < 10) {
      return "00" + id;
    } else if (id < 100) {
      return "0" + id;
    } else {
      return id;
    }
  };

  return (
    <Link to={`/pokemons/${name}`}>
      <Card className="min-w-72 bg-base-100 shadow-xl border-2 border-solid">
        <figure>
          <img
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${numberPadding(
              id
            )}.png`}
            alt="Pokemon"
          />
        </figure>

        <div className="card-body">
          <h2 className="card-title justify-center">
            {name.replace(/^./, name[0].toUpperCase())}
          </h2>
          <div className="card-actions justify-center">
            <PokemonType types={types} />
          </div>
        </div>
      </Card>
    </Link>
  );
}

export default PokeCard;
