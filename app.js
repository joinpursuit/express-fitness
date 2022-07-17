const express = require("express");
const app = express();
const locationsController = require("./controllers/locations.controller.js");
const machineController = require("./controllers/machines.controller");
const personController = require("./controllers/persons.controller");
const planController = require ("./controllers/plans.controller")
const specialEventController = require("./controllers/special-events.controller")
app.get("/", (req, res) => {
  res.send("Hello, world!");
});
app.use("/locations", locationsController);
app.use("/machines", machineController);
app.use("/persons", personController);
app.use("/plans", planController);
app.use("/special-events", specialEventController)

app.get("*", (req, res) => {
  res.status(404).json({ error: "Sorry, no page found!" });
});
module.exports = app;
