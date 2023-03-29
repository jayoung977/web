const express = require("express"); //노드 모듈스의 익스프레스 가져옴
const app = express();
const PORT = 8000;

app.set("view engine", "ejs"); //'view engine 등록
app.use("/views", express.static(__dirname + "/views")); //ejs를 담을 views 폴더 경로 설정

//body-parser
app.use(express.urlencoded({ extended: true })); //post 요청으로 들어오는 모든 형식의 데이터를 파싱(분석)
app.use(express.json()); //json 형태로 데이터를 주고 받음 , 데이터의 확장자명

//라우팅(routing): 경로 설정
//브라우저에서 어떤 url로 접속했을 때 어떤 페이지를 보여줄 것인가!!!

//localhost:PORT/ 접속했을 때, index.ejs를 보여주겠다.
app.get("/", function (req, res) {
  //views/index.ejs 파일을 찾아서 응답
  const myTitle = "form 실습!!";
  res.render("index", { title: myTitle, name: "JY" }); // 서버에서 값 반환
});

//get - http://localhost:8000/getForm?id=wjsrnr20&pw=3333
app.get("/getForm", (req, res) => {
  //   console.log(req);
  console.log(req.query); //터미널에서 출력 //{ id: '', pw: '1111' }
  res.send("get 요청 성공!!");
});
// post - http://localhost:8000/postForm
app.post("/postForm", (req, res) => {
  console.log(req.body);
  res.send("post 요청 성공!!");
});

//호출
app.listen(PORT, function () {
  console.log(`웹 서버 실행!`);
  console.log(`http://localhost:${PORT}`);
});
