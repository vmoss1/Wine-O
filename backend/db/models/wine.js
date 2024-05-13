"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Wine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Wine.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      vineyard: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.ENUM,
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
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Wine",
    }
  );
  return Wine;
};
