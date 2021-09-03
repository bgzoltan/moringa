function CreateTeas() {
  class Tea {
    constructor(flavour, use, ingredients, image) {
      this.producer = "Grenera";
      this.country = "India";
      this.type = "Moringa filteres tea Indiából";
      this.flavour = flavour;
      this.use = use;
      this.qty = "20db filter / doboz";
      this.ingredients = ingredients;
      this.features = [
        "BIO",
        "VEGÁN",
        " 🚫GLUTÉN",
        "🚫CUKOR",
        "🚫SZÍNEZÉK",
        "🚫TARTÓSÍTÓSZER",
        "🚫GMO"
      ];
      this.image = image;
    }
  }

  let teas = [
    new Tea(
      "gyömbéres Moringa tea",
      "Forró vízben 5-7 percig érdemes áztatni. Enyhén gyömbéres ízű BIO Moringa tea, amelyet hideg napokon, meghűléses időszakban reggel vagy délutáni, esti órákban (100% koffeinmentes) kellemes fogyasztani.",
      [
        "Moringa Oleifera levelek*",
        " gyömbér*",
        "édesgyökér*",
        "citromfű*",
        "természetes citrom és gyömbér ízesítés",
        "* BIO - ellenőrzött ökológiai gazdaságból származik"
      ],
      "./img/Grenera-Moringa-Lemon-Ginger-Infusion.png"
    ),
    new Tea(
      "almás-fahéjas Moringa tea",
      "Forró vízben 5-7 percig érdemes áztatni. Kellemes almás, fahéjas ízvilága miatt hidegebb napokon kellemes fogyasztani, reggel vagy délutáni, esti órákban (100% koffeinmentes) ezt a finom BIO Moringa teát.",
      [
        "szárított Moringa Oleifera levelek*",
        "fahéj*",
        "édesgyökér*",
        "szárított alma darabok",
        "természetes alma ízesítés",
        "* BIO - ellenőrzött ökológiai gazdaságból származik"
      ],
      "./img/Grenera-Moringa-Apple-Cinnamon-Infusion.png"
    ),
    new Tea(
      "gránátalmás Moringa tea",
      "Forró vízben 5-7 percig érdemes áztatni. Enyhén gránátalmás ízű, kellemes BIO Moringa tea a változatosság kedvelőinek, amelyet fogyaszthatunk reggel vagy a délutáni, esti órákban is (100% koffeinmentes).",
      [
        "Moringa Oleifera levelek*",
        "hibiszkus levelek*",
        "édesgyökér*",
        "természetes gránátalma ízesítés",
        "* BIO - ellenőrzött ökológiai gazdaságból származik"
      ],
      "./img/Grenera-Moringa-Pomegranate-Infusion.png"
    ),
    new Tea(
      "zöld teás Moringa tea",
      "Forró vízben 3-5 percig érdemes áztatni. Ezt a keverék BIO Moringa teát elsősorban a reggeli órákkban ajánljuk serkentőnek. ",
      [
        "Moringa Oleifera levelek*",
        "zöld tea levelek*",
        "* BIO - ellenőrzött ökológiai gazdaságból származik"
      ],
      "./img/Grenera-Moringa-GreenTea.png"
    ),
    new Tea(
      "Moringa tea eredeti ízzel",
      "Csakis Moringa levelek semmi más, így élvezheti a BIO Moringa tea levelek eredeti, enyhén édeskés ízét. Akár a reggeli, akár a délután és esti órákban is fogyasztható (100% koffeinmentes).",
      [
        "Moringa Oleifera levelek*",
        "* BIO - ellenőrzött ökológiai gazdaságból származik"
      ],
      "./img/Grenera-Moringa-Herbal-Infusion.png"
    )
  ];

  return teas;
}

export default CreateTeas;
