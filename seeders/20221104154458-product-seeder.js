"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          name: "VELA CITRONELLA",
          mainImage:
            "https://www.thecandleshop.com.ar/public/assets//347/gt_1651865238A09Z_c.jpg",
          categorie: "Velas",
          description:
            "Vela en vaso de vidrio cónico beige con destellos (6,5 cm base x 8,5 cm altura) en estuche decorativo para obsequio",
          cost: 3000,
          price: 6900,
          stock: 321,
          rating: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "DIFUSOR DE AMBIENTE GREY TILO BAMBOO",
          mainImage:
            "https://www.thecandleshop.com.ar/public/assets//448/gt_1525975266A17TB_b.jpg",
          categorie: "Difusores",
          description:
            "Set idea para lograr una aromatizador total en tus ambientes. Colocá el difusor de ambientes en el espacio que elijas y reforza su fragancia utilizando el aromatizador.",
          cost: 759,
          price: 2589,
          stock: 156,
          rating: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "AROMATIZADOR DE AMBIENTES Y TEXTIL BOUQUET DE ROSA",
          mainImage:
            "https://www.thecandleshop.com.ar/public/assets//1029/gt_1632154276A31PM_a.jpg",
          categorie: "Aromatizadores",
          description:
            "Fragancia aromática de notas suaves, dulces y especiadas. Recoge toda la calidez y la sensualidad de la vainilla. El combo ideal para todos tus ambientes!",
          cost: 800,
          price: 2654,
          stock: 240,
          rating: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "PACK AROMA STONE ACQUA",
          mainImage:
            "https://www.thecandleshop.com.ar/public/assets//829/gt_1610046453PS02A_c.jpg",
          categorie: "Escencias",
          description:
            "Aromatiza el ambiente con una fragancia herbal y cítrica, su perfume fresco e intenso. Ideal para vaporizar en los ambientes y conectarnos con la naturaleza para sentirnos en armonía.",
          cost: 900,
          price: 2540,
          stock: 178,
          rating: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "VELA 10 X 10 CEDRO VERBENA",
          mainImage:
            "https://www.thecandleshop.com.ar/public/assets//618/gt_1621522486A05CV_b.jpg",
          categorie: "Velas",
          description:
            "Vela de soja en vaso de vidrio blanco (7 cm base x 8 cm altura) en estuche decorativo para obsequio .",
          cost: 3000,
          price: 5500,
          stock: 357,
          rating: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "AROMATIZADOR ULTRASONICO NORDIC",
          mainImage:
            "https://www.thecandleshop.com.ar/public/assets//717/gt_1536931646A18TB_c.jpg",
          categorie: "Difusores",
          description:
            "Set idea para lograr una aromatizador total en tus ambientes. Colocá el difusor de ambientes en el espacio que elijas y reforza su fragancia utilizando el aromatizador.",
          cost: 759,
          price: 2500,
          stock: 201,
          rating: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "AROMATIZADOR DE AMBIENTES Y TEXTIL BOUQUET DE ROSA",
          mainImage:
            "https://www.thecandleshop.com.ar/public/assets//1029/gt_1632154276A31PM_a.jpg",
          categorie: "Aromatizadores",
          description:
            "Fragancia aromática de notas suaves, dulces y especiadas. Recoge toda la calidez y la sensualidad de la vainilla. El combo ideal para todos tus ambientes!",
          cost: 800,
          price: 3025,
          stock: 240,
          rating: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "PACK AROMA STONE ACQUA",
          mainImage:
            "https://www.thecandleshop.com.ar/public/assets//828/gt_1561468963ps01_b.jpg",
          categorie: "Escencias",
          description:
            "Aromatiza el ambiente con una fragancia herbal y cítrica, su perfume fresco e intenso. Ideal para vaporizar en los ambientes y conectarnos con la naturaleza para sentirnos en armonía.",
          cost: 900,
          price: 3458,
          stock: 178,
          rating: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "VELA CITRONELLA",
          mainImage:
            "https://www.thecandleshop.com.ar/public/assets//346/gt_1632320436A09V_c.jpg",
          categorie: "Velas",
          description:
            "Vela en vaso de vidrio cónico beige con destellos (6,5 cm base x 8,5 cm altura) en estuche decorativo para obsequio",
          cost: 1554,
          price: 4200,
          stock: 78,
          rating: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "DIFUSOR DE AMBIENTE GREY TILO BAMBOO",
          mainImage:
            "https://www.thecandleshop.com.ar/public/assets//439/gt_1525978921A17BR_b.jpg",
          categorie: "Difusores",
          description:
            "Set idea para lograr una aromatizador total en tus ambientes. Colocá el difusor de ambientes en el espacio que elijas y reforza su fragancia utilizando el aromatizador.",
          cost: 759,
          price: 2650,
          stock: 374,
          rating: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "AROMATIZADOR DE AMBIENTES Y TEXTIL BOUQUET DE ROSA",
          mainImage:
            "https://www.thecandleshop.com.ar/public/assets//1159/gc_1654020959gc_1549292837A31D_a.jpg",
          categorie: "Aromatizadores",
          description:
            "Fragancia aromática de notas suaves, dulces y especiadas. Recoge toda la calidez y la sensualidad de la vainilla. El combo ideal para todos tus ambientes!",
          cost: 1257,
          price: 3587,
          stock: 305,
          rating: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "PACK AROMA STONE ACQUA",
          mainImage:
            "https://www.thecandleshop.com.ar/public/assets//203/gt_1519740993E01H_a.jpg",
          categorie: "Escencias",
          description:
            "Aromatiza el ambiente con una fragancia herbal y cítrica, su perfume fresco e intenso. Ideal para vaporizar en los ambientes y conectarnos con la naturaleza para sentirnos en armonía.",
          cost: 1547,
          price: 3698,
          stock: 178,
          rating: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "VELA CITRONELLA",
          mainImage:
            "https://www.thecandleshop.com.ar/public/assets//168/gt_1609874215A33P_c.jpg",
          categorie: "Velas",
          description:
            "Vela en vaso de vidrio cónico beige con destellos (6,5 cm base x 8,5 cm altura) en estuche decorativo para obsequio",
          cost: 2014,
          price: 3548,
          stock: 501,
          rating: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "DIFUSOR DE AMBIENTE GREY TILO BAMBOO",
          mainImage:
            "https://www.thecandleshop.com.ar/public/assets//443/gt_1525975225A17P_b.jpg",
          categorie: "Difusores",
          description:
            "Set idea para lograr una aromatizador total en tus ambientes. Colocá el difusor de ambientes en el espacio que elijas y reforza su fragancia utilizando el aromatizador.",
          cost: 654,
          price: 2147,
          stock: 254,
          rating: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "AROMATIZADOR DE AMBIENTES Y TEXTIL BOUQUET DE ROSA",
          mainImage:
            "https://www.thecandleshop.com.ar/public/assets//1029/gt_1632154276A31PM_a.jpg",
          categorie: "Aromatizadores",
          description:
            "Fragancia aromática de notas suaves, dulces y especiadas. Recoge toda la calidez y la sensualidad de la vainilla. El combo ideal para todos tus ambientes!",
          cost: 1557,
          price: 2750,
          stock: 321,
          rating: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "PACK AROMA STONE ACQUA",
          mainImage:
            "https://www.thecandleshop.com.ar/public/assets//632/gt_1519741160E01CV_a.jpg",
          categorie: "Escencias",
          description:
            "Aromatiza el ambiente con una fragancia herbal y cítrica, su perfume fresco e intenso. Ideal para vaporizar en los ambientes y conectarnos con la naturaleza para sentirnos en armonía.",
          cost: 900,
          price: 3214,
          stock: 222,
          rating: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "VELA CITRONELLA",
          mainImage:
            "https://www.thecandleshop.com.ar/public/assets//347/gt_1651865238A09Z_c.jpg",
          categorie: "Velas",
          description:
            "Vela en vaso de vidrio cónico beige con destellos (6,5 cm base x 8,5 cm altura) en estuche decorativo para obsequio",
          cost: 1501,
          price: 4126,
          stock: 87,
          rating: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "DIFUSOR DE AMBIENTE GREY TILO BAMBOO",
          mainImage:
            "https://www.thecandleshop.com.ar/public/assets//445/gt_1526047042A17MM_b.jpg",
          categorie: "Difusores",
          description:
            "Set idea para lograr una aromatizador total en tus ambientes. Colocá el difusor de ambientes en el espacio que elijas y reforza su fragancia utilizando el aromatizador.",
          cost: 547,
          price: 2587,
          stock: 147,
          rating: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "AROMATIZADOR DE AMBIENTES Y TEXTIL BOUQUET DE ROSA",
          mainImage:
            "https://www.thecandleshop.com.ar/public/assets//1162/gc_1654021195gc_1549293141A31HI_a.jpg",
          categorie: "Aromatizadores",
          description:
            "Fragancia aromática de notas suaves, dulces y especiadas. Recoge toda la calidez y la sensualidad de la vainilla. El combo ideal para todos tus ambientes!",
          cost: 800,
          price: 3014,
          stock: 147,
          rating: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "PACK AROMA STONE ACQUA",
          mainImage:
            "https://www.thecandleshop.com.ar/public/assets//829/gt_1610046453PS02A_c.jpg",
          categorie: "Escencias",
          description:
            "Aromatiza el ambiente con una fragancia herbal y cítrica, su perfume fresco e intenso. Ideal para vaporizar en los ambientes y conectarnos con la naturaleza para sentirnos en armonía.",
          cost: 900,
          price: 1478,
          stock: 147,
          rating: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "VELA CITRONELLA",
          mainImage:
            "https://www.thecandleshop.com.ar/public/assets//346/gt_1632320436A09V_c.jpg",
          categorie: "Velas",
          description:
            "Vela en vaso de vidrio cónico beige con destellos (6,5 cm base x 8,5 cm altura) en estuche decorativo para obsequio",
          cost: 2506,
          price: 4188,
          stock: 150,
          rating: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "DIFUSOR DE AMBIENTE GREY TILO BAMBOO",
          mainImage:
            "https://www.thecandleshop.com.ar/public/assets//711/gt_1536931511A18HI_c.jpg",
          categorie: "Difusores",
          description:
            "Set idea para lograr una aromatizador total en tus ambientes. Colocá el difusor de ambientes en el espacio que elijas y reforza su fragancia utilizando el aromatizador.",
          cost: 759,
          price: 3588,
          stock: 156,
          rating: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "AROMATIZADOR DE AMBIENTES Y TEXTIL BOUQUET DE ROSA",
          mainImage:
            "https://www.thecandleshop.com.ar/public/assets//1158/gc_1654020921gc_1549292746A31CV_a.jpg",
          categorie: "Aromatizadores",
          description:
            "Fragancia aromática de notas suaves, dulces y especiadas. Recoge toda la calidez y la sensualidad de la vainilla. El combo ideal para todos tus ambientes!",
          cost: 987,
          price: 3124,
          stock: 354,
          rating: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "PACK AROMA STONE ACQUA",
          mainImage:
            "https://www.thecandleshop.com.ar/public/assets//200/gt_1519740929E01DA_a.jpg",
          categorie: "Escencias",
          description:
            "Aromatiza el ambiente con una fragancia herbal y cítrica, su perfume fresco e intenso. Ideal para vaporizar en los ambientes y conectarnos con la naturaleza para sentirnos en armonía.",
          cost: 1487,
          price: 3258,
          stock: 178,
          rating: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    
  },
};
