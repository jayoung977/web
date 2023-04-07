// TODO: 라우트 설정
const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");

//(1) GET /user
router.get("/", controller.main);

//(2) GET /user/signup

router.get("/signup", controller.getSignup);

//(2)-1 회원가입 생성 POST /user/signup/write
router.post("/signup", controller.postSignup);

//(3) GET /user/signin

router.get("/signin", controller.getSignin);

//(3)-1 POST /user/signin 로그인 회원 조회
router.post("/signin", controller.postSignin);

//(3)-2 POST /user/profile 로그인 성공시 회원 정보 수정 페이지 이동
router.post("/profile", controller.postProfile);

//(3)-3 POST /user/profile/edit 회원 정보 수정
router.post("/profile/edit", controller.editProfile);

//(3)-4 POST /user/profile/delete 회원 정보 제거
router.post("/profile/delete", controller.deleteProfile);

module.exports = router;
