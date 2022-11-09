import React from "react";
import PokemonType from "../pokemon/PokemonType";
import Card from "./Card";
import { Link } from "react-router-dom";
import numberPadding from "../../util/NumberPadding";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function PokeCard({ id, name, types }) {
  return (
    <Link to={`/pokemons/${id}`}>
      <Card className="min-w-72 bg-base-100 shadow-xl border-2 border-solid">
        <figure>
          <LazyLoadImage
            alt="image-pokemon"
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${numberPadding(
              id
            )}.png`}
            visibleByDefault={false}
            delayMethod={"debounce"}
            effect="blur"
          ></LazyLoadImage>
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
