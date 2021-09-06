import React, { useState } from "react";
import Footer from "./Footer";

function Landing() {
  // States to control the moving DIV of bar1...bar4
  const [cNBar1Container, setBar1Container] = useState("hideInfoContainer");
  const [cNBar2Container, setBar2Container] = useState("hideInfoContainer");
  const [cNBar3Container, setBar3Container] = useState("hideInfoContainer");
  const [isStart, setIsStart] = useState(true);
  const infoBarHeight = 800;
  const navBarHeight = 105;

  // This function handles which bar's DIV start to move depending on the scroll position
  function moveIt() {
    const appDiv = document.querySelector(".App");

    // Setting up the classNames of bars depending on the scroll position
    console.log("Top", appDiv.getBoundingClientRect().top);
    if (appDiv.getBoundingClientRect().top <= 0) {
      setBar1Container("showInfoContainer");
      setBar2Container("hideInfoContainer");
      setBar3Container("hideInfoContainer");
    }
    if (
      appDiv.getBoundingClientRect().top <=
        (infoBarHeight * 0.5 + navBarHeight) * -1 &&
      appDiv.getBoundingClientRect().top >=
        (infoBarHeight * 2.2 + navBarHeight) * -1
    ) {
      setBar1Container("hideInfoContainer");
      setBar2Container("showInfoContainer");
      setBar3Container("hideInfoContainer");
    }

    if (
      Math.abs(appDiv.getBoundingClientRect().top) >
        infoBarHeight + navBarHeight &&
      appDiv.getBoundingClientRect().top <=
        (infoBarHeight * 1.5 + navBarHeight) * -1
    ) {
      setBar2Container("hideInfoContainer");
      setBar3Container("showInfoContainer");
    }
  }
  console.log("Height", -1 * (infoBarHeight * 2 + navBarHeight));
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
      <section>
        {/* First info bar - the main text is on the LEFT side with animation */}
        <div className="info bar1">
          <div id="infoContainer" className={cNBar1Container}>
            <header className="infoTitle borderedTitle specialText">
              HASZNÁLD FEL
              <div className="infoSubTitle">a természet erejét !</div>
            </header>

            {/* <span className="specialText">Fenyegetések</span> */}
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
          {/* <div className="textContainer">
            Ezek a fenyegetések részben a környzetünk hatásai. Ilyen pédául a
            Nap UV sugárzása. Másik részüket mi, emberek hoztuk létre, mint
            például a szennyezett levegőt, talajt és vízet. Egészségünket és
            öregedési folyamatainkat sajnos ezek a fenyegetések jelentősen
            befolyásolják.
          </div> */}
        </div>

        {/* Second info bar - the main text , is on the RIGHT side with animation */}
        <div className="info bar2">
          {/* <div className="textContainer">
            Megfelelő táplálkozással és elegendő mozgással elősegíheted a tested
            védekező képességét. A rossz táplálkozás, a sok stressz, a sok külső
            behatás azonban túlterhelheti a testedet és kialakulhat az oxidatív
            stressz állapota valamint különféle krónikus gyulladások.
          </div> */}

          <div id="infoContainer" className={cNBar2Container}>
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
          <div id="infoContainer" className={cNBar3Container}>
            <header className="infoTitle borderedTitle specialText">
              FEDEZD FEL
              <div className="infoSubTitle">a csodafát !</div>
            </header>
            {/* <span className="specialText">Moringa, a csodafa</span> */}
            <section id="infoText">
              A Moringa Oleifera, ez az Indiában őshonos fa akár segíthet neked
              is. Több tápanyagot tartalmaz, mint bármely más ismert növény a
              földön. Az ősi indiai orvoslás 300 féle betegség megelőzésére vagy
              kezelésére használta. A fa különböző részeit - levél, virág,
              kéreg, gyökér -, ma is mind felhasználják a hagyományos
              orvoslásban.
            </section>

            <a className="buttonLink buttonFurther" href="/benefits">
              MIÉRT JÓ
            </a>
          </div>
          {/* <div className="textContainer">
            Számos néven ismert, mint pl. "Miracle Tree", "HorseRadish Tree",
            "Drumstick Tree". A fa különbző részeit - levél, virág, kéreg,
            gyökér -, mind felhasználják a hagyományos orvoslásban valamint
            italok, ételek és mozmetikumok készítésére.
          </div> */}
        </div>
        {/* <div className="info bar4">info4</div>
        <div className="info bar5">info5</div>
        <div className="info bar6">info6</div> */}
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Landing;
