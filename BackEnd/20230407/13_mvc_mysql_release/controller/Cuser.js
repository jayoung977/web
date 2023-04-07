// TODO: 컨트롤러 코드
const User = require("../model/User");

//(1) GET /user
exports.main = (req, res) => {
  res.render("index");
};
//(2) GET /user/signup
exports.getSignup = (req, res) => {
  res.render("signup");
};
//(2)-1 회원가입 생성 POST /user/signup
exports.postSignup = (req, res) => {
  console.log("(2)-1-1. Cuser.js >>", req.body);
  User.postVisitor(req.body, (result) => {
    console.log("(2)-1-2. Cuser.js >>", result); //model 코드에서 데이터를 추가한 결과인 row.insertId
    res.send({
      userid: req.body.userid,
      nickname: req.body.nickname,
      password: req.body.password,
    });
  });
};

//(3) GET /user/signin
exports.getSignin = (req, res) => {
  res.render("signin");
};

//(3)-1 POST /user/signin 로그인 회원 조회
exports.postSignin = (req, res) => {
  console.log("(3)-1-1. Cuser.js >>", req.body);
  User.postSignin(req.body, (result) => {
    console.log("(3)-1-2. Cuser.js >>", result);

    const users = [];
    const userIds = [];
    for (let user of result) {
      // console.log("(3)-1-3. Cuser.js >>", user);
      users.push({
        realId: user.userid,
        realPw: user.pw,
      });
      userIds.push(user.userid); // 아이디만
    }
    // console.log("(3)-1-3. Cuser.js >> users", users);
    // console.log("(3)-1-4. Cuser.js >> userIds", userIds);

    const idx = userIds.indexOf(req.body.userid);
    if (idx >= 0) {
      if (req.body.password === users[idx].realPw) {
        res.send({ isLogin: true, userInfo: req.body });
        console.log("로그인 성공");
      } else {
        res.send({ isLogin: false });
      }
    } else {
      console.log("아이디 없음");
      res.send({ isLogin: false });
    }
  });
};

//(3)-2 POST /user/profile 로그인 성공시 회원 정보 수정 페이지 이동
exports.postProfile = (req, res) => {
  console.log("(3)-2-1. Cuser.js >>", req.body);
  User.postProfile(req.body.userid, (result) => {
    console.log("(3)-2-2. Cuser.js result>>", result);
    res.render("profile", { data: result[0] }); //[0]반드시
  });
};

//(3)-3 POST /user/profile/edit 회원 정보 수정
exports.editProfile = (req, res) => {
  console.log("(3)-3-1. Cuser.js >>", req.body);
  User.editProfile(req.body, () => {
    res.send("수정 성공!");
  });
};

//(3)-4 POST /user/profile/delete 회원 정보 제거
exports.deleteProfile = (req, res) => {
  console.log("(3)-4-1. Cuser.js >>", req.body); //{id}
  User.deleteProfile(req.body, () => {
    res.send("회원 탈퇴 성공!");
  });
};
