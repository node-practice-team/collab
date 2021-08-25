const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const Router = require("./router/api");
const app = express(); //Create new instance
const port = process.env.PORT || 3000; //Declare the port number
app.use(express.json()); //allows us to access request body as req.body
app.use(morgan("dev")); //enable incoming request logging in dev mode
app.use(Router); //intializing the routes
var MongoClient = require("mongodb").MongoClient;
var assert = require("assert");
const dbConfig = require("./config/db");
const mongoDbUrl =
  "mongodb+srv://admin:admin@cluster-ap-south-1.1ebos.mongodb.net/";

//Define the endpoint
app.get("/healthcheck", (req, res) => {
  return res.send({
    status: "ok",
  });
});

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
MongoClient.connect(mongoDbUrl, (err, database) => {
  try {
    if (err) throw err;
    dbConfig.connect(database.db("sample_airbnb"));
    console.log("database set");
  } catch (error) {
    console.log(error);
  }
});
