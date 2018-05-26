const express = require("express");
const router = express.Router();
const dbQueries = require("../db/mongodbQueries");

module.exports = function(db) {

  

  router.get("/", function(req, res) {
    console.log("get all ingredients");
    //TODO: add logic for accessing mongoDb queries
    res.send("Ingredients Home Page");
  });

  router.get("/:id", function(req, res) {
    console.log("get a single ingredient");
    //TODO: add logic for accessing mongoDb queries
    res.send("Single Ingredient");
  });

  return router;
}