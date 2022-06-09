import React from "react";
import PokemonContext from "../../context/PokemonContext";
import Card from "./Card";

function PokeCard({id, name, type}) {

    const numberPadding = (id) => {
        if(id < 10){
            return "00" + id;
        }
        else if(id < 100){
            return "0" + id;
        }
        else{
            return id;
        }
    }

  return (
    <Card className="w-72 bg-base-100 shadow-xl">
      <figure>
        <img
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${numberPadding(id)}.png`}
          alt="Pokemon"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">{type}</button>
        </div>
      </div>
    </Card>
  );
}

export default PokeCard;
