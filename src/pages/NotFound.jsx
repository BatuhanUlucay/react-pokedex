import React from "react";
import { Link } from "react-router-dom";
import NotFoundPika from "../assets/pikachu-umm.gif";

function NotFound() {
  return (
    <div className="h-screen">
      <div className="flex">
        <h1 className="text-9xl my-16">404</h1>
        <img src={NotFoundPika} alt="Not Found" className="mx-32 my-16" />
      </div>
      <p className="text-3xl">
        Uh-oh! I couldn't find what you are looking for.
      </p>
      <p className="mt-16">
        Wanna go{" "}
        <Link to="/" className="text-orange-500">
          homepage?
        </Link>
      </p>
    </div>
  );
}

export default NotFound;
