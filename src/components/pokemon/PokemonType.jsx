import React from "react";
import bug from "./assets/pokemon_type_icons/bug.svg";
import dark from "./assets/pokemon_type_icons/dark.svg";
import dragon from "./assets/pokemon_type_icons/dragon.svg";
import electric from "./assets/pokemon_type_icons/electric.svg";
import fairy from "./assets/pokemon_type_icons/fairy.svg";
import fighting from "./assets/pokemon_type_icons/fighting.svg";
import fire from "./assets/pokemon_type_icons/fire.svg";
import flying from "./assets/pokemon_type_icons/flying.svg";
import ghost from "./assets/pokemon_type_icons/ghost.svg";
import grass from "./assets/pokemon_type_icons/grass.svg";
import ground from "./assets/pokemon_type_icons/ground.svg";
import ice from "./assets/pokemon_type_icons/ice.svg";
import normal from "./assets/pokemon_type_icons/normal.svg";
import poison from "./assets/pokemon_type_icons/poison.svg";
import psychic from "./assets/pokemon_type_icons/psychic.svg";
import rock from "./assets/pokemon_type_icons/rock.svg";
import steel from "./assets/pokemon_type_icons/steel.svg";
import water from "./assets/pokemon_type_icons/water.svg";

function PokemonType({ types }) {
  return (
    <>
      <div>
        <div className="badge badge-lg">
          {types.map((type) => {
            switch (type.type.name) {
              case "bug":
                return (
                  <img className="type-icon bug" src={bug} alt="type-icon" />
                );
              case "dark":
                return <img src={dark} alt="type-icon" />;
              case "dragon":
                return <img src={dragon} alt="type-icon" />;
              case "electric":
                return <img src={electric} alt="type-icon" />;
              case "fairy":
                return <img src={fairy} alt="type-icon" />;
              case "fighting":
                return <img src={fighting} alt="type-icon" />;
              case "fire":
                return <img src={fire} alt="type-icon" />;
              case "flying":
                return <img src={flying} alt="type-icon" />;
              case "ghost":
                return <img src={ghost} alt="type-icon" />;
              case "grass":
                return <img src={grass} alt="type-icon" />;
              case "ground":
                return <img src={ground} alt="type-icon" />;
              case "ice":
                return <img src={ice} alt="type-icon" />;
              case "normal":
                return <img src={normal} alt="type-icon" />;
              case "poison":
                return <img src={poison} alt="type-icon" />;
              case "psychic":
                return <img src={psychic} alt="type-icon" />;
              case "rock":
                return <img src={rock} alt="type-icon" />;
              case "steel":
                return <img src={steel} alt="type-icon" />;
              case "water":
                return <img src={water} alt="type-icon" />;

              default:
                return null;
            }
          })}
        </div>
      </div>
    </>
  );
}

export default PokemonType;
