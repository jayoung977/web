// Comment = {getComments: ()=>{}}
const Visitor = require("../model/Visitor");

// (1) GET /
exports.main = (req, res) => {
  res.render("index");
};

// (2) GET /visitor
exports.getVisitors = (req, res) => {
  //[before]
  // console.log(Visitor.getVisitors());
  // res.render("Visitor", { data: Visitor.getVisitors() });

  //[after] mysql 연결
  // rows -> result
  Visitor.getVisitors((result) => {
    console.log("2.Cvisitor.js >> ", result);
    //[{},{}]
    res.render("Visitor", { data: result });
  });
};

// (3) POST /visitor/write
exports.postVisitor = (req, res) => {
  console.log("3-1. Cvisitor.js >>", req.body);

  Visitor.postVisitor(req.body, (result) => {
    console.log("3-2. Cvisitor.js >>", result); //model 코드에서 데이터를 추가한 결과인 row.insertId
    res.send({ id: result, name: req.body.name, comment: req.body.comment });
  });
};
