import React, { useState } from "react";
import Footer from "./Footer";

function Landing() {
  // States to control the moving DIV of bar1...bar4
  const [bar1Container, setBar1Container] = useState("hideInfoContainer");
  const [bar2Container, setBar2Container] = useState("hideInfoContainer");
  const [bar3Container, setBar3Container] = useState("hideInfoContainer");
  const [isStart, setIsStart] = useState(true);
  const infoBarHeight = 800;
  const navBarHeight = 105;

  // This function handles which bar's DIV start to move depending on the scroll position
  function moveIt() {
    const appDiv = document.querySelector(".App");
    let top = appDiv.getBoundingClientRect().top;
    // Setting up the classNames of bars depending on the scroll position

    setBar1Container(
      top <= 0 && top >= (infoBarHeight * 0.5 + navBarHeight) * -1
        ? "showInfoContainer"
        : "hideInfoContainer"
    );

    setBar2Container(
      top <= (infoBarHeight * 0.5 + navBarHeight) * -1 &&
      top >= (infoBarHeight * 1.5 + navBarHeight) * -1
        ? "showInfoContainer"
        : "hideInfoContainer"
    );

    setBar3Container(
      top <= (infoBarHeight * 1.5 + navBarHeight) * -1 &&
      top >= (infoBarHeight * 2.5 + navBarHeight) * -1
        ? "showInfoContainer"
        : "hideInfoContainer"
    );
  }
  // To create a delay of displaying infoBa1 during the start
  if (isStart) {
    setBar1Container("hideInfoContainer");
    setIsStart(false);
    setTimeout(() => {
      setBar1Container("showInfoContainer");
    }, 500);
  }
  window.onscroll = moveIt;

  return (
    <div>
      <header>
        <h1 className="seoHeader">
          Moringa Oleifera - csodafa, horse radish tree - ismertető
        </h1>
      </header>
      <section>
        {/* First info bar - the main text is on the LEFT side with animation */}
        <div className="info bar1">
          <div className={`infoContainer ${bar1Container}`}>
            <header className="infoTitle borderedTitle specialText">
              HASZNÁLD FEL
              <div className="infoSubTitle">a természet erejét !</div>
            </header>

            <section id="infoText">
              Testünket folyamatosan bombázzák külső hatások. Ilyenek pédául a
              Nap UV sugárzása, vagy a baktériumok, vírusok, de ilyenek az
              emberi tevékenység olyan következményei is, mint a vegyianyagokkal
              szennyezett levegő, a talaj és a víz vagy a különféle
              élelmiszeripari adalékanyagok. <br />Egészségünket és
              életartalmunkat ezek a negatív hatások erőteljesen képesek
              befolyásolni. <br />Segíts magadon és ne várd meg, amíg baj lesz!
            </section>
          </div>
        </div>

        {/* Second info bar - the main text , is on the RIGHT side with animation */}
        <div className="info bar2">
          <div className={`infoContainer ${bar2Container}`}>
            <header className="infoTitle borderedTitle specialText">
              VÉDD MEG
              <div className="infoSubTitle">a testedet !</div>
            </header>
            <section id="infoText">
              Ez a sok negatív hatás túlterhelheti a testedet és kialakulhat az
              oxidatív stressz állapota valamint különféle krónikus gyulladások.
              A tested ugyan erőteljes védelmi vonallal rendelkezik ezeknek a
              fenyegetéseknek a leküzdésére, de van, hogy ez nem elegendő és be
              kell avatkoznod. <br />Egészséges táplálkozással és sok mozgással
              felkészítheted magad és jelentősen megnövelheted a tested
              ellenálló képességét.
            </section>
          </div>
        </div>

        {/* Third info bar - the main text is on the LEFT side with animation */}
        <div className="info bar3">
          <div className={`infoContainer ${bar3Container}`}>
            <header className="infoTitle borderedTitle specialText">
              FEDEZD FEL
              <div className="infoSubTitle">a csodafát !</div>
            </header>
            <section id="infoText">
              A Moringa Oleifera, ez az Indiában őshonos fa akár segíthet neked
              is. Több tápanyagot tartalmaz, mint bármely más ismert növény a
              földön. Az ősi indiai orvoslás 300 féle betegség megelőzésére vagy
              kezelésére használta. A fa különböző részeit - levél, virág,
              kéreg, gyökér -, ma is mind felhasználják a hagyományos
              orvoslásban.
            </section>
            <button className="buttons">
              <a
                className="buttonLink"
                href="https://www.moringatea.hu/benefits"
              >
                MIÉRT JÓ
              </a>
            </button>
          </div>
          {/* <div className="textContainer">
            Számos néven ismert, mint pl. "Miracle Tree", "HorseRadish Tree",
            "Drumstick Tree". A fa különbző részeit - levél, virág, kéreg,
            gyökér -, mind felhasználják a hagyományos orvoslásban valamint
            italok, ételek és mozmetikumok készítésére.
          </div> */}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Landing;
