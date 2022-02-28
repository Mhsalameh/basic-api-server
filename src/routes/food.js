"use strict";
const express = require("express");

const { Food } = require("../models/index.js");

const router = express.Router();

//requests
router.post("/food", addFood);
router.get("/food", getFood);
router.get("/food/:id", getOneFood);
router.put("/food/:id", updateFood);
router.delete("/food/:id", deleteOneFood);

//request handlers
//post request localhost:3000/food
async function addFood(req, res) {
  let reqBody = req.body;
  let addedFood = await Food.create(reqBody);
  res.status(201).json(addedFood);
}
// get request localhost:3000/food
async function getFood(req, res) {
  let food = await Food.findAll();
  res.status(200).json(food);
}
// get request localhost:3000/Food/1
async function getOneFood(req, res) {
  let id = parseInt(req.params.id);
  let food = await Food.findOne({ where: { id: id } });
  res.status(200).json(food);
}
// put request localhost:3000/food/1
async function updateFood(req, res) {
  let id = parseInt(req.params.id);
  let reqBody = req.body;
  await Food.update(reqBody, { where: { id: id } });
  res.status(201).json(await Food.findOne({ where: { id: id } }));
}
// delete request localhost:3000/food/1
async function deleteOneFood(req, res) {
  let id = parseInt(req.params.id);
  await Food.destroy({ where: { id: id } });
  res.status(200).send(await Food.findOne({ where: { id: id } }));
}

module.exports = router;
