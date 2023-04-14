const models = require("../models"); //index (이미 index에서 visitor,user 연동됨)

exports.index = (req, res) => {
  res.render("index");
};

exports.signup = (req, res) => {
  res.render("signup");
};

//(1) 생성 `INSERT INTO user (userid, name, pw) VALUES ('${data.userid}','${data.name}','${data.pw}')`;
exports.post_signup = async (req, res) => {
  const result = await models.User.create({
    userid: req.body.userid,
    name: req.body.name,
    pw: req.body.pw,
  });
  console.log(" Cuser.js create >> ", result);
  res.send(true);
};

exports.signin = (req, res) => {
  res.render("signin");
};

//(2) 하나 조회 `SELECT * FROM user WHERE userid='${data.userid}' and pw='${data.pw}' LIMIT 1`;
exports.post_signin = async (req, res) => {
  console.log(" (2)-1 하나 조회 Cuser.js  >> ", req.body);
  const result = await models.User.findOne({
    where: {
      userid: req.body.userid,
      pw: req.body.pw,
    },
  });
  console.log("(2) 하나 조회 Cuser.js post_signin >> ", result);
  //로그인 성공: result = {}
  //로그인 실패: result = null
  if (result) {
    res.send(true);
  } else {
    res.send(false);
  }
};

// (3) 로그인한 유저 한 명을 가져옴!
//`SELECT * FROM user WHERE userid='${userid}' LIMIT 1`;
exports.post_profile = async (req, res) => {
  console.log("(3)-1 로그인한 유저 한 명을 가져옴!  Cuser.js  >> ", req.body);
  const result = await models.User.findOne({
    where: {
      userid: req.body.userid,
    },
  });
  console.log("(3)-2 Cuser.js  >> ", result);
  if (result) {
    // 로그인 성공; views/profile.ejs 렌더링
    res.render("profile", { data: result.dataValues }); //data: result도 됨
  } else {
    // 로그인 실패; /user/signin 현재 주소 다시 접속
    res.redirect("/user/signin");
  }
};
// (4) 수정
// `UPDATE user SET userid='${data.userid}', name='${data.name}', pw='${data.pw}' WHERE id='${data.id}'`;
exports.edit_profile = async (req, res) => {
  const result = await models.User.update(
    {
      name: req.body.name,
      pw: req.body.pw,
    },
    {
      where: { id: req.body.id },
    }
  );
  console.log(" (4)  Cuser.js update >>", result);
  res.send("회원정보 수정 성공!");
};
// (5) 삭제
//`DELETE FROM user WHERE id='${id}'`
exports.delete_profile = async (req, res) => {
  const result = await models.User.destroy({
    where: { id: req.body.id },
  });
  console.log(" (5) 삭제 Cuser.js DELETE >>", result);
  res.send(true);
};
