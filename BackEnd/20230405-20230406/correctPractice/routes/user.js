const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");

router.get("/", controller.main);
router.post("/pactice2", controller.pactice2);

module.exports = router;
