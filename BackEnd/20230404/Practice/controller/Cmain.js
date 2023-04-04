// Comment = {getComments: ()=>{}}
const Comment = require("../model/Comment");

//exports: main함수를 사용할 수 있도록 함
exports.main = (req, res) => {
  res.render("practice1");
};

// exports.login = (req, res) => {
//   const correctuser = Comment.getComments()[0];
//   console.log(Comment.getComments()[0]);
//   console.log(correctuser.serverId);
//   console.log(req.body); //터미널 출력, 형식 { id: 'xxxx', pw: 'xxxx' }

//   if (
//     req.body.id === correctuser.serverId &&
//     req.body.pw === correctuser.serverPw
//   ) {
//     res.send({ isLogin: true, userInfo: req.body });
//   } else {
//     res.send({ isLogin: false });
//   }
// };

exports.login = (req, res) => {
  const correctuser = Comment.users;
  console.log(correctuser);
  exist_user_arr = [];
  for (array of correctuser.split("\n")) {
    console.log(array.split("//"));
    exist_user_arr.push(array.split("//"));
  }

  console.log(req.body);

  for (const i = 0; i < exist_user_arr.length; i++) {
    if (
      req.body.id === exist_user_arr[i][0] &&
      req.body.pw === exist_user_arr[i][1]
    ) {
      res.send({ isLogin: true, userInfo: req.body });
    } else {
      res.send({ isLogin: false });
    }
  }
};
