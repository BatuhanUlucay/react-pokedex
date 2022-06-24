import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="">
      <h1 className="text-9xl my-16">404</h1>
      <p className="text-5xl">Uh-oh! I couldn't find what you are looking for.</p>
      <p className="mt-16">Wanna go <Link to="/" className="text-orange-500">homepage?</Link></p>
    </div>
  );
}

export default NotFound;
