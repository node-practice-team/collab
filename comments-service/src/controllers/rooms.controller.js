const db = require("../config/db");
var bodyParser = require("body-parser");
//FIND TOTAL DOCUMENTS WITH 10 LIMIT
const findManyRooms = async (req, res) => {
  try {
    const response = await db
      .get()
      .collection("listingsAndReviews")
      .find({})
      .limit(10)
      .toArray();
    res.json({ data: response });
  } catch (error) {
    console.log(error);
  }
};

//FIND ONE DOCUMENT BY ID
const findOneRoom = async (req, res) => {
  var id = req.params.id;
  // var myquery = { _id: id };
  try {
    const response = await db
      .get()
      .collection("listingsAndReviews")
      .findOne({ _id: id });
    res.json({ response });
  } catch (error) {
    console.log(error);
  }
};

//PRICE RANGE OF ROOMS IN QUERY PARAMS
const priceRoom = async (req, res) => {
  try {
    const response = await db
      .get()
      .collection("listingsAndReviews")
      .find({ price: { $gte: +req.query.sort, $lte: +req.query.highersort } })
      .limit(5)
      .toArray();
    res.json({ response });
  } catch (error) {
    console.log(error);
  }
};

//FIND AMENITIES
const findByAmenities = async (req, res) => {
  try {
    const requirements = req.body.amenities;
    const response = await db
      .get()
      .collection("listingsAndReviews")
      .find({$and:[{amenities:{$all:requirements}}]})
      .limit(10)
      .toArray();
    res.json({ response });
  } catch (error) {
    console.log(error);
  }
};

//UPDATE ONE ROOM
const updateOneRoom = async (req, res) => {
  try {
    var id = req.params.id;
    var myquery = { _id: id };
    const response = await db
      .get()
      .collection("listingsAndReviews")
      .updateOne(myquery, newvalues);
    console.log("respone updated");
    res.json({ response });
  } catch (error) {
    console.log(error);
  }
};

//UPDATE MANY ROOMS
const updateManyRoom = async (req, res) => {
  try {
    const response = await db
      .get()
      .collection("listingsAndReviews")
      .updateMany();
    console.log("respone updated");
    res.json({ response });
  } catch (error) {
    console.log(error);
  }
};

//DELETE ROOMS BY ID
const deleteOneRoom = async (req, res) => {
  try {
    var id = req.params.id;
    var myquery = { _id: id };
    const response = await db
      .get()
      .collection("listingsAndReviews")
      .deleteOne(myquery);
    res.json({ response });
  } catch (error) {
    console.log(error);
  }
};

//DELETE MANY ROOMS
const deleteManyRooms = async (req, res) => {
  try {
    var myquery = {
      /*bed_type:"Real Bed"*/
    };
    const response = await db
      .get()
      .collection("listingsAndReviews")
      .deleteMany(myquery);
    res.json({ response });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  findManyRooms,
  findOneRoom,
  priceRoom,
  updateOneRoom,
  updateManyRoom,
  deleteOneRoom,
  deleteManyRooms,
  findByAmenities,
};
