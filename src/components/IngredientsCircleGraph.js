import React, { useState, useEffect, useRef } from "react";

function IngredientsCircleGraph({ setInfoModal, setShowModal }) {
  const [circleColor1, setCircleColor1] = useState("");
  const [circleColor2, setCircleColor2] = useState("");
  const [circleColor3, setCircleColor3] = useState("");
  const [circleColor4, setCircleColor4] = useState("");
  const [circleColor5, setCircleColor5] = useState("");
  const [circleColor6, setCircleColor6] = useState("");
  const [firstClick, setFirstClick] = useState(false);
  const [clicked, setClicked] = useState(false);

  function hideLastRedCircle() {
    // Just to pass a function to delayCircle()
  }

  async function delayCircle(msec, fn) {
    let promise = new Promise(resolve => setTimeout(resolve, msec));
    await promise;
    setCircleColor1("");
    setCircleColor2("");
    setCircleColor3("");
    setCircleColor4("");
    setCircleColor5("");
    setCircleColor6("");
    fn("outerCircleRed");
  }

  async function delayModal(msec, fn) {
    fn("showInfoModal");
    setClicked(true);
    let promise = new Promise(resolve => setTimeout(resolve, msec));
    await promise;
    setInfoModal("");
    setShowModal("");
    setClicked(false);
  }

  const timer = useRef(null);

  useEffect(
    () => {
      if (!firstClick) {
        timer.current = setInterval(() => {
          delayCircle(1000, setCircleColor1);
          delayCircle(2000, setCircleColor2);
          delayCircle(3000, setCircleColor3);
          delayCircle(4000, setCircleColor4);
          delayCircle(5000, setCircleColor5);
          delayCircle(6000, setCircleColor6);
          delayCircle(7000, hideLastRedCircle);
        }, 7000);
      } else {
        clearInterval(timer.current);
      }
    },
    [firstClick]
  );

  const mouseHandler = box => {
    setFirstClick(true);
    if (!clicked) {
      delayModal(5000, setShowModal);

      switch (box) {
        case 1:
          setInfoModal(
            "Testünk legfontosabb összetevői a fehérjék. Minden sejtünk tartalmaz fehérjét és az izomzatunk alapvető építőkövei.  A fehérjék aminosav molekulákból épülnek fel. Az ún. esszenciális aminosavakat - amelyeket a testünk nem képes létrehozni -, táplálkozással kell bejuttatnunk. A szükséges napi fehérje mennyiség a kortól, a fizikai akitivtástól és testsúlytól függ."
          );

          break;
        case 2:
          setInfoModal(
            "A vitaminok olyan kis molekulájú szerves anyagok, amelyek nélkülözhetetlenek az egészséges emberi szervezet számára. Kis mennyiségben ugyan, de szükségünk van rájuk. Megkülönböztetünk vízben oldódód (B1-B12, C) és zsírban oldódó (A, D, E, K) vitaminokat. A vízben oldódó vitaminok viszonylag gyorsan kiürülnek a testünkből. A szükséges napi vitaminmennyiség a kortól, fizikai aktivitástól és az előforduló betegségektől függ."
          );

          break;
        case 3:
          setInfoModal(
            "Mindössze a 2000-es évek óta tudjuk, hogy a szabad gyökök milyen negatív hatással vannak a testünkre. Keletkezésük természetes folyamat. Jelenlétüket a szervezetünk is próbálja csökkenteni. Túlzott mennyiségük azonban nagyon káros. Azáltal, hogy rongálják a sejtjeinket, elősegítik az öregedést, károsíthatják a DNS-t. Jelenlegi ismereteink szerint a legjobb `fegyver` ellenük az antioxidánsok fogyasztása, amelyek növényekben találhatók meg."
          );

          break;
        case 6:
          setInfoModal(
            "Az ásványi anyagok a testünknek kb. 5%-át alkotják és rendkívül fontosak, különösen ha pl. a kalciumra gondolunk, amely az erős csontozathoz nélkülözhetetlen. Ide tartoznak még olyan fontos elemek is, mint a Foszfor, a Jód, a Kálium, a Magnézium és a Nátrium."
          );
          break;
        case 8:
          setInfoModal(
            "A nyomelemek olyan ásványi anyagok (mikroelemek), amelyekre a testünknek nagyon kis mennyiségben van szüksége mégis nagyon fontos szerepet töltenek be számos kémiai folyamatban. Ilyenek pl. a Bór, Cink, Mangán, Réz, Szelén, Vas, stb..."
          );
          break;
        case 9:
          setInfoModal(
            "A fitonutriensek a zöldségekben és gyümölcsökben megtalálható olyan vegyületek, amelyek jelentősen hozzájárulhatnak az egészségünk megőrzéséhez és egyes betegségek elkerüléséhez. Több ezer hatóanyag tartozik ide, amelyek közül soknak a hatása még nem teljesen ismert. Fitonutriensek pl. a karotinoidok (pl. sárgarépában), a flavonoidok és az antocianidinek."
          );
          break;
        default:
      }
    }
  };

  return (
    <div id="nutrientsContainer">
      <div id="top" />

      <div id="nutrients">
        <div className="outerCircle box1" id={circleColor1}>
          <div onClick={() => mouseHandler(1)} className="nutrientBox">
            <p>20 féle</p>
            <p>aminosav</p>
          </div>
        </div>
        <div className="outerCircle box2" id={circleColor2}>
          <div onClick={() => mouseHandler(2)} className="nutrientBox">
            <p>AB(1,2,3,6)CE</p>
            <p>vitaminok</p>
          </div>
        </div>
        <div className="outerCircle box3" id={circleColor3}>
          <div onClick={() => mouseHandler(3)} className="nutrientBox">
            <p>46 féle</p>
            <p>antioxidáns</p>
          </div>
        </div>
        <div className="box4" />
        <div className="nutrientBox box5">
          <p>90 féle</p>
          <p>tápanyag</p>
        </div>
        <div className=" box6" />
        <div className="outerCircle box7" id={circleColor6}>
          <div onClick={() => mouseHandler(6)} className="nutrientBox">
            <p>Ásványi</p>
            <p>anyagok</p>
          </div>
        </div>
        <div className="outerCircle box8" id={circleColor5}>
          <div onClick={() => mouseHandler(8)} className="nutrientBox">
            <p>Fontos</p>
            <p>nyomelemek</p>
          </div>
        </div>
        <div className="outerCircle box9" id={circleColor4}>
          <div onClick={() => mouseHandler(9)} className="nutrientBox">
            <p>Fitonutriensek</p>
            <p> </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IngredientsCircleGraph;
