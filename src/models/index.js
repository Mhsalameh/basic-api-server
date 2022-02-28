"use strict";

const { Sequelize, DataTypes } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

const food = require("./food.js");
const person = require("./person.js");

const POSTGRES_URL = process.env.DATABASE_URL || "postgres://salameh:0000@localhost:5432/class03";

console.log(POSTGRES_URL);

let sequelizeOptions = {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
};

const sequelize = new Sequelize(POSTGRES_URL, sequelizeOptions);

module.exports = {
  db: sequelize,
  Food: food(sequelize, DataTypes),
  Person: person(sequelize, DataTypes),
};
