exports.main = (req, res) => {
  res.render("index");
};

const User = require("../model/User");

//실습 1
// exports.pactice2 = (req, res) => {
//   const userData = User.getUserInfo();
//   console.log(userData); //{ serverId: 'banana', serverPw: '4321' }

//   if (req.body.id === userData.realId && req.body.pw === userData.realPw) {
//     res.send({ isLogin: true, userInfo: req.body });
//   } else {
//     res.send({ isLogin: false });
//   }
// };

// //실습 2
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
  if (idx >= 0) {
    if (req.body.pw === users[idx].realPw) {
      res.send({ isLogin: true, name: users[idx].name });
    } else {
      res.send({ isLogin: false });
    }
  } else {
    console.log("아이디 없음");
    res.send({ isLogin: false });
  }
};
