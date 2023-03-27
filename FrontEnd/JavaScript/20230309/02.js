console.log("connected?");

// 조건문
//1. if 문

if (5 > 3) {
  console.log("얍");
}

// let number = Number(prompt("숫자를 입력해 주세요")); //string 이 기본
let number = 50;
number = Number(number);
console.log(typeof number);

if (number > 10) {
  console.log("이 수는 10보다 큽니다.");
} else {
  console.log("이 수는 10보다 작거나 같습니다.");
}

if (number > 10) {
  console.log("이 수는 10보다 큽니다.");
} else if (number === 10) {
  console.log("입력한 수는 10입니다.");
} else {
  console.log("이 수는 10보다 작습니다.");
}

//성적 산출 프로그램
if (number > 100 || number < 0) {
  console.log("입력 값이 잘못 되었습니다.");
} else if (number > 90) {
  console.log("A");
} else if (number > 80) {
  console.log("B");
} else if (number > 70) {
  console.log("C");
} else if (number > 60) {
  console.log("D");
} else {
  console.log("F");
}

//나이 산출 프로그램

// let age = Number(prompt("input age"));
let age = Number(20);
if (age < 0) {
  console.log("값이 잘못 되었습니다.");
} else if (age >= 20) {
  console.log("성인");
} else if (age >= 17) {
  console.log("고등학생");
} else if (age >= 14) {
  console.log("중학생");
} else if (age >= 8) {
  console.log("초등학생");
} else {
  console.log("유아");
}

//나이 산출 프로그램-정답
//방법1
let aget = 5;
// 0 <= age < 8 사용 불가
if (age >= 0 && age < 8) {
  console.log("유아");
} else if (age >= 8 && age < 14) {
  console.log("초등학생");
} else if (age >= 14 && age < 17) {
  console.log("중학생");
} else if (age >= 17 && age < 20) {
  console.log("고등학생");
} else if (age >= 20) {
  console.log("성인");
}
/*
//아이디와 패스워드가 맞는지
let userId = "user01";
let userPw = "1234qwer";

function loginUser() {
  //   let inputId = prompt("아이디를 입력해주세요.");
  //   let inputPw = prompt("비밀번호를 입력해주세요.");

  if (userId === inputId) {
    if (userPw == inputPw) {
      alert("로그인 성공");
    } else {
      alert("비밀번호가 틀렸습니다.");
    }
  } else if (inputId === "") {
    alert("아이디를 입력하지 않았습니다.");
  } else {
    alert("아이디가 틀렸습니다.");
  }
}

loginUser();
*/
// 2. switch
let a = 7;
switch (a) {
  case 3:
    console.log("a가 3이군요");
    break; //없으면 빠져나가지 못함 , 다음케이스까지 나옴
  case 4:
    console.log("a가 4군요");
    break;
  case 5:
    console.log("a가 5군요");
    break;
  default:
    console.log("a가 무슨 값인지 모르겠습니다");
    break; //default 는 안써도 됨
}

//switch  성적 산출
//조건 0에서 100이외의 수는 안들어온다고 가정
let scoreSwitch = 80;
console.log(parseInt(scoreSwitch / 10)); //정수형, 소수점 버림
switch (parseInt(scoreSwitch / 10)) {
  case 10:
  case 9:
    console.log("A");
    break;
  case 8:
    console.log("B");
    break;
  case 7:
    console.log("C");
    break;
  case 6:
    console.log("D");
    break;
  default:
    console.log("F");
    break;
}

//3.삼항 연산자 - if else 한줄로 작성 가능

let num = 5;
if (num % 2 === 1) {
  console.log("홀수");
} else {
  console.log("짝수");
}

num % 2 === 1 ? console.log("홀수") : console.log("짝수");

//실습- 지금이 오전인지 오후인지 출력하기

let now = new Date().getHours();
now < 12 ? "오전" : "오후";

now < 12 ? console.log("오전 입니다.") : console.log("오후 입니다.");
//정답

console.log(now < 12 ? "오전" : "오후");

let time = now < 12 ? "오전" : "오후";
