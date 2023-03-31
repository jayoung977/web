const express = require("express");
const app = express();
const PORT = 8000;

//multer 미들웨어 사용하기
//multer 불러오기
const multer = require("multer");
//path 불러오기(내장 모듈)
//path: 파일, 폴더 경로를 쉽게 설정하게 함
const path = require("path");
//파일 업로드 경로 설정 = 서버 저장 경로 설정
//dest 키: 파일이 저장될 경로를 지정
const upload = multer({
  dest: "uploads/", //폴더 의미 뒤에 'uploads/'슬래시
});

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/uploads", express.static(__dirname + "/uploads")); //경로 의미 앞에 '/uploads'슬래시

app.get("/", (req, res) => {
  res.render("index");
});
//.single(): 하나의 파일 업로드 할 때 사용
//.single()의 매개변수는 input의 name과 일치시킴
//<input type="file" name="userfile" />
app.post("/upload", upload.single("userfile"), (req, res) => {
  //업로드한 파일 정보는 req.file에 존재 (req.body에 없고)
  console.log(req.file);
  // -- 출력 결과 --
  //   {
  //     fieldname: 'userfile', // 폼에 정희한 name
  //     originalname: 'hamster1.jpeg', // 사용자가 업로드한 파일명
  //     encoding: '7bit', // 파일 인코딩 타입
  //     mimetype: 'image/jpeg',  //파일 mime 타입
  //     destination: 'uploads/', // 파일 업로드할 경로(폴더)
  //     filename: '1369e9cb106e385bfa0d42a16f5655d1', // destination에 저장된 파일 명
  //     path: 'uploads/1369e9cb106e385bfa0d42a16f5655d1', //업로드된 파일의 전체 경로
  //     size: 5059 //파일 크기(byte)
  //   }
  //폼 정보 req.body에 존재
  console.log(req.body);
  // -- 출력 결과 --
  //   [Object: null prototype] { title: '첫번째 햄스터' } //input title에 입력한 값
  res.send("upload 완료~!!");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
