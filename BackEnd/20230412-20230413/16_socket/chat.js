const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const PORT = 8080;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  console.log("client connected");
  res.render("chat");
});

//[실습3-2] 닉네임 저장 객체
//배열[] - 순서 있음
//객체{} - 순서 없고 키값이 안겹침
//닉네임이 겹치지 않도록 하기 위해 배열 대신 객체 사용
//{소켓_아이디: 닉네임, ...}
const nickObj = {};

//[실습3-2] 닉네임 리스트 객체 업데이트
// 유저가 들어오거나 퇴장할 때 내역 업데이트
function updateNickList() {
  io.emit("updateNicks", nickObj);
  //서버에 접속한 클라이언트들에게 nickObj에 변경이 일어났음을 알리는 이벤트
}
// 입장 이벤트 이름 고정되어 있음 'connection'
// 값 추가 방법
//1. nickObj.keyname = 'vlaue'
//2. nickObj['keyname'] = 'vlaue'
//2번째 사용하려는 이유는 소켓 아이디값이 너무 길고 복잡해서 nickObj['socket.id']로 씀
//1번째는 다른 키값을 불러와서 사용할 수 없음

//io.on(이벤트이름, 콜백)
//socket과 관련된 통신 작업 처리
io.on("connection", (socket) => {
  // 'connection' : 이벤트 이름
  // - 클라이언트가 접속했을 때 발생하는 이벤트
  // - 콜백으로 socket 객체를 제공

  // 최초 입장시( 연결)
  // socket.id: 소캣 고유 아이디 -> socket은 웹페이지 별로 id 생성
  // => 크롬에서 탭 2개 띄우면 socket.id는 각각 생김(2개)
  console.log("⭕ Server Socket Connected >> ", socket.id);

  // [실습1] 각 버튼을 누를 때 마다 서버로 메세지 보내기
  //   //1.sayHello()
  //   // 1-2.client -> server 받음
  //   socket.on("hello", (data) => {
  //     console.log(`${data.who} : ${data.msg}`);
  //     // 1-3.server -> client 보냄
  //     socket.emit("helloKr", { who: "hello", msg: "안녕~~~" });
  //   });
  //   //2.sayStudy()
  //   // 2-2.client -> server 받음
  //   socket.on("study", (data) => {
  //     console.log(`${data.who} : ${data.msg}`);
  //     // 2-3.server -> client 보냄
  //     socket.emit("studyKr", { who: "study", msg: "공부중임~~~" });
  //   });
  //   //3.sayBye()
  //   // 3-2.client -> server 받음
  //   socket.on("bye", (data) => {
  //     console.log(`${data.who} : ${data.msg}`);
  //     // 3-3.server -> client 보냄
  //     socket.emit("byeKr", { who: "bye", msg: "잘가~~~" });
  //   });

  // [실습2]
  // socket.on("chatmsg", (data) => {
  //   console.log(`${data.who} : ${data.msg}`);
  //   // 3-3.server -> client 보냄
  //   socket.emit("chatmsgSd", { who: data.who, msg: data.msg });
  // });

  // [실습3]
  // 채팅창 입장 안내 문구 socket.id
  // io.emit("notice", `${socket.id.slice(0, 5)}님이 입장하셨습니다.`);

  // [실습3-2] 채팅창 입장 안내 문구 socket.id => nickname
  socket.on("setNick", (nick) => {
    console.log("socket on setNick>> ", nick); //프론트에서 입력한 닉네임 값

    //닉네임 중복 여부
    //Object.values(nickObj) -> 값들을 리스트로 만듦
    if (Object.values(nickObj).indexOf(nick) > -1) {
      //아이디 중복
      socket.emit("error", "이미 존재하는 닉네임입니다. 다시 입력해주세요.");
    } else {
      //아이디 통과
      nickObj[socket.id] = nick; //nickObj 객체에 '소캣아이디: 닉네임' 추가
      io.emit("notice", `${nick}님이 입장하셨습니다.`); //입장 메세지 "전체 공지"
      //전체 공지 => 서버에 접속한 모든 클라이언트에게 이벤트 전송
      socket.emit("entrySuccess", nick); //입장 성공시
      updateNickList(); // 닉네임 리스트 객체 업데이트
    }
  });
  //[실습 3-3] 접속자 퇴장
  // 퇴장 이벤트 이름 고정되어 있음 'disconnect'
  // disconnect event: 클라이언트가 연결을 끊었을 때 발생( 브라우저 탭 닫음 )
  socket.on("disconnect", () => {
    console.log("******❌ Server Socket Disconnected>>", socket.id);

    //1. xx님 퇴장하셨습니다. 출력
    io.emit("notice", `${nickObj[socket.id]}님이 퇴장하셨습니다.`);
    //2.nickObj에서 닫은 탭의 socket.id 삭제
    delete nickObj[socket.id];
    //3.리스트 업데이트
    updateNickList();
  });

  //[실습4] 채팅방 메세지 전송
  socket.on("send", (obj) => {
    console.log("socket on send >>", obj); //{ myNick: 'dd', msg: 'dd' } -> { +dm:'socket.id or all'}
    //[전체] 선택하고 전송시 -> dm:'all'
    //특정 닉네임을 선택하고 전송 -> dm: socket.id

    //서버에 접속한 모든 클라이언트한테 "누가 뭐라고 말했는지" 이벤트 보내기
    // const sendData = { nick: obj.myNick, msg: obj.msg };
    // io.emit("newMessage", sendData); //전체 공지

    //[실습 5] DM 기능 구현
    //만약 DM이라면 -> 특정 socket.id에게만 메세지 전달 {nick, dm, msg}
    //만약 DM이 아니면 -> 전체 공지 {nick, msg}
    if (obj.dm !== "all") {
      let dmSocketId = obj.dm; //각 닉네임에 해당하는 socket.id
      const sendData = { nick: obj.myNick, dm: "(속닥속닥) ", msg: obj.msg };
      // 1. DM을 보내고자 하는 socket.id한테 메세지 전송(상대방)
      io.to(dmSocketId).emit("newMessage", sendData);
      // 2. DM을 보내고 있는 자기자신 메세지 전송
      socket.emit("newMessage", sendData);
    } else {
      const sendData = { nick: obj.myNick, msg: obj.msg };
      io.emit("newMessage", sendData);
    }
  });
});

//주의) socket을 사용할 때에는 httl.listen으로 포트를 열어야함
http.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});