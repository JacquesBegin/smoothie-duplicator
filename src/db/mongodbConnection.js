const mongodb = require("mongodb");
require('dotenv').config();

var db;


module.exports = {

  connectToServer: function(startApp) {
    mongodb.connect(process.env.MONGODB_URI || process.env.MONGODB_LOCAL,
      { useNewUrlParser: true }, (err, client) => {
        if (err) {
          console.log("Database connection error: ", err);
          // If db connection not established, exit before starting the application
          process.exit(1);
        }

        console.log("Connected to mongoDB");
        // Must set an environment variable to pass in the name of the db as
        // local and remote db's may have different names
        db = client.db(process.env.MONGODB_NAME);
        startApp(db);
        return db;
      });
  },

  disconnectFromServer: function(db) {
    db.close();
    console.log("Disconnected from mongoDB")
  }

}