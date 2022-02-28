"use strict";

//libraries & framewares
const express = require("express");
const cors = require("cors");

//middlewares
const logger = require("./middleware/logger.js");

//errorhandlers
const notFound = require("./error-handlers/404.js");
const serverError = require("./error-handlers/500.js");

//routes
const personRoute = require("./routes/person.js");
const foodRoute = require("./routes/food.js");

//initiating app
const app = express();
app.use(express.json());
app.use(cors());

//calling middlewares
app.use(logger);
// app.use(validator)

//calling routes
app.use(personRoute);
app.use(foodRoute);

//listening to port
function start(port) {
  app.listen(port, () => {
    console.log(`running on port ${port}`);
  });
}

//home Page localhost:3000/
app.get("/", (req, res) => {
  res.send("server is alive");
});

//calling error-handlers
app.use("*", notFound);
app.use(serverError);

//exporting app
module.exports = {
  app: app,
  start: start,
};
