const express = require("express");
const app = express();

app.get("/", (request, response) => {
	response.send("Hello, world!");
});

app.get("*", (request, response) => {
	response.status(404).send("Sorry, no page found!");
});
module.exports = app;
