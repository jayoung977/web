const models = require("../models"); //index (이미 index에서 visitor,user 연동됨)

exports.mainchat = (req, res) => {
  const userid = req.body.userid;
  console.log("(1) 로그인한 유저 가져옴!  Cchat.js  >> ", userid);
  console.log("(2) 세션 유저 가져옴!  Cchat.js  >> ", req.session);

  res.render("chat", { isLogin: true, userid: userid });
};

exports.getchat = (req, res) => {
  const userSession = req.session.userid;
  console.log("(2) 세션 유저 가져옴!  Cchat.js  >> ", userSession);

  if (userSession !== undefined) {
    res.render("chat", { isLogin: true, userid: userSession });
  } else {
    res.render("404");
  }
};
