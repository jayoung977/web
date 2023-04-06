const express = require("express");
const controller = require("../controller/Cvisitor");
const router = express.Router();
// (1) GET /
router.get("/", controller.main);

// (2) GET /visitor
router.get("/visitor", controller.getVisitors);

// (3) POST /visitor/write
router.post("/visitor/write", controller.postVisitor); // 하나 추가

module.exports = router;
