"use strict";

const Food = (sequelize, DataTypes) =>
  sequelize.define("food", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
    },
  });

module.exports = Food;
