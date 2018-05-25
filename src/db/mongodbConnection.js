const mongodb = require("mongodb");
const MONGODB_LOCAL = "mongodb://localhost:27017/smoothieDuplicator";

var db;



module.exports = {

  connectToServer: function(startApp) {
    mongodb.connect(process.env.MONGODB_URI || MONGODB_LOCAL, (err, client) => {
      if (err) {
        console.log("Database connection error: ", err);
        // If db connection not established, exit before starting the application
        process.exit(1);
      }

      console.log("Connected to mongoDB");
      db = client;
      startApp();
    });
  },

  getDb: function() {
    return db;
  }

}