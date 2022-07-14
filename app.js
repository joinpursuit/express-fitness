const express = require("express");
const app = express();

const locationsController = require("./controllers/locations.controller.js");
app.use("/locations", locationsController);
const machinesController = require("./controllers/machines.controller.js");
app.use("/machines", machinesController);
const personsController = require("./controllers/persons.controller.js");
app.use("/persons", personsController);
const plansController = require("./controllers/plans.controller.js");
app.use("/plans", plansController);
const specialEventsController = require("./controllers/special-events.controller.js");
app.use("/special-events", specialEventsController);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

module.exports = app;
