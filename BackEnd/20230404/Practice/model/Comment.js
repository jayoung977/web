//데이터베이스 선택~~~
exports.getComments = () => {
  //sql문 만들고,
  //sql문을 excute(실행) 시키는 코드들이 안에 작성될 것임
  return [
    {
      serverId: "banana", //정답 아이디
      serverPw: "4321", //정답 패스워드
    },
  ];
};

exports.users = `apple//1234//사과사과
banana//4321//바나나나
happy//qwer234//해피해피`;
