const express = require("express");
const router = express.Router();

const controller = require("../controllers/rooms.controller");

router.get("/find", controller.findManyRooms);
router.get("/findone", controller.findOneRoom);
router.get("/range", controller.priceRoom);
router.get("/findamenities", controller.findAmenities);
router.put("/update", controller.updateOneRoom);
router.put("/updatemany", controller.updateManyRoom);
router.delete("/deletebyid/:id", controller.deleteOneRoom);
router.delete("/deletemany", controller.deleteManyRooms);

module.exports = router;
