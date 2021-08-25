const db = require("../config/db");

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

const findOneRoom = async (req, res) => {
  try {
    const response = await db
      .get()
      .collection("listingsAndReviews")
      .findOne({});
    res.json({ response });
  } catch (error) {
    console.log(error);
  }
};

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

const findAmenities = async(req,res)=>{
    try {
        const necessities = req.query.amenities
        const response = await db
      .get()
      .collection("listingsAndReviews")
      .find({amenities :{ $all:[necessities]}})
      .limit(20)
      .toArray();
    res.json({ response})
    } catch (error) {
        console.log(error)
    }
}
const updateOneRoom = async (req, res) => {
  try {
    var myquery = { bed_type: "Real Bed" };
    var newvalues = {
      $set: { bed_type: "Wood Bed" },
    };
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

const updateManyRoom = async (req, res) => {
  try {
    var myquery = { beds: 3 };
    var newvalues = {
      $set: { beds: 5 },
    };
    const response = await db
      .get()
      .collection("listingsAndReviews")
      .updateMany(myquery, newvalues);
    console.log("respone updated");
    res.json({ response });
  } catch (error) {
    console.log(error);
  }
};

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
  findAmenities
};
