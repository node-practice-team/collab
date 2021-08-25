const express = require("express");
const router = express.Router();

const controller = require('../controllers/rooms.controller')



//=======================================================================


router.get("/find",controller.findManyRooms);
router.get("/findone",controller.findOneRoom);
router.get("/range",controller.priceRoom);
router.get("/findamenities",controller.findAmenities);
router.put("/update",controller.updateOneRoom);
router.put("/updatemany",controller.updateManyRoom);
router.delete("/deletebyid/:id",controller.deleteOneRoom);
router.delete("/deletemany",controller.deleteManyRooms);







// router.get("/amenities", async (req, res) => {
//   try {
//     let amenities = ['TV','Dryer','Pool']
//     console.log("db", db);
//     const response = await db
//       .collection("listingsAndReviews")
//       .find({'amenities':{$elemMatch: {amenities}}})
//       .limit(10).toArray()
//       console.log(response)
//     res.json({ data: response });
//   } catch (error) {
//     console.log(error);
//   }
// });


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
