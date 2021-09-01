// import "../App.css";
import React, { useState } from "react";
import IngredientsCircleGraph from "./IngredientsCircleGraph";
import IngredientsVitamins from "./IngredientsVitamins";

function Ingredients() {
  return (
    <div id="ingredientsContainer">
      <h1 className="specialText">
        A MORINGA <span className="textHighl">TÁPANYAGAI</span>
      </h1>
      <p id="ingredientsTitleText">
        A Moringa a földön fellelhető növények között a legnagyobb
        tápanyagösszetételű.
      </p>
      <IngredientsCircleGraph />
      <IngredientsVitamins />
    </div>
  );
}

export default Ingredients;
