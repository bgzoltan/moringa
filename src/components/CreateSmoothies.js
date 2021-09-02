function CreateSmoothies() {
  class Smoothie {
    constructor(flavour, use, ingredients, image) {
      this.producer = "Grenera";
      this.country = "India";
      this.type = "Moringa smoothie por";
      this.flavour = flavour;
      this.use = use;
      this.ingredients = ingredients;
      this.image = image;
    }
  }

  let smoothies = [
    new Smoothie(
      "mandulás",
      "...",
      [
        "Moringa Oleifera levelek*",
        "* BIO - ellenőrzött ökológiai gazdaságból származik"
      ],
      "./img/Grenera-Moringa-Smoothie-Mandula.png"
    ),
    new Smoothie(
      "csokoládés",
      "...",
      [
        "szárított Moringa Oleifera levelek*",
        "* BIO - ellenőrzött ökológiai gazdaságból származik"
      ],
      "./img/Grenera-Moringa-Smoothie-Csokoládé.png"
    ),
    new Smoothie(
      "ananászos",
      "...",
      [
        "szárított Moringa Oleifera levelek*",
        "* BIO - ellenőrzött ökológiai gazdaságból származik"
      ],
      "./img/Grenera-Moringa-Smoothie-Ananász.png"
    ),
    new Smoothie(
      "mangós",
      "...",
      [
        "szárított Moringa Oleifera levelek*",
        "* BIO - ellenőrzött ökológiai gazdaságból származik"
      ],
      "./img/Grenera-Moringa-Smoothie-Mango.png"
    ),
    new Smoothie(
      "gránátalmás",
      "...",
      [
        "szárított Moringa Oleifera levelek*",
        "* BIO - ellenőrzött ökológiai gazdaságból származik"
      ],
      "./img/Grenera-Moringa-Smoothie-Gránátalma.png"
    )
  ];

  return smoothies;
}

export default CreateSmoothies;
