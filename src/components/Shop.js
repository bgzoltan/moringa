import React, { useState } from "react";
import CreateTeas from "./CreateTeas";
import DisplayTeas from "./DisplayTeas";
import CreateSmoothies from "./CreateSmoothies";
import DisplaySmoothies from "./DisplaySmoothies";

function Shop() {
  let teas = CreateTeas();
  const [selectedTea, setSelectedTea] = useState(teas[0]);
  let smoothies = CreateSmoothies();
  const [selectedSmoothie, setSelectedSmoothie] = useState(smoothies[0]);

  return (
    <div id="shopContainer">
      <h1>
        MORINGA <span className="textHighl">TERMÉKEK</span>
      </h1>
      <DisplayTeas
        teas={teas}
        selectedTea={selectedTea}
        setSelectedTea={setSelectedTea}
      />
      <div style={{ height: "50px" }} />
      <DisplaySmoothies
        smoothies={smoothies}
        selectedSmoothie={selectedSmoothie}
        setSelectedSmoothie={setSelectedSmoothie}
      />
    </div>
  );
}

export default Shop;
