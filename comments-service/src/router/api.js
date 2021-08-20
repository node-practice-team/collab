const express = require("express");
const router = express.Router();
require("dotenv").config();

//=======================================================================
var MongoClient = require("mongodb").MongoClient;
var assert = require("assert");

var db = null;
MongoClient.connect(
  "mongodb+srv://admin:admin@cluster-ap-south-1.1ebos.mongodb.net/",
  function (err, database) {
    assert.equal(err, null);
    if (err) throw err;
    db = database.db("sample_geospatial");
    console.log("database set");
  }
);

router.get("/find", async (req, res) => {
  try {
    console.log("db", db);
    const response = await db
      .collection("shipwrecks")
      .find({})
      .limit(150)
      .toArray();
    res.json({data: response });
  } catch (error) {
    console.log(error);
  }
});
router.get("/findone", async (req, res) => {
  try {
    console.log("db", db);
    const response = await db.collection("shipwrecks").findOne({});
    res.json({ response });
  } catch (error) {
    console.log(error);
  }
});
router.put("/update", async (req, res) => {
  try {
    console.log("db", db);
    var myquery = { feature_type: "Wrecks - Submerged, dangerous" };
    var newvalues = {
      $set: { feature_type: "Wrecks - Submerged, not dangerous" },
    };
    const response = await db
      .collection("shipwrecks")
      .updateOne(myquery, newvalues);
    console.log("respone updated");
    res.json({ response });
  } catch (error) {
    console.log(error);
  }
});
router.put("/updatemany", async (req, res) => {
  try {
    console.log("db", db);
    var myquery = { feature_type: "Wrecks - Submerged, dangerous" };
    var newvalues = {
      $set: { feature_type: "Wrecks - Submerged, not dangerous" },
    };
    const response = await db
      .collection("shipwrecks")
      .updateMany(myquery, newvalues);
    console.log("respone updated");
    res.json({ response });
  } catch (error) {
    console.log(error);
  }
});

router.delete("/delete", async (req, res) => {
  try {
    console.log("db", db);
    var myquery = { feature_type: "Wrecks - Submerged, dangerous" };
    const response = await db.collection("shipwrecks").deleteOne(myquery);
    res.json({ response });
  } catch (error) {
    console.log(error);
  }
});

router.delete("/deletemany", async (req, res) => {
  try {
    console.log("db", db);
    var myquery = {
      /*feature_type: "Wrecks - Submerged, dangerous"*/
    };
    const response = await db.collection("shipwrecks").deleteMany(myquery);
    res.json({ response });
  } catch (error) {
    console.log(error);
  }
});

//=======================================================================
// mongoose
//   .connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Database connection Successful!");
//   })
//   .catch((err) => {
//     console.error("Mongo Connection Error", err);
//   });

//   router.get('/find',function(req,res){
//     const cursor = client.db('sample_airbnb').collection('listingsAndReviews').find({});
//     res.send(cursor)
//   })

module.exports = router;
