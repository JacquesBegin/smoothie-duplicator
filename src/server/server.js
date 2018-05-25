const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("mongodb");


const PORT = 8882;

var app = express();
app.use(bodyParser.json());