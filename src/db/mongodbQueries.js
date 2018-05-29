"use strict";

const ObjectId = require('mongodb').ObjectID;


module.exports = {
  
  getAllSmoothies: function(db, callback) {
    db.collection("smoothies").find({}).toArray((err, docs) => {
      if (err) {
        console.log(err, "Failed to get all smoothies.");
      } else {
        callback(docs);
      }
    });
  },

  getSmoothieById: function(db, smoothie, callback) {
    db.collection("smoothies").findOne(
      {
        "_id": new ObjectId(smoothie.id)
      }, 
      (err, doc) => {
      if (err) {
        console.log(err, "Failed to get smoothie.");
      } else {
        callback(doc);
      }
    });
  },

  createSmoothie: function(db, smoothie, callback) {
    db.collection("smoothies").insertOne(
      {
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

  editSmoothie: function(db, smoothie, callback) {
    db.collection("smoothies").updateOne(
      { 
        "_id": new ObjectId(smoothie._id)
      },
      {
        $set: {name: smoothie.name, ingredients: smoothie.ingredients}
      }, (err, doc) => {
      if (err) {
        console.log(err, "Failed to edit smoothie.");
      } else {
        callback(doc);
      }
    });
  },

  deleteSmoothie: function(db, smoothie, callback) {
    db.collection("smoothies").deleteOne(
      {
        "_id": new ObjectId(smoothie._id)
      }, (err, doc) => {
        if (err) {
          console.log(err, "Failed to delete smoothie.");
        } else {
          callback(doc);
        }
      });
  },

  getAllIngredients: function(db, callback) {
    db.collection("ingredients").find({}).toArray((err, docs) => {
      if (err) {
        console.log(err, "Failed to get all ingredients.");
      } else {
        callback(docs);
      }
    });
  },

  getIngredientById: function(db, ingredient, callback) {
    db.collection("ingredients").findOne(
      {
        "_id": new ObjectId(ingredient.id)
      }, 
      (err, doc) => {
      if (err) {
        console.log(err, "Failed to get ingredient.");
      } else {
        callback(doc);
      }
    });
  }
  

}