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

// 1-1. 세부설정 없이 multer 사용할 때(파일 이름 변경 안할 때)
const upload = multer({
  dest: "uploads/", //뒤에 'uploads/'슬래시: 폴더를 의미함
});

//1-2. multer 세부설정(파일 이름 변경)
const uploadDetail = multer({
  storage: multer.diskStorage({
    //destination: 경로 설정
    destination(req, file, done) {
      //done(error 처리, destination 경로 지정)
      done(null, "uploads/");
    },
    filename(req, file, done) {
      //file.originalname에서 '확장자' 추출
      // 가정) apple.png 파일 업로드 => 'png' 추출
      const ext = path.extname(file.originalname);
      //[파일명 + 현재시간.확장자] 형식으로 파일 업로드
      //path.basename(file.originalname,ext): 파일이름에서 확장자 제거 => 'apple'추출
      //Date.now() => 현재시간(1680309598964)
      //1970년 1월 1일 0시 0분 0초를 기준으로 현재까지 경과된 밀리초
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  //5MB로 제한
  //5 * 2^10 = 5KB
  //5 * 2*10 * 2^10 = 5MB
  limits: { fileSize: 5 * 1024 * 1024 },
});

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/uploads", express.static(__dirname + "/uploads")); //경로 의미 앞에 '/uploads'슬래시

app.get("/", (req, res) => {
  res.render("index");
});

//2-1. single() 업로드
//.single(): 하나의 파일 업로드 할 때 사용
//.single()의 매개변수는 input의 name과 일치시킴
//<input type="file" name="userfile" />
app.post("/upload", uploadDetail.single("userfile"), (req, res) => {
  //업로드한 파일 정보는 req.file에 존재 (req.body에 없고)
  console.log(req.file);
  // -- 1-1 출력 결과 --
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
  // -- 1-1 출력 결과 --
  //   [Object: null prototype] { title: '첫번째 햄스터' } //input title에 입력한 값
  res.send("upload 완료~!!");
});

//2-2. array() 한번에 여러개 업로드
app.post("/upload/array", uploadDetail.array("userfile"), (req, res) => {
  //array 일 때 req.file's' 로 file 받음
  console.log(req.files); //[{}, {}, {}] 3개 올렸을 때
  console.log(req.body); // {title: 'xxx'}
  res.send("한번에 여러개 파일 업로드 완료!");
});

//2-3. fields() 여러 input에 각각 파일 업로드
app.post(
  "/upload/fields",
  // [{ name: "userfile1" }, { name: "userfile2" }]: input 개수 만큼 어레이 넣어야함
  uploadDetail.fields([{ name: "userfile1" }, { name: "userfile2" }]),
  (req, res) => {
    //fields 일 때 파일 여러개니까 req.file's' 로 file 받음
    console.log(req.files); //{userfile1: [{}], userfile2: [{}]} 형태로 파일 정보 출력
    console.log(req.body); //{title1: '...', title2: '...'}
    res.send("각각 여러개 파일 업로드 완료!");
  }
);

//3 동적 파일 업로드
app.post(
  "/dynamicFile",
  uploadDetail.single("dynamic-userfile"),
  (req, res) => {
    //요청의 파일 정보 확인
    console.log(req.file);
    //클라이언트에게 파일을 응답
    res.send(req.file);
  }
);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
