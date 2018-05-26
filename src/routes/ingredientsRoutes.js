const express = require("express");
const router = express.Router();
const dbQueries = require("../db/mongodbQueries");

module.exports = function(db) {

  

  router.get("/", function(req, res) {
    console.log("get all ingredients");
    dbQueries.getAllIngredients(db, (data) => {
      res.status(200).json(data);
    });
  });

  router.get("/:id", function(req, res) {
    console.log("get a single ingredient");
    dbQueries.getIngredientById(db, req.params, (data) => {
    // dbQueries.getIngredientById(db, req.body, (data) => {
      res.status(200).json(data);
    });
  });

  return router;
}