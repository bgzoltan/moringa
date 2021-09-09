import React from "react";
import Background2 from "../img/orange.png";
import Background1 from "../img/carrot.png";
import Background4 from "../img/milk.png";
import Background5 from "../img/banana.png";
import Background3 from "../img/spinach.png";
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
              backgroundSize: "90%",
              backgroundPositionY: "20px"
            }}
          />
          <div className="ingredientsText">
            <h2>
              <span>A vitamin</span>
            </h2>
            <p>
              A szárított Moringa levelek 4x több A vitamint (~1900µg)
              tartalmaznak, mint ugyanannyi friss sárgarépa (~500µg).
              <br /> Az A vitamin zsírban oldódó vitamin, a szem vitaminja, de
              fontos az egészséges bőr, a haj, a csontok és a fogak fejlődéséhez
              is.
              <br />
              Ajánlott: ~800µg/nap. Maximum: 3000µg/nap.
            </p>
          </div>
          <div id="line" />
        </li>
        <li>
          <div
            className="fruits"
            style={{
              transform: "rotate(350deg)",
              backgroundImage: `url(${Background2})`,
              backgroundSize: "70%",
              backgroundPositionY: "50px"
            }}
          />
          <div className="ingredientsText">
            <h2>
              <span>C vitamin</span>
            </h2>
            <p>
              A Moringa friss levelei 7x több C vitamint (~220mg) tartalmaznak,
              mint ugyanannyi friss narancs . A szárított levelek kevesebbet
              (~17-18mg).
              <br />A C vitamin testünk védelmi vonalának egyik legfontosabb
              segítője, mert erős antioxidáns.
              <br /> Ajánlott: 90mg/nap. Maximum: 2000mg.
            </p>
          </div>
          <div id="line" />
        </li>
        <li>
          <div
            className="fruits"
            style={{
              transform: "rotate(30deg)",
              backgroundImage: `url(${Background3})`,
              backgroundSize: "100%",
              backgroundPositionY: "10px"
            }}
          />
          <div className="ingredientsText">
            <h2>
              <span>E</span> vitamin
            </h2>
            <p>
              A szárított Moringa levél 55x több E vitamint (~110mg) tartalmaz,
              mint ugyanannyi friss spenót levél (~2mg).
              <br /> Az E vitamin zsírban oldódó vitamin és jelentős
              antioxidáns. Nem csupán a bőr, a haj egészség segíti elő, de
              számos testi folyamatban részt vesz. <br />Ajánlott: 100mg/nap.
              Maximum: 300mg/nap.
            </p>
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
              backgroundPositionX: "15px"
            }}
          />
          <div className="ingredientsText">
            <h2>
              <span>KALCIUM</span> és <span>FEHÉRJE</span>
            </h2>
            <p>
              A szárított Moringa levél 200x több kalciumot (~2000mg) tartalmaz,
              mint ugyanannyi tej (~120mg) és kb. 2x több fehérjét is.
              <br /> A kalcium a csontok szilárdságát biztosítja, többek között
              szerepe van az idegrendszer és az izmok működésében is, a
              véralvadásban. Fehérje nem csak az izmok, de minden sejtünk
              működéséhez szükséges. <br />Ajánlottl (kalcium): 1000mg/nap.
              Maximum: 2500mg. <br />Ajánlott (fehérje): 0.8-1.2 g/testsúly
              kilogram.
            </p>
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
              backgroundPositionX: "5px"
            }}
          />
          <div className="ingredientsText">
            <h2>
              <span>KÁLIUM</span>
            </h2>
            <p>
              A Moringa szárított leveleiben 4x több kálium (~1300mg) van, mint
              ugyanannyi friss banánban (~350mg)
              <br /> A Kálium a sejtek egészséges működéséhez nélkülözhetetlen.
              A káliumbevitel csökkentheti a vérnyomást, a stroke kockázatát,
              szükséges az egészséges idegrendszerhez. <br />Ajánlott mennyiség:
              2000mg/nap.
            </p>
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
            <h2>
              <span>VAS</span>
            </h2>
            <p>
              A szárított Moringa levél 6x több vasat (~25mg) tartalmaz, mint
              ugyanannyi nyers mandula (~4mg).
              <br />
              A vas a vér hemoglobinjának alkotóeleme. Többek között fontos
              szerepet játszik abban, hogy elegendő oxigént tudjon szálítani a
              vér a sejtjeinkhez. <br />Ajánlott: 7-11mg/nap. Maximum: 17mg.
            </p>
          </div>
          <div id="line" />
        </li>
      </ul>
    </div>
  );
}

export default IngredientsVitamins;
