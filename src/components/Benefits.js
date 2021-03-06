import React, { useState } from "react";
import Footer from "./Footer";
import { HashLink as HLink } from "react-router-hash-link";

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
          A Moringa Oleifera sz??r??tott level??nek hat??sai, el??nyei
        </h1>
      </header>
      <section>
        <div className="info bar7">
          <div className={`infoContainer ${bar7Container}`}>
            <header className="infoTitle borderedTitle specialText">
              AZ J?? ??TREND
              <div className="infoSubTitle">a legjobb orvoss??g !</div>
            </header>
            <section id="infoText">
              Az eg??szs??ges, er??s testhez rengeteg j?? min??s??g?? t??panyagra van
              sz??ks??g: feh??rj??kre, zs??rokra, sz??nhidr??tokra, ??sv??nyi anyagokra,
              vitaminokra ??s nyomelemekre. Rohan?? vil??gunkban azonban nem
              t??pl??lkozunk el??g v??ltozatosan ??s j?? min??s??gben. A Moringa
              Oleifera - rendk??v??li m??don -, 90 f??le t??panyagot tartalmaz.
              K??zt??k 46 f??le antioxid??nst, 20 f??le aminosavat, ABCE vitaminokat,
              k??l??nf??le ??sv??nyi anyagokat, nyomelemeket ??s sok rostot.
            </section>
          </div>
        </div>

        {/* <div className="feature featureBar1">
          <div className="featureTitle">KULCSFONTOSS??G?? JELLEMZ??K</div>
          <div className="featureColumns">
            <div className="feature1 column1">
              <div>
                AZ ANTIOXID??NSOK A SZABAD GY??K??K MEGK??T??S??BEN J??TSZANAK
                KULCSFONTOSS??G?? SZEREPET
              </div>
            </div>
            <div className="feature1 column2">Aminosavak</div>
            <div className="feature1 column3">??sv??nyi anyagok</div>
            <div className="feature1 column4">
              Vitaminok Vitaminok Vitaminok Vitaminok
            </div>
            <div className="feature1 column5">Egy??b n??v??nyi t??panyagok</div>
          </div>
        </div> */}

        <div className="info bar8">
          <div className={`infoContainer ${bar8Container}`}>
            <header className="infoTitle borderedTitle specialText">
              A MORINGA
              <div className="infoSubTitle">levele k??l??nleges !</div>
            </header>
            <section id="infoText">
              A fa ??sszes r??sze k??z??l a levele tartalmazza a legt??bb t??panyagot.
              R??ad??sul a sz??r??tott lev??l t??bb t??panyagot tartalmaz, mint a nyers
              lev??l. A sz??r??tott levelet nem csak Indi??ban fogyasztj??k.
              Viszonylag ig??nytelen n??v??ny, ez??rt Moringa ??ltetv??nyek vannak m??r
              ??zsi??ban, Afrik??ban ??s K??z??p-Amerik??ban is.
            </section>
            <button className="buttons">
              <HLink className="buttonLink" to="/ingredients/#top">
                T??PANYAGOK
              </HLink>
            </button>
          </div>
        </div>

        <div className="info bar9">
          <div className={`infoContainer ${bar9Container}`}>
            <header className="infoTitle borderedTitle specialText">
              A MORINGA
              <div className="infoSubTitle">SEG??THET</div>
            </header>
            <section id="infoText">
              <ol>
                <li className={showText} id="delay1">
                  A k??ros szabad gy??k??k elleni k??zdelemben
                </li>
                <li className={showText} id="delay2">
                  Az ??ltal??nos energiaszint fenntart??s??ban
                </li>
                <li className={showText} id="delay3">
                  A gyullad??sok cs??kkent??s??ben
                </li>
                <li className={showText} id="delay4">
                  Az immunrendszer er??s??t??s??ben
                </li>
                <li className={showText} id="delay5">
                  Az ??reged??s lass??t??s??ban
                </li>
                <li className={showText} id="delay6">
                  A v??rnyom??s cs??kkent??s??ben
                </li>
                <li className={showText} id="delay7">
                  A v??rcukorszint cs??kkent??s??ben
                </li>
                <li className={showText} id="delay8">
                  Az em??szt??sben
                </li>
                <li className={showText} id="delay9">
                  A er??nl??t fenntart??s??ban
                </li>
                <li className={showText} id="delay10">
                  A pihentet?? alv??sban
                </li>
                <li className={showText} id="delay11">
                  A m??regtelen??t??sben
                </li>
              </ol>
            </section>
          </div>
          {/* <div className="textContainer">
            A k??v??ban ??s te??ban tal??lhat?? koffein sok embern??l okoz heves
            sz??vdobog??st, izzad??st, fesz??lts??g-??rzetet, v??rnyom??s ingadoz??st,
            majd a hat??s elm??lt??val kimer??lts??g ??rzetet. Vannak azonban
            alternat??v??k ezek elker??l??s??re. Ilyen a csod??latos Moringa is.
          </div> */}
        </div>

        <div className="info bar10">
          <div className={`infoContainer ${bar10Container}`}>
            <header className="infoTitle borderedTitle specialText">
              KOFFEIN MENTES
              <div className="infoSubTitle">energia !</div>
            </header>
            <section id="infoText">
              A legjobban elterjedt ??l??nk??t?? szer??nk a k??v?? ??s a tea. Azonban a
              koffeinnek ??s teinnek sz??mos rossz hat??sa van, amelyeket viszont a
              Moringa nem produk??l, m??gis seg??t az energiaszint n??vel??s??ben. A
              k??v??ban ??s te??ban tal??lhat?? koffein gyorsan emeli meg az
              energiaszintet, a Moringa lassan, fokozatosan. A k??v??val szemben
              nem okoz heves sz??vdobog??st, izzad??st, fesz??lts??g-??rzetet,
              v??rnyom??s ingadoz??st, majd a hat??s elm??lt??val kimer??lts??g ??rzetet.
            </section>
          </div>
        </div>

        <Footer />
      </section>
    </div>
  );
}

export default Benefits;
