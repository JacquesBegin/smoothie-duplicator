"use strict";

const ObjectId = require('mongodb').ObjectID;


module.exports = {
  
  getAllSmoothies: function(db, callback) {
    db.collection("smoothies").find({}).toArray((err, docs) => {
      if (err) {
        console.log(err, "Failed to get smoothies.");
      } else {
        callback(docs);
      }
    });
  },

  getSmoothieById: function(db, id, callback) {
    db.collection("smoothies").findOne({ "_id": new ObjectId(id)}, (err, doc) => {
      if (err) {
        console.log(err, "Failed to get smoothie.");
      } else {
        callback(doc);
      }
    });
  },

  createSmoothie: function(db, smoothie, callback) {
    db.collection("smoothies").insertOne({
      name: smoothie.name,
      ingredients: smoothie.ingredients
    }, (err, doc) => {
      if (err) {
        console.log(err, "Failed to create smoothie.");
      } else {
        callback(doc);
      }
    });
  },

  editSmoothie: function(db, id, callback) {

  },

  deleteSmoothie: function(db, id, callback) {

  }
  

}