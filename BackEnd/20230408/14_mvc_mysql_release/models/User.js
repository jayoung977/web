const User = function (Sequelize, DataTypes) {
  const model = Sequelize.define(
    //params1: 모델(테이블) 이름 설정
    "user",
    //params2: 컬럼 정의

    // id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    // userid VARCHAR(20) NOT NULL,
    //   name VARCHAR(10) NOT NULL,
    //   pw VARCHAR(20) NOT NULL

    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      userid: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      pw: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },

    // params3: 모델 옵션 정의
    {
      tableName: "user", //실제 mysql 테이블 명
      freezeTableName: true, //테이블 명 고정
      timestamps: false, // 데이터가 추가/수정되는 시간을 컬럼으로 만들어서 기록
    }
  );
  return model;
};

//2. 내보내기 (indexs에서 사용됨  require("./Visitor")(sequelize, Sequelize))
module.exports = User;

// const mysql = require('mysql');

// const conn = mysql.createConnection({
//   host: 'localhost',
//   user: 'user',
//   password: '1234',
//   database: 'kdt',
// });

// exports.post_signup = (data, cb) => {
//   const sql = `INSERT INTO user (userid, name, pw) VALUES ('${data.userid}','${data.name}','${data.pw}')`;
//   conn.query(sql, (err, rows) => {
//     if (err) {
//       throw err;
//     }

//     console.log('post_singup', rows);

//     cb();
//   });
// };

// exports.post_signin = (data, cb) => {
//   const sql = `SELECT * FROM user WHERE userid='${data.userid}' and pw='${data.pw}' LIMIT 1`;
//   conn.query(sql, (err, rows) => {
//     if (err) {
//       throw err;
//     }

//     console.log(rows); // [ {} ]
//     cb(rows);
//   });
// };

// // 로그인한 유저 한 명을 가져옴!
// exports.post_profile = (userid, cb) => {
//   const sql = `SELECT * FROM user WHERE userid='${userid}' LIMIT 1`;
//   conn.query(sql, (err, rows) => {
//     if (err) {
//       throw err;
//     }

//     console.log('Model User: ', rows); // [ {} ]
//     cb(rows);
//   });
// };

// exports.edit_profile = (data, cb) => {
//   const sql = `UPDATE user SET userid='${data.userid}', name='${data.name}', pw='${data.pw}' WHERE id='${data.id}'`;
//   conn.query(sql, (err, rows) => {
//     if (err) {
//       throw err;
//     }

//     console.log('Model edit profile', rows);

//     cb();
//   });
// };

// exports.delete_profile = (id, cb) => {
//   conn.query(`DELETE FROM user WHERE id='${id}'`, (err, rows) => {
//     if (err) {
//       throw err;
//     }

//     cb();
//   });
// };
