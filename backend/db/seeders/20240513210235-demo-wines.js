"use strict";

const { Wine } = require("../models");

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA;
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await Wine.bulkCreate([
        {
          name: "Cooper and Thief",
          vineyard: "Cooper and Thief CellarMasters",
          type: "Red Blend",
          imageUrl: "",
        },
        {
          name: "Meomi",
          vineyard: "Meomi Wines",
          type: "Red Blend",
          imageUrl: "",
        },
        {
          name: "Conundrum",
          vineyard: "Caymus",
          type: "Red Blend",
          imageUrl: "",
        },
        {
          name: "Troublemaker",
          vineyard: "Hope Family Wines",
          type: "Red Blend",
          imageUrl: "",
        },
        {
          name: "Intrinsic",
          vineyard: "Intrinsic Wine Co.",
          type: "Red Blend",
          imageUrl: "",
        },
        {
          name: "The Stag",
          vineyard: "St Huberts",
          type: "Red Blend",
          imageUrl: "",
        },
        {
          name: "Oniros",
          vineyard: "Oniros",
          type: "Cabernet Sauvignon",
          imageUrl: "",
        },
        {
          name: "Raeburn",
          vineyard: "Raeburn Winery",
          type: "Cabernet Sauvignon",
          imageUrl: "",
        },
        {
          name: "Faust",
          vineyard: "Faust Wines",
          type: "Cabernet Sauvignon",
          imageUrl: "",
        },
      ]);
    } catch (e) {
      console.e("Check Wine Validators");
    }
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "Wines";
    return queryInterface.bulkDelete(options, null, {});
  },
};
