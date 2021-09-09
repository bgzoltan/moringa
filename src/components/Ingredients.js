// import "../App.css";
import React, { useState } from "react";
import IngredientsCircleGraph from "./IngredientsCircleGraph";
import IngredientsVitamins from "./IngredientsVitamins";
import Footer from "./Footer";

function Ingredients() {
  const [infoModal, setInfoModal] = useState("");
  const [showModal, setShowModal] = useState("hideInfoModal");

  return (
    <div id="ingredientsContainer">
      <div id={showModal}>
        {infoModal}
      </div>
      <header>
        <h1 className="specialText">
          A MORINGA <span className="textHighl">TÁPANYAGAI</span>
        </h1>
      </header>

      <div id="ingredientsTitleText">
        <div>
          A Moringa Oleifera a földön fellelhető növények között a legnagyobb
          tápanyagösszetételű.
        </div>
      </div>
      <IngredientsCircleGraph
        setInfoModal={setInfoModal}
        setShowModal={setShowModal}
      />
      <IngredientsVitamins />
      <Footer />
    </div>
  );
}

export default Ingredients;
