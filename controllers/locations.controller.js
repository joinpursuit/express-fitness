const express = require("express");
const locations = express.Router();
// Controller dictates the logic of the router

const locationsData = require("../models/location.model.js");

// in order to get to this line the path is already "/bookmarks"
locations.get("/", (req, res) => {
    res.json(locationsData)
});

// locations.get("/:id" , (req, res) => {
//     const { id } = req.params;
//     if(bookmarksData[id]){
//         res.json(bookmarksData[id])
//     } else {
//         // because the API has no data, the network status is '304' but the below code fixes it and returns a '404' message. We don't want a '304' error.
//         res.status(404).send('no bookmark found - sorry')
//     }
    
// })

module.exports = locations;