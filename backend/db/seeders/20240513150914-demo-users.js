"use strict";

const { User } = require("../models");
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA;
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await User.bulkCreate([
        {
          email: "demo@user.io",
          username: "GeniusHacker",
          firstName: "Brian",
          lastName: "LogField",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "demo1@user.io",
          username: "TheLegend",
          firstName: "Annie",
          lastName: "Cornelius",
          hashedPassword: bcrypt.hashSync("password"),
        },
      ]);
    } catch (e) {
      console.error("Check User Validators");
    }
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "Users";
    return queryInterface.bulkDelete(options, null, {});
  },
};
