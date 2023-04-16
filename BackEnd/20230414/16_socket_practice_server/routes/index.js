const express = require("express");
const controller = require("../controller/Cvisitor");
const router = express.Router();
// (1) GET /
router.get("/", controller.main);

// (2) GET /visitor
router.get("/visitor", controller.getVisitors); //'s' 전체 조회

// (3) 생성 POST /visitor/write
router.post("/visitor/write", controller.postVisitor); // 하나 추가

// (4) 삭제 DELETE /visitor/delete
router.delete("/visitor/delete", controller.deleteVisitor); //하나 삭제

// (5) 조회(수정을 위한)  GET /visitor/get
router.get("/visitor/get", controller.getVisitor); //하나 조회

// (5)-4 수정  PATCH  /visitor/edit
router.patch("/visitor/edit", controller.patchVisitor); //하나 수정

module.exports = router;
