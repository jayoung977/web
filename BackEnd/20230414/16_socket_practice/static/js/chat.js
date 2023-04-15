//frontend js

//socket 사용을 위해서 객체 생성
let socket = io.connect();

//[실습3-2]
//나의 닉네임 선언
let myNick;

socket.on("connect", () => {
  console.log("⭕ Client Socket Connected>>", socket.id);
});

// [실습3] 채팅창 입장/퇴장 안내 문구
socket.on("notice", (msg) =>
  document
    .querySelector("#chat-list")
    .insertAdjacentHTML("beforeend", `<div class="notice">${msg}</div>`)
);

// [실습3-2] entry -> 서버
socket.emit("setNick", userid);

// function entry() {
//   console.log(document.querySelector("#nickname").value);
//   if (document.querySelector("#nickname").value !== "") {
//     socket.emit("setNick", document.querySelector("#nickname").value);
//   } else {
//     alert("닉네임을 입력해주세요.");
//   }
// }
// [실습3-2]  서버 -> entrySuccess
socket.on("entrySuccess", (nick) => {
  //1. 내 닉네임 설정
  myNick = nick;
  //2. 닉네임 입력창 & 버튼 비활성화
  // document.querySelector("#nickname").disabled = true; //입력창 비활성화 (클릭 막기)
  // document.querySelector(".entry-box > button").disabled = true; //버튼 비활성화(클릭 막기)
  //3. div.chat-box 요소 보이기
  // document.querySelector(".chat-box").classList.remove("d-none");
});
// [실습3-2]  서버 -> error 받음
// 닉네임 중복 -> alert 띄우기
socket.on("error", (msg) => {
  alert(msg);
});
// [실습3-2] 서버 -> updateNicks 받음
// 닉네임 리스트 객체 업데이트하는 이벤트를 받음
socket.on("updateNicks", (obj) => {
  let options = `<option value = "all">전체</option>`;

  //select id='nick-list 요소의 option 추가
  for (let key in obj) {
    // obj[key] : 유저가 인풋에 입력한 닉네임
    // key: 소켓 아이디
    if (obj[key] !== myNick) {
      options += `<option value = "${key}">${obj[key]}</option>`;
    }
  }

  console.log(options);
  //select 요소에 options 덮어쓰기
  document.querySelector("#nick-list").innerHTML = options;
});

//[실습4] 채팅창 메세지 전송 step1
//'send' 이벤트 전송 {닉네임, 입력메세지}
function send() {
  const data = {
    myNick: myNick,
    //[실습5] DM 여부
    //select태그에서 선택한 option태그의 value 값
    dm: document.querySelector("#nick-list").value,
    msg: document.querySelector("#message").value,
  };
  if (data.msg !== "") {
    socket.emit("send", data);
  } else {
    alert("메세지를 입력해주세요.");
  }

  document.querySelector("#message").value = ""; //인풋 초기화
}
//[실습4] 채팅방 메세지 전송
//서버에 접속한 모든 클라이언트한테 "누가 뭐라고 말했는지" 이벤트 보내기
socket.on("newMessage", (data) => {
  console.log("socket  newMessage data >>", data);

  // #chat-ist 선택 (파란색 박스 = 메세지 상자)
  let chatlist = document.querySelector("#chat-list");
  //.my-chat or .other-chat 요소 생성
  let div = document.createElement("div");
  // 가장 안쪽 div 요소 생성
  let divChat = document.createElement("div");

  //1. 새 메세지가 도착했는데 myNick에 저장된 현재 내 닉네임과
  //data의 닉네임이 같다면, 내 채팅으로 보이게 - 오른쪽
  //아니면 상대방 채팅으로 보이게   - 왼쪽
  console.log("myNick>>", myNick);
  console.log("data.nick>>", data.nick);
  if (myNick === data.nick) {
    div.classList.add("my-chat");
  } else {
    div.classList.add("other-chat");
  }

  //[실습5] DM 여부
  //dm 이면 {nick:'xx', dm:'(속닥속닥) xxx', msg: 'xx'}
  //dm 아니면 {nick:'xx', msg: 'xx'}
  if (data.dm) {
    // data.dm ->'(속닥속닥) '
    div.classList.add("secret-chat");
    divChat.textContent = data.dm; //divChat 요소에 (속닥속닥) 글자를 추가)
  }

  //2.divChat의 textContent/innerText값을 적절히 변경
  //nick: msg 형태

  // divChat.innerText = `${data.nick} : ${data.msg}`; //[실습 4]
  divChat.textContent = divChat.textContent + `${data.nick} : ${data.msg}`; //[실습5]
  //dm 일경우  divChat.textContent = '(속닥속닥) ' + 누가 : 메세지
  //아닐 경우   divChat.textContent = '' + 누가 : 메세지

  //3. divChat 을 div 요소에 추가
  //div을 chatList에
  div.append(divChat); //   div.append(divChat); 도 됨
  console.log(div);
  chatlist.append(div); //   chatlist.append(div); 도 됨

  //4.(선택) 메세지가 많아도 하단 고정
  chatlist.scrollTop = chatlist.scrollHeight;
});
