// import "../App.css";
import React, { useState } from "react";

function Benefits() {
  console.log("Benefits started");
  // States to control the moving DIV of bar1...bar4
  const [cNBar7Container, setBar7Container] = useState("hideInfoContainer");
  const [cNBar8Container, setBar8Container] = useState("hideInfoContainer");
  const [cNBar10Container, setBar10Container] = useState("hideInfoContainer");
  const [cNBenefits, setcNBenefits] = useState("benefitsHide");

  // This function handles which bar's DIV start to move depending on the scroll position

  function moveIt() {
    const appDiv = document.querySelector(".App");

    // Setting up the classes of bars depending on the scroll position
    console.log(Math.abs(appDiv.getBoundingClientRect().top));
    let infoBarHeight = 800;

    if (Math.abs(appDiv.getBoundingClientRect().top) <= 0) {
      setBar7Container("showInfoContainer");
      setBar8Container("hideInfoContainer");
      setBar10Container("hideInfoContainer");
      setcNBenefits("benefitsHide");
    }
    if (
      Math.abs(appDiv.getBoundingClientRect().top) > infoBarHeight &&
      Math.abs(appDiv.getBoundingClientRect().top) <= infoBarHeight * 2
    ) {
      setBar7Container("hideInfoContainer");
      setBar8Container("showInfoContainer");
      setBar10Container("hideInfoContainer");
      setcNBenefits("benefitsHide");
    }
    if (
      Math.abs(appDiv.getBoundingClientRect().top) > infoBarHeight * 2 &&
      Math.abs(appDiv.getBoundingClientRect().top) <= infoBarHeight * 3
    ) {
      setBar10Container("showInfoContainer");
      setBar8Container("hideInfoContainer");
      setcNBenefits("benefitsShow");
    }
    if (Math.abs(appDiv.getBoundingClientRect().top) > infoBarHeight * 3) {
      setBar7Container("showInfoContainer");
      setBar7Container("hideInfoContainer");
      setcNBenefits("benefitsHide");
    }
  }

  window.onscroll = moveIt;

  return (
    <div>
      <section>
        {/* First info bar - the main text is on the LEFT side with animation */}
        <div className="info bar7">
          <div id="infoContainer" className={cNBar7Container}>
            <div className="infoTitle borderedTitle specialText">
              AZ JÓ ÉTREND
              <div className="infoSubTitle">a legjobb orvosság !</div>
            </div>
            <div id="infoText">
              Az egészséges, erős testhez szükséged van rengeteg tápanyagra,
              azaz fehérjékre, zsírokra, szénhidrátokra, ásványi anyagokra,
              vitaminokra és nyomelemekre. A Moringa Oleifera - rendkívüli módon
              -, 90 féle tápanyagot tartalmaz. Köztük 46 féle antioxidánst, 18
              féle aminosavat, ABCE vitaminokat, különféle ásványi anyagokat,
              nyomelemeket és sok rostot. Nem véletlenül használják pl.
              alultáplált gyerekek étrendjének a kiegészítésére Afrikban.
            </div>
          </div>
          {/* <div className="textContainer">
            Az egészséges test egyik alappillére, hogy a táplálkozás útján
            hozzájusson minden, számára szükséges tápanyaghoz, azaz fehérjékhez,
            zsírokhoz, szénhidrátokhoz, ásványi- és nyom-elemekhez valamint
            vitaminokhoz.
          </div> */}
        </div>

        <div className="feature featureBar1">
          <div className="featureTitle">KULCSFONTOSSÁGÚ JELLEMZŐK</div>
          <div className="featureColumns">
            <div className="feature1 column1">
              <div>Antioxidánsok</div>
            </div>
            <div className="feature1 column2">Aminosavak</div>
            <div className="feature1 column3">Ásványi anyagok</div>
            <div className="feature1 column4">Vitaminok</div>
            <div className="feature1 column5">Egyéb növényi tápanyagok</div>
          </div>
        </div>

        {/* Second info bar - the main text is on the RIGHT side with animation */}
        <div className="info bar8">
          {/* <div className="textContainer">
            A kávéban és teában található koffein sok embernél okoz heves
            szívdobogást, izzadást, feszültség-érzetet, vérnyomás ingadozást,
            majd a hatás elmúltával kimerültség érzetet. Vannak azonban
            alternatívák ezek elkerülésére. Ilyen a csodálatos Moringa is.
          </div> */}

          <div id="infoContainer" className={cNBar8Container}>
            <div className="infoTitle borderedTitle specialText">
              A MORINGA
              <div className="infoSubTitle">levele különleges !</div>
            </div>
            <div id="infoText">
              A Moringa Oleifera fa összes része közül a levele tartalmazza a
              legtöbb tápanyagot, ezért ezt használják a leggyakrabban fel a
              táplálkozásban. Vizsgálatok szerint ráadásul a szárított levél
              több tápanyagot tartalmaz a nyers levélnél. A szárított levelet
              nem csak Indiában fogyasztják már, mert híre egyre gyorsabban
              terjed a világban. Viszonylag igénytelen növény, ezért Moringa
              ültetvények vannak már Ázsiában, Afrikában és Közép-Amerikában is.
            </div>
          </div>
        </div>

        <div className="info bar9">
          <div className={cNBenefits}>
            <div className="animatedText delay1 benefitsTitle">
              <span className="specialText">A Moringa Oleifera </span>
              LEVELE SEGÍTHET...
            </div>
            <ul>
              <li className="animatedText delay1">
                A testedet károsító szabad gyökök elleni küzdelemben
              </li>
              <li className="animatedText delay2">
                Az éberséged és az energiaszinted fenntartásában
              </li>
              <li className="animatedText delay3">
                A testedben lévő gyulladások csökkentésében
              </li>
              <li className="animatedText delay4">
                Az immunrendszered erősítésében
              </li>
              <li className="animatedText delay5">
                A benned zajló öregedési folyamatok lassításában
              </li>
              <li className="animatedText delay6">
                A vérnyomásod szabályozásában
              </li>
              <li className="animatedText delay7">
                A vércukorszinted szabályozásában
              </li>
              <li className="animatedText delay8">A normális emésztésben</li>
              <li className="animatedText delay9">
                A fizikai erőnléted fenntartásában
              </li>
              <li className="animatedText delay10">A pihentető alvásban</li>
              <li className="animatedText delay11">A méregtelenítésben</li>
            </ul>
          </div>
        </div>

        {/* Third info bar - the main text is on the LEFT side with animation */}
        <div className="info bar10">
          <div id="infoContainer" className={cNBar10Container}>
            <div className="infoTitle borderedTitle specialText">
              KOFFEIN MENTES
              <div className="infoSubTitle">energia !</div>
            </div>
            <div id="infoText">
              A legjobban elterjedt élénkítő szerünk a kávé és a tea. Azonban a
              koffeinnek és teinnek számos rossz hatása van, amelyeket viszont a
              Moringa nem produkál, mégis (fokozatosan) feltölt energiával . A
              kávéban és teában található koffein gyorsan emeli meg az
              energiaszintet, de sok embernél okoz heves szívdobogást, izzadást,
              feszültség-érzetet, vérnyomás ingadozást, majd a hatás elmúltával
              kimerültség érzetet. Ráadásul hormonális rendszerünkre is hatással
              van.
            </div>
          </div>
          {/* <div className="textContainer">
            A kávéban és teában található koffein sok embernél okoz heves
            szívdobogást, izzadást, feszültség-érzetet, vérnyomás ingadozást,
            majd a hatás elmúltával kimerültség érzetet. Vannak azonban
            alternatívák ezek elkerülésére. Ilyen a csodálatos Moringa is.
          </div> */}
        </div>

        <div className="info bar11">info5</div>
        <div className="info bar12">info6</div>
      </section>
    </div>
  );
}

export default Benefits;
