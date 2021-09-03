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
            <p>
              A C vitamin testünk védelmi vonalának egyik legfontosabb segítője,
              mert erős antioxidáns. Ezen túlmenően számos más pozitív hatása is
              van. Ajánlott napi bevitel 75-90mg.
            </p>
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
            <p>
              Az A vitamin zsírban oldódó vitamin, a szem vitaminja, de fontos
              az egészséges bőr, a haj, a csontok és a fogak fejlődéséhez is.
              Különösen fontos a gyerekkori fejlődés során. Hiánya számos
              betegséget okozhat. Túladagolása sárgasághoz vezethet.
            </p>
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
            <p>
              A kalcium rendkívül fontos a szervezetünknek, nem csupán a csontok
              szilárdsága miatt, hanem mert szerepe van az idegrendszer és az
              izmok működésében is, de még a véralvadásra is hatással van. A
              fehérjék a testünk alapvető építőelemei. Minden sejtünk
              működéséhez szükséges. Hiányában nem csupán izomgyengeség, de
              egyéb betegségek is kialakulhatnak.
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
              backgroundPositionX: "5px"
            }}
          />
          <div className="ingredientsText">
            <h2>3x több kálium, mint a banánban</h2>
            <p>
              A Kálium a sejtek egészséges működéséhez nélkülözhetetlen. A
              káliumbevitel csökkentheti a vérnyomást, a stroke kockázatát.
              Hiányában izomgyengeség, zavartság, lehangoltság is kialakulhat.
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
              backgroundPositionX: "15px"
            }}
          />
          <div className="ingredientsText">
            <h2>3x több E vitamin, mint a spenótban</h2>
            <p>
              A E vitamin zsírban oldódó vitamin és jelentős antioxidáns. Nem
              csupán a bőr, a haj egészség segíti elő, de számos testi
              folyamatban részt vesz. Hiányában többek között száraz bőr, lassú
              sebgyógyulás, visszértágulat is előfordulhat.{" "}
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
            <h2>3x több vas, mint a mandulában</h2>
            <p>
              A vas, mint a vér hemoglobinjának alkotóeleme, fontos szerepet
              játszik abban, hogy elegendő oxigént tudjon szálítani a vér a
              testünk különböző részeibe. Hiánya gyengeséget, fejfájást, esetleg
              fokozott szívdobogást, stb... okozhat.
            </p>
          </div>
          <div id="line" />
        </li>
      </ul>
    </div>
  );
}

export default IngredientsVitamins;
