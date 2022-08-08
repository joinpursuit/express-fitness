const express = require("express");
const app = express();
const specialEventController = require("./controllers/special-events.controller.js");
const locationsController = require("./controllers/locations.controller.js");
const machinesController = require("./controllers/machines.controller.js");
const personsController = require("./controllers/persons.controller.js");
const plansController = require("./controllers/plans.controller.js");

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use("/special-events", specialEventController);
app.use("/locations", locationsController);
app.use("/machines", machinesController);
app.use("/persons", personsController);
app.use("/plans", plansController);

app.use("*", (req, res) => {
  res.status(404).send("Error Sorry Bye Bye.");
});

module.exports = app;
