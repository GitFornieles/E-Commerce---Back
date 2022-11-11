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
            "https://www.thecandleshop.com.ar/public/assets//1047/gc_1635520954Cl10.jpg",
          categorie: "Velas",
          description:
            "Vela en vaso de vidrio cónico beige con destellos (6,5 cm base x 8,5 cm altura) en estuche decorativo para obsequio",
          cost: 3000,
          price: 6900,
          stock: 5000,
          rating: 3,
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
          cost: 500,
          price: 1900,
          stock: 4000,
          rating: 3,
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
          price: 2750,
          stock: 3000,
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
          stock: 10000,
          rating: 2,
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
