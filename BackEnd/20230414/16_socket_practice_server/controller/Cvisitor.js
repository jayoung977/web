// require("../models"): models/index.js 내보내는 값
// models 변수 값:  models/index.js에서 export 한 db 객체
const models = require("../models");

// (1) GET /
exports.main = (req, res) => {
  console.log("main GET / req.session>> ", req.session);
  const userSession = req.session.userid;
  // console.log("main GET / userSession>> ", userSession);
  if (userSession !== undefined) {
    res.render("index", { isLogin: true, userid: userSession });
  } else {
    res.render("index", { isLogin: false });
  }
};

// (2) 조회 GET /visitor
exports.getVisitors = async (req, res) => {
  // ver1. then() 메서드 사용
  // models.Visitor.findAll().then((result) => {
  //   console.log('findAll >> ', result); // [ {}, {}, {}, {} ]
  //   res.render('visitor', { data: result });
  // });

  // ver2. async/await 사용
  const result = await models.Visitor.findAll();
  console.log("(2) Cvisitor.js findAll >> ", result); // [ {}, {}, {}, {} ]
  const userSession = req.session.userid;
  console.log("(2) Cvisitor.js userSession >> ", userSession); // [ {}, {}, {}, {}
  if (userSession !== undefined) {
    res.render("visitor", { isLogin: true, data: result, userid: userSession });
  } else {
    // `손님_${req.session.slice(0, 5)}`
    res.render("visitor", { isLogin: false, data: result, userid: "손님" });
  }
};

// (3) 생성 POST /visitor/write async/await
exports.postVisitor = async (req, res) => {
  const result = await models.Visitor.create({
    name: req.body.name,
    comment: req.body.comment,
  });
  console.log("(3) Cvisitor.js create >> ", result);
  // - 출력 -
  // visitor {
  //   dataValues: { id: 8, name: 'sean', comment: '안뇽' },
  //   _previousDataValues: { name: 'sean', comment: '안뇽', id: 8 },
  //   uniqno: 1,
  //   _changed: Set(0) {},
  //   _options: {
  //     isNewRecord: true,
  //     _schema: null,
  //     _schemaDelimiter: '',
  //     attributes: undefined,
  //     include: undefined,
  //     raw: undefined,
  //     silent: undefined
  //   },
  //   isNewRecord: false
  // }
  res.send(result);
};

// (4) 삭제 DELETE /visitor/delete
exports.deleteVisitor = async (req, res) => {
  // ver1. then() 메서드 사용
  // models.Visitor.destroy({
  //   where: { id: req.body.id },
  // }).then(()=>{
  //   res.end();
  // });

  // ver2. async/await 사용
  await models.Visitor.destroy({
    where: { id: req.body.id },
  });
  res.end();
};

// (5) 하나 조회(수정을 위한)  GET /visitor/get
exports.getVisitor = async (req, res) => {
  const result = await models.Visitor.findOne({
    where: { id: req.query.id },
  });
  console.log("(5) Cvisitor.js findOne >> ", result);
  // - 출력 -
  // (5) Cvisitor.js findOne >>  visitor {
  //   dataValues: { id: 11, name: '신아영', comment: '11' },
  //   _previousDataValues: { id: 11, name: '신아영', comment: '11' },
  //   uniqno: 1,
  //   _changed: Set(0) {},
  //   _options: {
  //     isNewRecord: false,
  //     _schema: null,
  //     _schemaDelimiter: '',
  //     raw: true,
  //     attributes: [ 'id', 'name', 'comment' ]
  //   },
  //   isNewRecord: false
  // }
  res.send(result);
};

// (5)-4 수정  PATCH  /visitor/edit
exports.patchVisitor = async (req, res) => {
  const result = await models.Visitor.update(
    {
      name: req.body.name,
      comment: req.body.comment,
    },
    {
      where: { id: req.body.id },
    }
  );
  console.log(" (5)-4  Cvisitor.js update >>", result);
  res.end();
};
