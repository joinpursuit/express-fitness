const express = require("express");
const app = express();

const locationsController = require("./controllers/locations.controller");
const machinesController = require("./controllers/machines.controller");
const personsController = require("./controllers/persons.controller");
const plansController = require("./controllers/plans.controller");
const specialEventsController = require("./controllers/special-events.controller");

app.get("/", (request, response) => {
  response.send("Hello, world!");
});

app.use("/locations", locationsController);
app.use("/machines", machinesController);
app.use("/persons", personsController);
app.use("/plans", plansController);
app.use("/special-events", specialEventsController);

app.use("*", (req, res) => {
  res.status(404).send("Sorry, but your URL game is weaksauce.");
});

module.exports = app;