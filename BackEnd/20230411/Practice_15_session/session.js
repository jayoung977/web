const express = require("express");
const session = require("express-session");
const dotenv = require("dotenv");
//dotenv: 환경변수를 파일에 저장해놓고 접근할 수 있게 돕는 모듈
const app = express();
const PORT = 8080;
//dotenv 사용 방법
//process.env.XXX 형태로 사용
dotenv.config();
console.log("dotenv >> ", process.env.SECRET_KEY);

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    // 민감한 정보를 올리면 좋지 않으므로 env 파일을 만듦 (npm i dotenv)
    secret: process.env.SECRET_KEY, // session 필수 옵션 (암호화 할 때 쓰이는 키)), 특수기호 x , 아무거나
    resave: false,
    saveUninitialized: false, //일반적으로 false 지정
  })
);

const userRouter = require("./routes/user");
app.use("/", userRouter);

app.use(
  session({
    // 민감한 정보를 올리면 좋지 않으므로 env 파일을 만듦 (npm i dotenv)
    secret: process.env.SECRET_KEY, // session 필수 옵션 (암호화 할 때 쓰이는 키)), 특수기호 x , 아무거나
    resave: false,
    saveUninitialized: false, //일반적으로 false 지정
  })
);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
