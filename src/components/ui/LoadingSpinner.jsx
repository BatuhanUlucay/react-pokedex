import React from "react";
import Spinner from "../../assets/pokeball-spinner.gif";

function LoadingSpinner() {
  return (
    <div className="w-100 mt-20">
      <img
        width={360}
        className="text-center mx-auto"
        src={Spinner}
        alt="Loading..."
      />
    </div>
  );
}

export default LoadingSpinner;
