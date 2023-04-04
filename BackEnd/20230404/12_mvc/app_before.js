const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// (임시 데이터) DB로부터 받아온 댓글 목록 가정
// mySQL에서 불러올때 이런 형식으로 불러와짐
const comments = [
  {
    id: 1,
    userid: "helloworld",
    date: "2022-10-31",
    comment: "안녕하세요^~^",
  },
  {
    id: 2,
    userid: "happy",
    date: "2022-11-01",
    comment: "반가워유",
  },
  {
    id: 3,
    userid: "lucky",
    date: "2022-11-02",
    comment: "오 신기하군",
  },
  {
    id: 4,
    userid: "bestpart",
    date: "2022-11-02",
    comment: "첫 댓글입니당ㅎㅎ",
  },
];

// [Before] MVC 적용 전에는 app.js에서 라우트 정의
// 단점: 라우터(경로)가 많아진다면? app.js 코드가 길어짐 -> 유지보수성 하락

// GET /
app.get("/", (req, res) => {
  res.render("index");
});

// GET /comments
app.get("/comments", (req, res) => {
  console.log(comments); // 댓글 목록이 [ {}, {}, {}, {} ] 형태로 출력
  res.render("comments", { commentInfos: comments });
});

// 1. GET query 보내기:
// GET /comment -> GET /comment/?id=6&name=홍길동
// req.query 출력 -> 출력{id:6, name:"홍길동"}
// req.query.id 출력-> 6
// 2. GET parameter 보내기 (콜론(:) 적고 변수 이름을 적는 형태):
// GET /comment/:id/:name ->  /comment/6/홍길동
// req.params 출력 ->  {id:6, name:"홍길동"}
// req.params.id 출력 -> 6
app.get("/comment/:id", (req, res) => {
  console.log(req.params); // 라우트 매개변수에 대한 정보 담겨 있음
  console.log(req.params.id); // id 고유 값

  const commentId = req.params.id; // 댓글 id: url로 들어온 매개변수
  console.log(comments[commentId - 1]);

  // :id 변수에 숫자가 아닌 값이 온다면 404 페이지
  if (isNaN(commentId)) {
    return res.render("404");
  }

  // 존재하지 않는 댓글 id 접근시 404 페이지
  if (commentId < 1 || commentId > comments.length) {
    return res.render("404");
  }

  res.render("comment", { commentInfo: comments[commentId - 1] });
});

// 없는 페이지에 접근하려고 할 때 렌더될 이미지
// [404 error]
// 맨 마지막 라우트로 선언: nor 나머지 코드 무시되기 때문!!
app.get("*", (req, res) => {
  // res.send('404 Error! 잘못된 주소 형식입니다.');
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
