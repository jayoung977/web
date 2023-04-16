//models.index.js -> 'index'는 폴더를 대표하는 파일
//sequelize-cli 자동 생성 코드를 수정 한 것임

//1. sequelize 모듈 불러오기
const Sequelize = require("sequelize");

//2. config.json파일에서 개발 환경일 때의 db 설정 옵션을 가져옴
const config = require(__dirname + "/../config/config.json")["development"];
// - 출력 -
// {
//   "development": {
//     "username": "user",
//     "password": 1234,
//     "database": "codingon",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
// }

//3. db 라는 이름의 빈 객체 정의
//(다른 파일에서 사용할 수 있도록 내보내려는 값)
const db = {};

//4. sequelize 객체 선언 시 매개변수로 db명, user명, 비번, 정보전체를 넘겨줌
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

//5. db = { sequelize: sequelize, Sequelize: Sequelize}
db.sequelize = sequelize;
db.Sequelize = Sequelize;

//6. models 안 다른 파일 연결 db = { sequelize: sequelize, Sequelize: Sequelize, Visitor : 'xx'}
db.Visitor = require("./Visitor")(sequelize, Sequelize);
db.User = require("./User")(sequelize, Sequelize);

//7. 내보내기
module.exports = db;
