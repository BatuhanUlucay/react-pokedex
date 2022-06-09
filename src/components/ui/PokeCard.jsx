import React from "react";
import Card from "./Card";

function PokeCard() {
  return (
    <Card className="w-80 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://api.lorem.space/image/shoes?w=400&h=225"
          alt="Shoes"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">Pokemon Name</h2>
        <p>Pokemon Description..............</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">Type Icons Here</button>
        </div>
      </div>
    </Card>
  );
}

export default PokeCard;
