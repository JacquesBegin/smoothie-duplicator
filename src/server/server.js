const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const database = require("../db/dbConnections");
const smoothieRoutes = require("../routes/smoothieRoutes");
const ingredientsRoutes = require("../routes/ingredientsRoutes");

const PORT = 8882;

var app = express();
app.use(bodyParser.json());

app.use(express.static(__dirname + process.env.STATIC_ASSETS_URL));


startAppServer = () => {
  var server = app.listen(process.env.PORT || PORT, () => {
    var port = server.address().port;
    console.log(`App server running on port ${port}`);
  });
}

initializeRoutes = (db) => {
  app.use("/api/smoothies", smoothieRoutes(db));
  app.use("/api/ingredients", ingredientsRoutes(db));

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname + process.env.APP_START_URL));
  });

}

// Connect to the mongo database, pass in the app initialization function
var db = database.mongoDbConnection.connectToServer(startAppServer, initializeRoutes);




