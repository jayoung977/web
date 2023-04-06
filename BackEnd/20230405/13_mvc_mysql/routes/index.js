const express = require("express");
const controller = require("../controller/Cvisitor");
const router = express.Router();
// (1) GET /
router.get("/", controller.main);

// (2) GET /visitor
router.get("/visitor", controller.getVisitors);

// (3) 생성 POST /visitor/write
router.post("/visitor/write", controller.postVisitor); // 하나 추가

// (4) 삭제 DELETE /visitor/delete
router.delete("/visitor/delete", controller.deleteVisitor);

module.exports = router;
