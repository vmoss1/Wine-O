"use strict";

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA;
}
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "Wines",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        vineyard: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        type: {
          type: Sequelize.ENUM,
          allowNull: false,
          values: [
            "Cabernet Sauvignon",
            "Merlot",
            "Red Blend",
            "Pinot Noir",
            "Chardonnay",
            "Riesling",
            "Shiraz",
            "Sauvignon blanc",
            "Rose",
            "Pinot Grigio",
            "Bordeaux",
            "Malbec",
            "Zinfandel",
          ],
        },
        imageUrl: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
      },
      options
    );
  },
  async down(queryInterface, Sequelize) {
    options.tableName = "Wines";
    return queryInterface.dropTable(options);
  },
};
