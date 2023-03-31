const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));

//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routing(경로 설정)
app.get("/", function (req, res) {
  res.render("practice1");
});

//1. /axios get 요청
app.get("/axios", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

//2. /axios post 요청
//밖에서 변수 설정
const serverId = "banana"; //정답 아이디
const serverPw = "4321"; //정답 패스워드

app.post("/axios2", (req, res) => {
  console.log(req.body); //터미널 출력, 형식 { id: 'xxxx', pw: 'xxxx' }

  if (req.body.id === serverId && req.body.pw === serverPw) {
    res.send({ isLogin: true, userInfo: req.body });
  } else {
    res.send({ isLogin: false });
  }
});

//호출
app.listen(PORT, function () {
  console.log(`웹 서버 실행!`);
  console.log(`http://localhost:${PORT}`);
});
