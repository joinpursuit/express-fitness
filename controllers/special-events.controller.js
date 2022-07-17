const express = require("express");
const specialEvents = express.Router();
const specialEventData = require ("../models/special-event.model.js")
specialEvents.get ("/", (req,res)=> {
    res.json(specialEventData)
})
module.exports = specialEvents