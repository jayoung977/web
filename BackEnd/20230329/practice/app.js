const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));

//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
  const myTitle = "실습 풀이";
  res.render("index", { title: myTitle }); // 서버에서 값 반환
});

app.get("/practice1", function (req, res) {
  res.render("practice1"); // 서버에서 값 반환
});

app.get("/practice2", function (req, res) {
  res.render("practice2"); // 서버에서 값 반환
});

app.get("/getForm", (req, res) => {
  console.log(req.query);
  res.render("result", {
    title: "실습1 폼 전송 완료!",
    name: req.query.name,
    female: req.query.female,
    male: req.query.male,
    year: req.query.year,
    month: req.query.month,
    day: req.query.day,
    travel: req.query.travel,
    fashion: req.query.fashion,
    food: req.query.food,
  });
});

app.post("/postForm", (req, res) => {
  console.log(req.body);
  res.render("result", {
    title: "실습2 폼 전송 완료!",
    name: req.body.name,
    female: req.body.female,
    male: req.body.male,
    year: req.body.year,
    month: req.body.month,
    day: req.body.day,
    travel: req.body.travel,
    fashion: req.body.fashion,
    food: req.body.food,
    color: req.body.color,
    number: req.body.number,
  });
});

//호출
app.listen(PORT, function () {
  console.log(`웹 서버 실행!`);
  console.log(`http://localhost:${PORT}`);
});
