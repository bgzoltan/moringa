import React, { useState } from "react";

function Landing() {
  // States to control the moving DIV of bar1...bar4
  const [cNBar1Container, setBar1Container] = useState("hideContainer");
  const [cNBar2Container, setBar2Container] = useState("hideContainer");
  const [cNBar3Container, setBar3Container] = useState("hideContainer");

  // This function handles which bar's DIV start to move depending on the scroll position
  function moveIt() {
    const appDiv = document.querySelector(".App");
    let infoBarHeight = 800;
    let navBarHeigth = 100;
    // Setting up the classes of bars depending on the scroll position
    if (
      Math.abs(appDiv.getBoundingClientRect().top) <=
      navBarHeigth + infoBarHeight / 2
    ) {
      setBar1Container("showInfoContainer");
      setBar2Container("hideInfoContainer");
      setBar3Container("hideInfoContainer");
    }
    if (
      Math.abs(appDiv.getBoundingClientRect().top) >
        navBarHeigth + infoBarHeight / 2 &&
      Math.abs(appDiv.getBoundingClientRect().top) <=
        infoBarHeight + navBarHeigth
    ) {
      setBar1Container("hideInfoContainer");
      setBar2Container("showInfoContainer");
      setBar3Container("hideInfoContainer");
    }
    if (
      Math.abs(appDiv.getBoundingClientRect().top) >
        infoBarHeight + navBarHeigth &&
      Math.abs(appDiv.getBoundingClientRect().top) <=
        infoBarHeight * 2 + navBarHeigth
    ) {
      setBar3Container("showInfoContainer");
      setBar2Container("hideInfoContainer");
    }
  }

  window.onscroll = moveIt;

  return (
    <div>
      <section>
        {/* First info bar - the main text is on the LEFT side with animation */}
        <div className="info bar1">
          <div id="infoContainer" className={cNBar1Container}>
            <div className="infoTitle borderedTitle specialText">
              HASZNÁLD FEL
              <div className="infoSubTitle">a természet erejét !</div>
            </div>

            {/* <span className="specialText">Fenyegetések</span> */}
            <div id="infoText">
              Az egészségünket folyamatosan támadások érik. Ezek részben a
              környzetünk hatásai, mint pédául a Nap UV sugárzása. Másik
              részüket mi, emberek hoztuk létre. Ilyenek például a szennyezett
              levegő, a talaj és víz. Egészségünket és öregedési folyamatainkat
              a fenyegető szabad gyökök, a kialakuló oxidatív stressz és a
              gyulladások jelentősen befolyásolják. Akár súlyos betegségeket is
              előídézhetnek.
              {/* <button>További információ</button> */}
            </div>
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
            <div className="infoTitle borderedTitle specialText">
              Készítsd fel
              <div className="infoSubTitle">a testedet !</div>
            </div>
            <div id="infoText">
              Ez a sok negatív hatás túlterhelheti a testedet és kialakulhat az
              oxidatív stressz állapota valamint különféle krónikus gyulladások.
              A tested ugyan erőteljes védelmi vonallal rendelkezik ezeknek a
              fenyegetéseknek a leküzdésére, de van, hogy ez nem elegendő és
              segítened kell. Megfelelő táplálkozással és sok mozgással
              felkészítheted magad és jelentősen megnövelheted a tested
              ellenálló képességét.
            </div>
          </div>
        </div>

        {/* Third info bar - the main text is on the LEFT side with animation */}
        <div className="info bar3">
          <div id="infoContainer" className={cNBar3Container}>
            <div className="infoTitle borderedTitle specialText">
              ISMERD MEG
              <div className="infoSubTitle">a csodafát !</div>
            </div>
            {/* <span className="specialText">Moringa, a csodafa</span> */}
            <div id="infoText">
              A Moringa Oleifera, ez az Indiában őshonos fa segíthet neked is,
              mert több hasznos összetevőt tartalmaz, mint bármely más ismert
              növény a földön. Az ősi indiai orvoslás 300 féle betegség
              megelőzésére vagy kezelésére használta. A fa különböző részeit -
              levél, virág, kéreg, gyökér -, ma is mind felhasználják a
              hagyományos orvoslásban, valamint italok, ételek és kozmetikumok
              készítésére.
            </div>
            <button>Tudj meg többet</button>
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
    </div>
  );
}

export default Landing;
