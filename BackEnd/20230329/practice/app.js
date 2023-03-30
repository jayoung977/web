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
  const myTitle = "실습 풀이";
  res.render("index", { title: myTitle });
});

app.get("/practice1", function (req, res) {
  res.render("practice1");
});

app.get("/practice2", function (req, res) {
  res.render("practice2");
});

app.get("/result1", (req, res) => {
  console.log(req.query);
  res.render("result", {
    title: "실습1 폼 전송 완료!",
    // 정답 코드: 쿼리를 한번에 받기
    userInfo: req.query,
    // 이전 코드:
    // name: req.query.name,
    // gender: req.query.gender,
    // year: req.query.year,
    // month: req.query.month,
    // day: req.query.day,
    // hobby: req.query.hobby,
  });
});

app.post("/result2", (req, res) => {
  console.log(req.body);
  res.render("result", {
    title: "실습2 폼 전송 완료!",
    userInfo: req.body,
    // 이전 코드:
    // name: req.body.name,
    // gender: req.body.gender,
    // year: req.body.year,
    // month: req.body.month,
    // day: req.body.day,
    // hobby: req.body.hobby,
    // color: req.body.color,
    // number: req.body.number,
  });
});

//호출
app.listen(PORT, function () {
  console.log(`웹 서버 실행!`);
  console.log(`http://localhost:${PORT}`);
});
