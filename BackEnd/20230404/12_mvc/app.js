const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//require js파일만 불러올 수 있음
//만약 폴더 까지만 폴더까지만 접근할 경우, 자동으로 index.js 파일을 찾아감
const indexRouter = require("./routes");

//미들웨어 등록
//'/~~~~'에 해당되는 모든 라우터를 /routes/index.js에 정의했으니,
// /routes.index.js를 읽어보면 된다.
app.use("/", indexRouter);

app.get("*", (req, res) => {
  // res.send('404 Error! 잘못된 주소 형식입니다.');
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
