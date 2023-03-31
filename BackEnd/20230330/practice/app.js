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

//1-1. /axios get 요청
app.get("/axios", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

//1-2. /axios post 요청
app.post("/axios", (req, res) => {
  const serverId = "banana"; //정답 아이디
  const serverPw = "4321"; //정답 패스워드

  console.log(req.body); //터미널 출력, 형식 { id: 'xxxx', pw: 'xxxx' }

  if (req.body.id === serverId && req.body.pw === serverPw) {
    const mymsg = `${req.body.id}님! 로그인 성공😁`;
    const mycolor = "blue";
    res.send({ msg: mymsg, color: mycolor }); //res.send를 if문 안에 넣어야 if 문 안 변수를 받을 수 있음
  } else {
    const mymsg = `아이디 또는 패스워드 오류😥`;
    const mycolor = "red";
    res.send({ msg: mymsg, color: mycolor });
  }
});

//호출
app.listen(PORT, function () {
  console.log(`웹 서버 실행!`);
  console.log(`http://localhost:${PORT}`);
});
