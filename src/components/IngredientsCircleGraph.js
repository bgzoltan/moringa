import React from "react";

function IngredientsCircleGraph() {
  return (
    <div id="nutrientsContainer">
      <div id="nutrients">
        <div className="nutrientBox box1">
          {" "}<p>20 féle</p>
          <p>aminosav</p>
        </div>
        <div className="nutrientBox box2">
          <p>AB(1,2,3,6)CE</p>
          <p>vitaminok</p>
        </div>
        <div className="nutrientBox box3">
          {" "}<p>46 féle</p>
          <p>antioxidáns</p>
        </div>
        <div className="box4" />
        <div className="nutrientBox box5">
          {" "} <p>90 féle</p>
          <p>tápanyag</p>
        </div>
        <div className=" box6" />
        <div className="nutrientBox box7">
          {" "} <p>Ásványi</p>
          <p>anyagok</p>
        </div>
        <div className="nutrientBox box8">
          {" "} <p>Fontos</p>
          <p>nyomelemek</p>
        </div>
        <div className="nutrientBox box9">
          {" "} <p>Egyéb</p>
          <p>fitonutriensek</p>
        </div>
      </div>
    </div>
  );
}

export default IngredientsCircleGraph;
