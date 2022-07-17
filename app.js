const express = require("express");
const app = express();

const locationsController = require("./controllers/locations.controller");
const machineController = require("./controllers/machines.controller");
const personController = require("./controllers/persons.controller");
const eventController = require("./controllers/special-events.controller");
const planController = require("./controllers/plans.controller");

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use("/locations", locationsController);
app.use("/machines", machineController);
app.use("/persons", personController);
app.use("/special-events", eventController);
app.use("/plans", planController);

app.get("*", (req, res) => {
    res.status(404).json({error: "page not found"})
})

module.exports = app;
