const express = require("express");
const router = express.Router();
const dbQueries = require("../db/mongodbQueries");


module.exports = function(db) {

  router.get("/", function(req, res) {
    console.log("get all smoothies");
    dbQueries.getAllSmoothies(db, (data) => {
      res.status(200).json(data);
    });
  });
  
  router.post("/", function(req, res) {
    console.log("create new smoothie");
    dbQueries.createSmoothie(db, req.body, (data) => {
      res.status(201).json(data.ops[0]);
    });
  });
  
  router.get("/:id", function(req, res) {
    console.log("get a single smoothie");
    dbQueries.getSmoothieById(db, req.params, (data) => {
    // dbQueries.getSmoothieById(db, req.body.id, (data) => {
      res.status(200).json(data);
    });
  });

  router.get("/name/:name", function(req, res) {
    console.log("get smoothies by name");
    console.log("smoothie req.params: ", req.params);
    dbQueries.getSmoothiesByName(db, req.params, (data) => {
      res.status(200).json(data);
    });
  });
  
  router.put("/:id", function(req, res) {
    console.log("updates a single smoothie");
    dbQueries.editSmoothie(db, req.body, (data) => {
      res.status(200).json(data);
    });
  });
  
  router.delete("/:id", function(req, res) {
    console.log("deletes a single smoothie");
    dbQueries.deleteSmoothie(db, req.params, (data) => {
      // send status code 204, this means no payload to send back but request was successful
      res.status(204).json(data);
    });
  });

  return router;

}

  
