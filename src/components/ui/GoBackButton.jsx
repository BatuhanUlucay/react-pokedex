import React from "react";
import { useNavigate } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";

function GoBackButton() {
  let navigate = useNavigate();
  return (
    <button
      class="btn btn-ghost"
      onClick={() => {
        navigate("/");
      }}
    >
      <TiArrowBack className="mr-2"/>
      Go Back To Home
    </button>
  );
}

export default GoBackButton;
