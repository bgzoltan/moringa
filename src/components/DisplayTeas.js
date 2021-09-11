function DisplayTeas({ teas, selectedTea, setSelectedTea }) {
  const teaClickHandler = selected => {
    console.log(selected);
    let newSelectedTea = teas.filter(tea => tea.flavour === selected);
    console.log(newSelectedTea[0]);
    setSelectedTea(newSelectedTea[0]);
  };

  return (
    <div className="productContainer">
      <div className="prBar">
        <div className="prLeftSide">
          <img
            src={selectedTea.image}
            alt={`Moringa tea ${selectedTea.flavour}`}
          />
        </div>
        <div className="prRightSide">
          <div className="prInfoContainer">
            <div className="prTitle">
              {selectedTea.type}
            </div>

            <select
              onChange={e => teaClickHandler(e.target.value)}
              className="prSelect"
              name="Moringa"
            >
              {teas.map((obj, indx) =>
                <option value={obj.flavour} key={indx}>
                  {obj.flavour}
                </option>
              )}
            </select>

            <div className="prDetails">
              <div className="prDetailsTitle"> Leírás</div>
              <ul>
                <li>
                  {selectedTea.use}
                </li>
                <li>
                  {selectedTea.qty}
                </li>
                {selectedTea.features.map((feature, indx) =>
                  <button key={indx} className="productFeatures">
                    {feature}
                  </button>
                )}
              </ul>
              <div className="prDetailsTitle"> Összetevők</div>

              <ul>
                {selectedTea.ingredients.map((ingredient, indx) =>
                  <li key={indx}>
                    {ingredient}
                  </li>
                )}
              </ul>
              <button className="buttons buttonShop">
                {" "}<a
                  className="buttonLink"
                  href="https://okosbazar.hu/collections/indiai-bio-moringa-es-tulsi-teak"
                >
                  IRÁNY A BOLT
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayTeas;
