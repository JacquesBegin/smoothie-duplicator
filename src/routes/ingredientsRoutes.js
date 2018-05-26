const express = require("express");
const router = express.Router();

module.exports = function(db) {

  router.get("/", function(req, res) {
    console.log("get all ingredients");
    res.send("Ingredients Home Page");
  });

  router.post("/", function(req, res) {
    console.log("create new ingredient");
  });

  router.get("/:id", function(req, res) {
    console.log("get a single ingredient");
    res.send("Single Ingredient");
  });

  return router;
}