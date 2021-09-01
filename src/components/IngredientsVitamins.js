import React from "react";
import Background1 from "../img/orange.png";
import Background2 from "../img/carrot.png";
import Background3 from "../img/milk.png";
import Background4 from "../img/banana.png";
import Background5 from "../img/spinach.png";
import Background6 from "../img/mandeln.png";

function IngredientsVitamins() {
  return (
    <div>
      <ul id="ingredients">
        <li>
          <div
            className="fruits"
            style={{
              transform: "rotate(70deg)",
              backgroundImage: `url(${Background1})`,
              backgroundSize: "60%",
              backgroundPositionY: "55px"
            }}
          />
          <div className="ingredientsText">
            <h2>7x több C vitamin mint a narancsban</h2>
            <p>A C vitamin</p>
          </div>
          <div id="line" />
        </li>
        <li>
          <div
            className="fruits"
            style={{
              transform: "rotate(30deg)",
              backgroundImage: `url(${Background2})`,
              backgroundSize: "100%",
              backgroundPositionY: "10px"
            }}
          />
          <div className="ingredientsText">
            <h2>4x több A vitamin, mint a sárgarépában</h2>
            <p>A C vitamins</p>
          </div>
          <div id="line" />
        </li>
        <li>
          <div
            className="fruits"
            style={{
              transform: "rotate(350deg)",
              backgroundImage: `url(${Background3})`,
              backgroundSize: "80%",
              backgroundPositionY: "50px"
            }}
          />
          <div className="ingredientsText">
            <h2>4x több kalcium és 2x több fehérje mint a tejben</h2>
            <p>A C vitamins</p>
          </div>
          <div id="line" />
        </li>
        <li>
          <div
            className="fruits"
            style={{
              transform: "rotate(35deg)",
              backgroundImage: `url(${Background4})`,
              backgroundSize: "80%",
              backgroundPositionY: "40px",
              backgroundPositionX: "5px"
            }}
          />
          <div className="ingredientsText">
            <h2>3x több kálium, mint a banánban</h2>
            <p>A C vitamins</p>
          </div>
          <div id="line" />
        </li>
        <li>
          <div
            className="fruits"
            style={{
              transform: "rotate(35deg)",
              backgroundImage: `url(${Background5})`,
              backgroundSize: "80%",
              backgroundPositionY: "40px",
              backgroundPositionX: "15px"
            }}
          />
          <div className="ingredientsText">
            <h2>3x több E vitamin, mint a spenótban</h2>
            <p>A C vitamins</p>
          </div>
          <div id="line" />
        </li>
        <li>
          <div
            className="fruits"
            style={{
              transform: "rotate(35deg)",
              backgroundImage: `url(${Background6})`,
              backgroundSize: "80%",
              backgroundPositionY: "40px",
              backgroundPositionX: "15px"
            }}
          />
          <div className="ingredientsText">
            <h2>3x több vas, mint a mandulában</h2>
            <p>A C vitamins</p>
          </div>
          <div id="line" />
        </li>
      </ul>
    </div>
  );
}

export default IngredientsVitamins;
