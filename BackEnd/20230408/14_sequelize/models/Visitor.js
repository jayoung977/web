//1. visitor 모델 (-> 테이블 구조 ) 정의
// sequelize 모델과 mysql table 연결(대응)
const Visitor = function (Sequelize, DataTypes) {
  // models/index.js)  db.Visitor =  require("./Visitor")(sequelize, Sequelize))
  // Sequelize: require("./Visitor")에서  sequelize 첫인자 (*sequelize, Sequelize))
  // DataTypes: require("./Visitor")에서  Sequelize 둘째 인재 (*sequelize, *Sequelize))

  // sequelize 모델
  // Sequelize.define(params1,params2,params3)
  // params1: 모델 이름 설정
  // params2: 컬럼 정의
  //   CREATE TABLE visitor (
  //     id INT NOT NULL PRIMARY KEY auto_increment,
  //     name VARCHAR(10) NOT NULL,
  //     comment MEDIUMTEXT
  //   );
  // params3: 모델 옵션 정의

  const model = Sequelize.define(
    //params1: 모델(테이블) 이름 설정
    "visitor",
    //params2: 컬럼 정의
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      comment: {
        type: DataTypes.TEXT("medium"),
      },
    },

    // params3: 모델 옵션 정의
    {
      tableName: "visitor", //실제 mysql 테이블 명
      freezeTableName: true, //테이블 명 고정
      timestamps: false, // 데이터가 추가/수정되는 시간을 컬럼으로 만들어서 기록
    }
  );
  return model;
};

//2. 내보내기 (indexs에서 사용됨  require("./Visitor")(sequelize, Sequelize))
module.exports = Visitor;
