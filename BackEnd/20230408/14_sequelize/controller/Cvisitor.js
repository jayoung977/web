// Comment = {getComments: ()=>{}}
const Visitor = require("../model/Visitor");

// (1) GET /
exports.main = (req, res) => {
  res.render("index");
};

// (2) 조회 GET /visitor
exports.getVisitors = (req, res) => {
  //[before]
  // console.log(Visitor.getVisitors());
  // res.render("Visitor", { data: Visitor.getVisitors() });

  //[after] mysql 연결
  // rows -> result
  Visitor.getVisitors((result) => {
    console.log("(2).Cvisitor.js >> ", result);
    //[{},{}]
    res.render("Visitor", { data: result });
  });
};

// (3) 생성 POST /visitor/write
exports.postVisitor = (req, res) => {
  console.log("(3)-1. Cvisitor.js >>", req.body);

  Visitor.postVisitor(req.body, (result) => {
    console.log("(3)-2. Cvisitor.js >>", result); //model 코드에서 데이터를 추가한 결과인 row.insertId
    res.send({ id: result, name: req.body.name, comment: req.body.comment });
  });
};

// (4) 삭제 DELETE /visitor/delete
exports.deleteVisitor = (req, res) => {
  console.log("(4)-1. Cvisitor.js >>", req.body); //{id:n}
  Visitor.deleteVisitor(req.body.id, (result) => {
    console.log("(4)-2. Cvisitor.js >>", result);
    res.send("삭제 성공!!");
  });
};

// (5) 조회(수정을 위한)  GET /visitor/get
exports.getVisitor = (req, res) => {
  console.log("(5)-1. Cvisitor.js >>", req.query); //{id:n}

  Visitor.getVisitor(req.query.id, (result) => {
    console.log("(5)-2. Cvisitor.js >>", result); //model 코드에서 callback에 넘긴 rows[0]
    res.send(result); //{ id: 10, name: '아리수', comment: '22' }
  });
};

// (5)-4 수정  PATCH  /visitor/edit
exports.patchVisitor = (req, res) => {
  console.log("(5)-4-1. Cvisitor.js >>", req.body);
  Visitor.patchVisitor(req.body, () => {
    res.send("수정 성공!");
  });
};
