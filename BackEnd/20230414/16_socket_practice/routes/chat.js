const express = require("express");
const router = express.Router();
const controller = require("../controller/Cchat");
console.log("!!!!!!!!!!!!!!");
router.get("/", controller.getchat);
router.post("/", controller.mainchat);

module.exports = router;
