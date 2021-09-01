import React, { useState } from "react";

function Shop() {
  class Tea {
    constructor(flavour, ingredients, image) {
      this.producer = "Grenera";
      this.country = "India";
      this.type = "Moringa filteres tea";
      this.flavour = flavour;
      this.ingredients = ingredients;
      this.image = image;
    }
  }

  let teas = [
    new Tea(
      "gyömbéres",
      [
        "Moringa Oleifera levelek*",
        " gyömbér*",
        "édesgyökér*",
        "citromfű*",
        "természetes citrom és gyömbér ízesítés",
        "* BIO - ellenőrzött ökológiai gazdaságból származik"
      ],
      "Grenera-Moringa-Lemon-Ginger-Infusion.png"
    ),
    new Tea(
      "almás-fahéjas",
      [
        "Moringa Oleifera levelek*",
        "fahéj*",
        "édesgyökér*",
        "szárított alma darabok",
        "természetes alma ízesítés",
        "* BIO - ellenőrzött ökológiai gazdaságból származik"
      ],
      ""
    ),
    new Tea(
      "gránátalmás",
      [
        "Moringa Oleifera levelek*",
        "hibiszkus levelek*",
        "édesgyökér*",
        "természetes gránátalma ízesítés",
        "* BIO - ellenőrzött ökológiai gazdaságból származik"
      ],
      ""
    ),
    new Tea(
      "zöld teás",
      [
        "Moringa Oleifera levelek*",
        "zöld tea levelek*",
        "* BIO - ellenőrzött ökológiai gazdaságból származik"
      ],
      ""
    ),
    new Tea(
      "eredeti íz",
      [
        "Moringa Oleifera levelek*",
        "* BIO - ellenőrzött ökológiai gazdaságból származik"
      ],
      ""
    )
  ];

  const [selectedTea, setSelectedTea] = useState(teas[0]);
  console.log(selectedTea);
  const teaClickHandler = selected => {
    console.log(selected);
    let newSelectedTea = teas.filter(tea => tea.flavour === selected);
    console.log(newSelectedTea[0]);
    setSelectedTea(newSelectedTea[0]);
  };

  return (
    <div id="shopContainer">
      <h1 className="specialText">
        A MORINGA <span className="textHighl">TÁPANYAGAI</span>
      </h1>

      <div id="prTea">
        <div className="prImageContainer">
          <img src={selectedTea.img} alt="Moringa tea" />
        </div>
        <div className="prInforContainer">
          <div className="prTitle">
            {selectedTea.type}
          </div>
          <div className="prSelection">
            <div>Választék</div>
            <select
              onClick={e => teaClickHandler(e.target.value)}
              id="teaSelection"
              name="Moringa"
            >
              {teas.map((obj, indx) =>
                <option value={obj.flavour} key={indx}>
                  {obj.flavour}
                </option>
              )}
            </select>
          </div>
          <div className="prDescription">
            Összetevők
            <ul>
              {selectedTea.ingredients.map(ingredient =>
                <li>
                  {ingredient}
                </li>
              )}{" "}
            </ul>
          </div>
        </div>
      </div>
      <div id="prSmoothie">SMOOTHIES</div>
      <div />
    </div>
  );
}

export default Shop;
