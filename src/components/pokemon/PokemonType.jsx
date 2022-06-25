import React from "react";
import bug from "../../assets/pokemon_type_icons/bug.svg"
import dark from "../../assets/pokemon_type_icons/dark.svg";
import dragon from "../../assets/pokemon_type_icons/dragon.svg";
import electric from "../../assets/pokemon_type_icons/electric.svg";
import fairy from "../../assets/pokemon_type_icons/fairy.svg";
import fighting from "../../assets/pokemon_type_icons/fighting.svg";
import fire from "../../assets/pokemon_type_icons/fire.svg";
import flying from "../../assets/pokemon_type_icons/flying.svg";
import ghost from "../../assets/pokemon_type_icons/ghost.svg";
import grass from "../../assets/pokemon_type_icons/grass.svg";
import ground from "../../assets/pokemon_type_icons/ground.svg";
import ice from "../../assets/pokemon_type_icons/ice.svg";
import normal from "../../assets/pokemon_type_icons/normal.svg";
import poison from "../../assets/pokemon_type_icons/poison.svg";
import psychic from "../../assets/pokemon_type_icons/psychic.svg";
import rock from "../../assets/pokemon_type_icons/rock.svg";
import steel from "../../assets/pokemon_type_icons/steel.svg";
import water from "../../assets/pokemon_type_icons/water.svg";

function PokemonType({ types }) {
  return (
    <>
      {types.map((type) => {
        switch (type.type.name) {
          case "bug":
            return (
              <div className="avatar type-icon" title={type.type.name} key={type.type.name}>
                <div className="w-24 mask mask-hexagon bug">
                  <img src={bug} alt="type-icon" />
                </div>
              </div>
            );
          case "dark":
            return (
              <div className="avatar type-icon" title={type.type.name} key={type.type.name}>
                <div className="w-24 mask mask-hexagon dark">
                  <img src={dark} alt="type-icon" />
                </div>
              </div>
            );
          case "dragon":
            return (
              <div className="avatar type-icon" title={type.type.name} key={type.type.name}>
                <div className="w-24 mask mask-hexagon dragon">
                  <img src={dragon} alt="type-icon" />
                </div>
              </div>
            );
          case "electric":
            return (
              <div className="avatar type-icon" title={type.type.name} key={type.type.name}>
                <div className="w-24 mask mask-hexagon electric">
                  <img src={electric} alt="type-icon" />
                </div>
              </div>
            );
          case "fairy":
            return (
              <div className="avatar type-icon" title={type.type.name} key={type.type.name}>
                <div className="w-24 mask mask-hexagon fairy">
                  <img src={fairy} alt="type-icon" />
                </div>
              </div>
            );
          case "fighting":
            return (
              <div className="avatar type-icon" title={type.type.name} key={type.type.name}>
                <div className="w-24 mask mask-hexagon fighting">
                  <img src={fighting} alt="type-icon" />
                </div>
              </div>
            );
          case "fire":
            return (
              <div className="avatar type-icon" title={type.type.name} key={type.type.name}>
                <div className="w-24 mask mask-hexagon fire">
                  <img src={fire} alt="type-icon" />
                </div>
              </div>
            );
          case "flying":
            return (
              <div className="avatar type-icon" title={type.type.name} key={type.type.name}>
                <div className="w-24 mask mask-hexagon flying">
                  <img src={flying} alt="type-icon" />
                </div>
              </div>
            );
          case "ghost":
            return (
              <div className="avatar type-icon" title={type.type.name} key={type.type.name}>
                <div className="w-24 mask mask-hexagon ghost">
                  <img src={ghost} alt="type-icon" />
                </div>
              </div>
            );
          case "grass":
            return (
              <div className="avatar type-icon" title={type.type.name} key={type.type.name}>
                <div className="w-24 mask mask-hexagon grass">
                  <img src={grass} alt="type-icon" />
                </div>
              </div>
            );
          case "ground":
            return (
              <div className="avatar type-icon" title={type.type.name} key={type.type.name}>
                <div className="w-24 mask mask-hexagon ground">
                  <img src={ground} alt="type-icon" />
                </div>
              </div>
            );
          case "ice":
            return (
              <div className="avatar type-icon" title={type.type.name} key={type.type.name}>
                <div className="w-24 mask mask-hexagon ice">
                  <img src={ice} alt="type-icon" />
                </div>
              </div>
            );
          case "normal":
            return (
              <div className="avatar type-icon" title={type.type.name} key={type.type.name}>
                <div className="w-24 mask mask-hexagon normal">
                  <img src={normal} alt="type-icon" />
                </div>
              </div>
            );
          case "poison":
            return (
              <div className="avatar type-icon" title={type.type.name} key={type.type.name}>
                <div className="w-24 mask mask-hexagon poison">
                  <img src={poison} alt="type-icon" />
                </div>
              </div>
            );
          case "psychic":
            return (
              <div className="avatar type-icon" title={type.type.name} key={type.type.name}>
                <div className="w-24 mask mask-hexagon psychic">
                  <img src={psychic} alt="type-icon" />
                </div>
              </div>
            );
          case "rock":
            return (
              <div className="avatar type-icon" title={type.type.name} key={type.type.name}>
                <div className="w-24 mask mask-hexagon rock">
                  <img src={rock} alt="type-icon" />
                </div>
              </div>
            );
          case "steel":
            return (
              <div className="avatar type-icon" title={type.type.name} key={type.type.name}>
                <div className="w-24 mask mask-hexagon steel">
                  <img src={steel} alt="type-icon" />
                </div>
              </div>
            );
          case "water":
            return (
              <div className="avatar type-icon" title={type.type.name} key={type.type.name}>
                <div className="w-24 mask mask-hexagon water">
                  <img src={water} alt="type-icon" />
                </div>
              </div>
            );

          default:
            return null;
        }
      })}
    </>
  );
}

export default PokemonType;
