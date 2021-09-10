import React, { useState } from "react";
import Footer from "./Footer";

function Benefits() {
  // States to control the moving of DIVs: bar7...bar10
  const [bar7Container, setBar7Container] = useState("hideInfoContainer");
  const [bar8Container, setBar8Container] = useState("hideInfoContainer");
  const [bar9Container, setBar9Container] = useState("hideInfoContainer");
  const [bar10Container, setBar10Container] = useState("hideInfoContainer");
  const [showText, setShowText] = useState("showshowText");
  const [isStart, setIsStart] = useState(true);
  const infoBarHeight = 800;
  const navBarHeight = 105;

  // This function handles which bar's DIV start to move depending on the scroll position
  function moveIt() {
    const appDiv = document.querySelector(".App");
    let top = appDiv.getBoundingClientRect().top;

    setBar7Container(
      top <= 0 && top >= (infoBarHeight * 0.5 + navBarHeight) * -1
        ? "showInfoContainer"
        : "hideInfoContainer"
    );

    setBar8Container(
      top <= (infoBarHeight * 0.5 + navBarHeight) * -1 &&
      top >= (infoBarHeight * 1.5 + navBarHeight) * -1
        ? "showInfoContainer"
        : "hideInfoContainer"
    );

    setBar9Container(
      top <= (infoBarHeight * 1.5 + navBarHeight) * -1 &&
      top >= (infoBarHeight * 2.5 + navBarHeight) * -1
        ? "showInfoContainer"
        : "hideInfoContainer"
    );

    setShowText(
      top <= (infoBarHeight * 1.5 + navBarHeight) * -1 &&
      top >= (infoBarHeight * 2.5 + navBarHeight) * -1
        ? "showAnimatedText"
        : "hideAnimatedText"
    );

    setBar10Container(
      top <= (infoBarHeight * 2.5 + navBarHeight) * -1
        ? "showInfoContainer"
        : "hideInfoContainer"
    );
  }

  // To create a delay of displaying bar1 during the start
  if (isStart) {
    setBar7Container("hideInfoContainer");
    setIsStart(false);
    setTimeout(() => {
      setBar7Container("showInfoContainer");
    }, 500);
  }
  window.onscroll = moveIt;

  return (
    <div>
      <header>
        <h1 className="seoHeader">
          A Moringa Oleifera szárított levelének hatásai, előnyei
        </h1>
      </header>
      <section>
        <div className="info bar7">
          <div className={`infoContainer ${bar7Container}`}>
            <header className="infoTitle borderedTitle specialText">
              AZ JÓ ÉTREND
              <div className="infoSubTitle">a legjobb orvosság !</div>
            </header>
            <section id="infoText">
              Az egészséges, erős testhez rengeteg jó minőségű tápanyagra van
              szükség: fehérjékre, zsírokra, szénhidrátokra, ásványi anyagokra,
              vitaminokra és nyomelemekre. Rohanó világunkban azonban nem
              táplálkozunk elég változatosan és jó minőségben. A Moringa
              Oleifera - rendkívüli módon -, 90 féle tápanyagot tartalmaz.
              Köztük 46 féle antioxidánst, 20 féle aminosavat, ABCE vitaminokat,
              különféle ásványi anyagokat, nyomelemeket és sok rostot.
            </section>
          </div>
        </div>

        {/* <div className="feature featureBar1">
          <div className="featureTitle">KULCSFONTOSSÁGÚ JELLEMZŐK</div>
          <div className="featureColumns">
            <div className="feature1 column1">
              <div>
                AZ ANTIOXIDÁNSOK A SZABAD GYÖKÖK MEGKÖTÉSÉBEN JÁTSZANAK
                KULCSFONTOSSÁGÚ SZEREPET
              </div>
            </div>
            <div className="feature1 column2">Aminosavak</div>
            <div className="feature1 column3">Ásványi anyagok</div>
            <div className="feature1 column4">
              Vitaminok Vitaminok Vitaminok Vitaminok
            </div>
            <div className="feature1 column5">Egyéb növényi tápanyagok</div>
          </div>
        </div> */}

        <div className="info bar8">
          <div className={`infoContainer ${bar8Container}`}>
            <header className="infoTitle borderedTitle specialText">
              A MORINGA
              <div className="infoSubTitle">levele különleges !</div>
            </header>
            <section id="infoText">
              A fa összes része közül a levele tartalmazza a legtöbb tápanyagot.
              Ráadásul a szárított levél több tápanyagot tartalmaz, mint a nyers
              levél. A szárított levelet nem csak Indiában fogyasztják.
              Viszonylag igénytelen növény, ezért Moringa ültetvények vannak már
              Ázsiában, Afrikában és Közép-Amerikában is.
            </section>
            <button className="buttons">
              <a
                className="buttonLink"
                href="https://www.moringatea.hu/ingredients"
              >
                TÁPANYAGOK
              </a>
            </button>
          </div>
        </div>

        <div className="info bar9">
          <div className={`infoContainer ${bar9Container}`}>
            <header className="infoTitle borderedTitle specialText">
              A MORINGA
              <div className="infoSubTitle">SEGÍTHET</div>
            </header>
            <section id="infoText">
              <ol>
                <li className={showText} id="delay1">
                  A káros szabad gyökök elleni küzdelemben
                </li>
                <li className={showText} id="delay2">
                  Az általános energiaszint fenntartásában
                </li>
                <li className={showText} id="delay3">
                  A gyulladások csökkentésében
                </li>
                <li className={showText} id="delay4">
                  Az immunrendszer erősítésében
                </li>
                <li className={showText} id="delay5">
                  Az öregedés lassításában
                </li>
                <li className={showText} id="delay6">
                  A vérnyomás csökkentésében
                </li>
                <li className={showText} id="delay7">
                  A vércukorszint csökkentésében
                </li>
                <li className={showText} id="delay8">
                  Az emésztésben
                </li>
                <li className={showText} id="delay9">
                  A erőnlét fenntartásában
                </li>
                <li className={showText} id="delay10">
                  A pihentető alvásban
                </li>
                <li className={showText} id="delay11">
                  A méregtelenítésben
                </li>
              </ol>
            </section>
          </div>
          {/* <div className="textContainer">
            A kávéban és teában található koffein sok embernél okoz heves
            szívdobogást, izzadást, feszültség-érzetet, vérnyomás ingadozást,
            majd a hatás elmúltával kimerültség érzetet. Vannak azonban
            alternatívák ezek elkerülésére. Ilyen a csodálatos Moringa is.
          </div> */}
        </div>

        <div className="info bar10">
          <div className={`infoContainer ${bar10Container}`}>
            <header className="infoTitle borderedTitle specialText">
              KOFFEIN MENTES
              <div className="infoSubTitle">energia !</div>
            </header>
            <section id="infoText">
              A legjobban elterjedt élénkítő szerünk a kávé és a tea. Azonban a
              koffeinnek és teinnek számos rossz hatása van, amelyeket viszont a
              Moringa nem produkál, mégis segít az energiaszint növelésében. A
              kávéban és teában található koffein gyorsan emeli meg az
              energiaszintet, a Moringa lassan, fokozatosan. A kávéval szemben
              nem okoz heves szívdobogást, izzadást, feszültség-érzetet,
              vérnyomás ingadozást, majd a hatás elmúltával kimerültség érzetet.
            </section>
          </div>
        </div>

        <Footer />
      </section>
    </div>
  );
}

export default Benefits;
