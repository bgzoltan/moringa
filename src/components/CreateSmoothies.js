function CreateSmoothies() {
  class Smoothie {
    constructor(flavour, cal, ingredients, image) {
      this.producer = "Grenera";
      this.country = "India";
      this.type = "Moringa smoothie por Indiából";
      this.flavour = flavour;
      this.use =
        "Tápanyagokban gazdag, édes, de alacsony kalóriatartalmú étrendkiegészítő. Gyorsan elkészíthető. Keverje bele joghurtba, készítsen lattét vagy turmixot tejjel vagy tejhelyettesítővel !";
      this.cal = cal;
      this.qty = "100 gramm";
      this.qtyUse = "6-10 gramm /adag";
      this.features = [
        "VEGÁN",
        " 🚫GLUTÉN",
        "🚫FEHÉR CUKOR",
        "🚫SZÍNEZÉK",
        "🚫TARTÓSÍTÓSZER",
        "🚫GMO"
      ];
      this.ingredients = ingredients;
      this.image = image;
    }
  }

  let smoothies = [
    new Smoothie(
      "mandulás ízű Moringa smoothie por",
      "~45 kalória / adag",
      [
        "Palmyra Jaggery (pálmacukor vagy gyógycukor)",
        "mandula por",
        "szárított Moringa levél",
        "Amla gyümölcs (indiai egres)",
        "csíráztatott Green Gram (Mungó bab)",
        "csíráztatott Horse gram (indiai lencse)",
        "csíráztatott Ragi (újjas köles)",
        " természetes vanília íz",
        "guar-gum",
        "tengeri só",
        "Stevia kivonat"
      ],
      "./img/Grenera-Moringa-Smoothie-Mandula.png"
    ),
    new Smoothie(
      "csokoládés ízű Moringa smoothie por",
      "~40 kalória / adag",
      [
        "Palmyra Jaggery (pálmacukor vagy gyógycukor)",
        "kakaópor",
        "szárított Moringa levél",
        "Amla gyümölcs (indiai egres)",
        "csíráztatott Green Gram (Mungó bab)",
        "csíráztatott Horse gram (indiai lencse)",
        "csíráztatott Ragi (újjas köles)",
        "természetes csokoládé íz",
        "guar-gum",
        "tengeri só",
        "Stevia kivonat"
      ],
      "./img/Grenera-Moringa-Smoothie-Csokoládé.png"
    ),
    new Smoothie(
      "ananászos ízű Moringa smoothie por",
      "~40 kalória / adag",
      [
        "Palmyra Jaggery (pálmacukor vagy gyógycukor)",
        "ananász",
        "szárított Moringa Oleifera levél",
        "Amla gyümölcs (indiai egres)",
        "természetes ananász aroma",
        " csíráztatott Green Gram (Mungó bab)",
        "csíráztatott Horse gram (indiai lencse)",
        "csíráztatott Ragi (újjas köles)",
        "guar-gum",
        "tengeri só",
        "Stevia kivonat "
      ],
      "./img/Grenera-Moringa-Smoothie-Ananász.png"
    ),
    new Smoothie(
      "mangós ízű Moringa smoothie por",
      "~40 kalória / adag",
      [
        "Palmyra Jaggery (pálmacukor vagy gyógycukor)",
        "Mangó por",
        "szárított Moringa Oleifera levél",
        "Amla gyümölcs (indiai egres)",
        "természetes Mangó aroma",
        "csíráztatott Green Gram (Mungó bab)",
        "csíráztatott Horse gram (indiai lencse)",
        "csíráztatott Ragi (újjas köles)",
        "guar-gum",
        "tengeri só",
        "Stevia kivonat"
      ],
      "./img/Grenera-Moringa-Smoothie-Mango.png"
    ),
    new Smoothie(
      "gránátalmás ízű Moringa smoothie por",
      "~45 kalória / adag",
      [
        "Palmyra Jaggery (pálmacukor vagy gyógycukor)",
        "Gránátalma",
        "szárított Moringa levél",
        "Cékla lé",
        "Amla gyümölcs (indiai egres)",
        "természetes Gránátalma aroma",
        "csíráztatott Green Gram (Mungó bab)",
        "csíráztatott Horse gram (indiai lencse)",
        "csíráztatott Ragi (újjas köles)",
        "guar-gum",
        "tengeri só",
        "Stevia kivonat"
      ],
      "./img/Grenera-Moringa-Smoothie-Gránátalma.png"
    )
  ];

  return smoothies;
}

export default CreateSmoothies;
