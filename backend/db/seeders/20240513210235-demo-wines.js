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
          imageUrl: "https://wine-o.s3.us-east-2.amazonaws.com/cooper.jpg",
        },
        {
          name: "Meomi",
          vineyard: "Meomi Wines",
          type: "Red Blend",
          imageUrl: "https://wine-o.s3.us-east-2.amazonaws.com/meoimi-red.jpg",
        },
        {
          name: "Conundrum",
          vineyard: "Caymus",
          type: "Red Blend",
          imageUrl: "https://wine-o.s3.us-east-2.amazonaws.com/conundrum.jpg",
        },
        {
          name: "Troublemaker",
          vineyard: "Hope Family Wines",
          type: "Red Blend",
          imageUrl:
            "https://wine-o.s3.us-east-2.amazonaws.com/troublemaker.jpg",
        },
        {
          name: "Intrinsic",
          vineyard: "Intrinsic Wine Co.",
          type: "Red Blend",
          imageUrl: "https://wine-o.s3.us-east-2.amazonaws.com/intrinsic.jpg",
        },
        {
          name: "The Stag",
          vineyard: "St Huberts",
          type: "Red Blend",
          imageUrl: "https://wine-o.s3.us-east-2.amazonaws.com/stag.jpg",
        },
        {
          name: "Oniros",
          vineyard: "Oniros",
          type: "Cabernet Sauvignon",
          imageUrl: "https://wine-o.s3.us-east-2.amazonaws.com/oniros.jpg",
        },
        {
          name: "Raeburn",
          vineyard: "Raeburn Winery",
          type: "Cabernet Sauvignon",
          imageUrl: "https://wine-o.s3.us-east-2.amazonaws.com/raeburn.jpg",
        },
        {
          name: "Faust",
          vineyard: "Faust Wines",
          type: "Cabernet Sauvignon",
          imageUrl: "https://wine-o.s3.us-east-2.amazonaws.com/faust.jpg",
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
