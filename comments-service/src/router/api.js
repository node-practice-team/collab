const express = require("express");
const router = express.Router();

//REQUIRING CONTROLLER FILE TO ACCESS ROUTE
const controller = require("../controllers/rooms.controller");

router.get("/find", controller.findManyRooms); //find many route
router.get("/findone/:id", controller.findOneRoom); //find one route
router.get("/range", controller.priceRoom); //price range route
router.post("/findamenities", controller.findByAmenities); //find amenities route
router.put("/update/:id", controller.updateOneRoom); //update one room route
router.put("/updatemany", controller.updateManyRoom); //update many route
router.delete("/deletebyid/:id", controller.deleteOneRoom); //delete room by id
router.delete("/deletemany", controller.deleteManyRooms); // delete many rooms

module.exports = router;
