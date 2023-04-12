exports.main = (req, res) => {
  res.render("session", { name: req.session.name });
};

exports.Login = (req, res) => {
  // console.log("login>>req.session", req.session.name);
  if (req.session.name) {
    req.session.destroy((err) => {
      if (err) {
        throw err;
      }
    });
    res.render("login", { needLogout: true });
  } else {
    res.render("login", { needLogout: false });
  }
};
const User = require("../model/User");

exports.pactice2 = (req, res) => {
  const userDatas = User.users.split("\n");

  const users = [];
  const userIds = [];
  for (let user of userDatas) {
    users.push({
      realId: user.split("//")[0],
      realPw: user.split("//")[1],
      name: user.split("//")[2],
    });
    userIds.push(user.split("//")[0]); // 아이디만
  }

  const idx = userIds.indexOf(req.body.id);
  const url = require("url");
  if (idx >= 0) {
    if (req.body.pw === users[idx].realPw) {
      console.log(">>>>>>>>>>>>>>", req.session);
      req.session.name = users[idx].name;
      console.log(req.sessionID);
      res.send({ isLogin: true, name: users[idx].name });
    } else {
      res.send({ isLogin: false });
    }
  } else {
    console.log("아이디 없음");
    res.send({ isLogin: false });
  }
};
