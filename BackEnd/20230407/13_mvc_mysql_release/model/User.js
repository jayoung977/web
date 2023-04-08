// TODO: DB(mysql) 연결
const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost", // databse 가 설치된 ip 주소
  user: "user", // 데이터베이스 접속 계정명
  password: "1234", // 데이터베이스 접속 비번
  database: "codingon", // 사용할 데이터베이스 이름
});

// TODO: 모델 코드

//(2)-1 회원가입 생성 POST /user/signup
exports.postVisitor = (data, callback) => {
  console.log("(2)-1-1. User.js >>", data);

  const sql = `insert into user(userid, name, pw) values('${data.userid}','${data.nickname}', '${data.password}');`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log("(2)-1-2. User.js >>", rows.insertId);
    callback(rows);
  });
};

//(3)-1 POST /user/signin 로그인 회원 조회

exports.postSignin = (data, callback) => {
  console.log("(3)-1-1. User.js >>", data);

  const sql = "SELECT * FROM user;";
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log("(3)-1-2. User.js >>", rows);
    callback(rows);
  });
};

//(3)-2 POST /user/profile 로그인 성공시 회원 정보 수정 페이지 이동

exports.postProfile = (data, callback) => {
  console.log("(3)-2-1. User.js >>", data);

  const sql = `select * from user where userid='${data}';`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log("(3)-2-2. User.js >>", rows);
    callback(rows);
  });
};

//(3)-3 POST /user/profile/edit 회원 정보 수정
exports.editProfile = (data, callback) => {
  console.log("(3)-3-1. User.js >>", data);

  const sql = `update user set  userid='${data.userid}',name='${data.name}' , pw='${data.pw}' where id=${data.id};`;

  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log("(3)-2-2. User.js >>", rows);
    callback();
  });
};
//(3)-4 POST /user/profile/delete 회원 정보 제거

exports.deleteProfile = (data, callback) => {
  console.log("(3)-4-1. User.js >>", data.id);

  const sql = `delete from user where id='${data.id}';`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log("(3)-4-2. User.js >>", rows);
    callback(true);
  });
};
