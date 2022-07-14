const express = require("express");
const app = express();
const locationController = require("./controllers/locations.controller");
const personController = require("./controllers/persons.controller");
const planController = require("./controllers/plans.controller");
const machineController = require("./controllers/machines.controller");
const specialEventsController = require("./controllers/special-events.controller");

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use("/locations", locationController);
app.use("/persons", personController);
app.use("/plans", planController);
app.use("/machines", machineController);
app.use("/special-events", specialEventsController);
app.use("*", (req, res) => {
  res
    .status(404)
    .json(
      "Error 404: Not Found. You don't have to go home, but you can't stay here."
    );
});

module.exports = app;
