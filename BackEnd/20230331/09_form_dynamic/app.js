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
  res.render("dynamic");
});
//1-1. /ajax get 요청
app.get("/ajax", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

//1-2. /ajax post 요청
app.post("/ajax", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

// 2-1. /axios get 요청
app.get("/axios", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

//2-2. /axios post 요청
app.post("/axios", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

//3-1. /fetch get 요청
app.get("/fetch", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

// //3-2. /fetch post 요청
app.post("/fetch", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

//호출
app.listen(PORT, function () {
  console.log(`웹 서버 실행!`);
  console.log(`http://localhost:${PORT}`);
});
