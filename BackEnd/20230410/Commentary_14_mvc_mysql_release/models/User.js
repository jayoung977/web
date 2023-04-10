const User = function (Sequelize, DataTypes) {
  const model = Sequelize.define(
    "user",
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
    {
      tableName: "user",
      freezeTableName: true, //이름을 복수로 변경하는 것을 막음
      timestamps: false, //데이터를 생성할때 시간 설정
    }
  );
  return model;
};

module.exports = User;
