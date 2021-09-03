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
        <div id="prRightSide">
          <div className="prInfoContainer">
            <div className="prTitle">
              {selectedSmoothie.type}
            </div>

            {/* <div>Választék</div> */}

            <select
              onClick={e => smoothieClickHandler(e.target.value)}
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
                {selectedSmoothie.features.map(feature =>
                  <button>
                    {feature}
                  </button>
                )}
              </ul>
              <div className="prDetailsTitle"> Összetevők</div>

              <ul>
                {selectedSmoothie.ingredients.map(ingredient =>
                  <li>
                    {ingredient}
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div />
    </div>
  );
}

export default DisplaySmoothies;
