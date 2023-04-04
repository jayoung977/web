const express = require("express");
//controller 구조
//controller = {main: ()=>{}//함수 , comments: ()=>{} //함수}
const controller = require("../controller/Cmain");
//router로 Router()객체 불러옴
const router = express.Router();

// POST일 경우->router.post()

// GET /
router.get("/", controller.main);

// GET /comments
router.get("/comments", controller.comments);

// GET /comment/:id
router.get("/comment/:id", controller.comment);

// app.js 에서 const indexRouter = require("./routes");의 indexRouter에 라우터를 반환해줌
module.exports = router;
