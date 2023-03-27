const express = require("express");
const app = express();

const port = 8000; // mac 5000 x

app.set("view engine", "ejs");
app.set("/views", "views");
app.use("/static", express.static(__dirname + "/static"));

app.get("/", function (request, response) {
  //   response.send("hellow express");
  //   response.send("<h1>.hellow express<h1>");
  response.render("test.ejs");
});
/*
request: 클라이언트가 서버에게 본는 요청
response: 서버가 클라이언트에게 보내는 응답
*/
app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/login/register", (req, res) => {
  //path
  res.render("register"); //file name
});

app.listen(port, () => {
  console.log(port + "is open!");
  console.log(`http://localhost:${port}`);
});
