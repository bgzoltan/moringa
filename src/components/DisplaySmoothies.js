function DisplaySmoothies({
  smoothies,
  selectedSmoothie,
  setSelectedSmoothie
}) {
  const smoothieClickHandler = selected => {
    let newSelectedSmoothie = smoothies.filter(
      smoothie => smoothie.flavour === selected
    );

    setSelectedSmoothie(newSelectedSmoothie[0]);
  };

  console.log(selectedSmoothie);
  return (
    <div className="productContainer">
      <div className="prBar">
        <div className="prLeftSide">
          <img
            src={selectedSmoothie.image}
            alt={`Moringa smoothie ${selectedSmoothie.flavour}`}
          />
        </div>
        <div className="prRightSide">
          <div className="prInfoContainer">
            <div className="prTitle">
              {selectedSmoothie.type}
            </div>

            {/* <div>Választék</div> */}

            <select
              onChange={e => smoothieClickHandler(e.target.value)}
              className="prSelect"
              name="Smoothie"
            >
              {smoothies.map((obj, indx) =>
                <option value={obj.flavour} key={indx}>
                  {obj.flavour}
                </option>
              )}
            </select>

            <div className="prDetails">
              <div className="prDetailsTitle"> Leírás</div>
              <ul>
                <li>
                  {selectedSmoothie.use}
                </li>
                <li>
                  {selectedSmoothie.cal}
                </li>
                <li>
                  {selectedSmoothie.qty}
                </li>
                <li>
                  {selectedSmoothie.qtyUse}
                </li>
                {selectedSmoothie.features.map((feature, indx) =>
                  <button key={indx} className="productFeatures">
                    {feature}
                  </button>
                )}
              </ul>
              <div className="prDetailsTitle"> Összetevők</div>

              <ul>
                {selectedSmoothie.ingredients.map((ingredient, indx) =>
                  <li key={indx}>
                    {ingredient}
                  </li>
                )}
              </ul>
              <button className="buttons buttonShop">
                <a
                  className="buttonLink"
                  href="https://okosbazar.hu/collections/moringa-smoothie-porok"
                >
                  IRÁNY A BOLT
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div />
    </div>
  );
}

export default DisplaySmoothies;
