import React, { useState } from "react";
import CreateTeas from "./CreateTeas";
import DisplayTeas from "./DisplayTeas";
import CreateSmoothies from "./CreateSmoothies";
import DisplaySmoothies from "./DisplaySmoothies";
import Footer from "./Footer";

function Shop() {
  let teas = CreateTeas();
  const [selectedTea, setSelectedTea] = useState(teas[0]);
  let smoothies = CreateSmoothies();
  const [selectedSmoothie, setSelectedSmoothie] = useState(smoothies[0]);

  return (
    <div id="shopContainer">
      <header>
        <h1>
          MORINGA <span className="textHighl">TERMÉKEK</span>
        </h1>
      </header>

      <section>
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
      </section>

      <Footer />
    </div>
  );
}

export default Shop;
