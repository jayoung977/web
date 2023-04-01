const express = require("express");
const app = express();
const PORT = 8000;

const multer = require("multer");

const path = require("path");

//1. multer 세부설정(파일 이름 변경)
const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + req.body.id + ext);
    },
  }),

  limits: { fileSize: 5 * 1024 * 1024 },
});

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/uploads", express.static(__dirname + "/uploads"));

app.get("/", (req, res) => {
  res.render("index");
});

//2-1. single() 업로드

app.post("/register", uploadDetail.single("userfile"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  res.render("result", {
    userFile: req.file,
    userInfo: req.body,
  });
});

//2-2 array()
app.post("/register/array", uploadDetail.array("userfile"), (req, res) => {
  console.log(req.files);
  console.log(req.body);
  res.render("result", {
    userFile: req.files,
    userInfo: req.body,
  });
});

//2-3 fields()
app.post(
  "/register/feilds",
  uploadDetail.fields([
    { name: "userfile1" },
    { name: "userfile2" },
    { name: "userfile3" },
  ]),
  (req, res) => {
    console.log(req.files);
    console.log(req.body);
    res.render("result", {
      userFile: req.files,
      userInfo: req.body,
    });
  }
);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
