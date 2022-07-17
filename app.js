const express = require("express");
const app = express();

const locationController = require("./controllers/locations.controller");
const machineController = require("./controllers/machines.controller");
const personController = require("./controllers/persons.controller");
const eventController = require("./controllers/special-events.controller");
const planController = require("./controllers/plans.controller");

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use("/locations", locationController);
app.use("/equipment", machineController);
app.use("/people", personController);
app.use("/special-events", eventController);
app.use("/plans", planController);

module.exports = app;
