//자바스크립트 표준 내장 객체
// 1. Date()
let now = new Date();
console.log(now);
console.log(now.getFullYear(), "년");
console.log(now.getMonth() + 1, "월"); //0부터 시작해서 +1
console.log(now.getDate(), "일");
console.log(now.getHours(), "시");
console.log(now.getMinutes(), "분");
console.log(now.getSeconds(), "초");
console.log(now.getMilliseconds(), "ms");
console.log(now.getDay(), "요일 숫자로 "); //0: 일요일, 6:토요일

//Date 객체을 이용해 오늘의 요일을 얻고 오늘이 평일인지 주말인지 작성
console.log(now.getDay() !== 0 && now.getDay() !== 6 ? "평일" : "주말");
console.log(now.getDay() > 0 && now.getDay() < 6 ? "평일" : "주말");

//스위치문
switch (now.getDay()) {
  case 0: //일
  case 6: // 토
    console.log("주말");
    break;
  default:
    console.log("평일");
    break;
}
console.log();

//삼항 연산자
let day = now.getDay() === 0 || now.getDay() === 6 ? "주말" : "평일";
console.log(day);

// 2. Math()

console.log(Math.PI);
console.log(Math.E);
console.log(Math.SQRT2); //루트2

//메소드
console.log(Math.min(45, 2, 0, -5, 15));
console.log(Math.max(45, 2, 0, -5, 15));
console.log(Math.random()); //0<= x <1사이 랜덤 값
console.log(Math.round(5.1)); //반올림 정수
console.log(Math.floor(5.5)); //내림 정수
console.log(Math.ceil(5.22)); //올림 정수

//실습
console.log(Math.random() * 10); //0~9까지
console.log(Math.floor(Math.random() * 10)); // 소수점 버리기
//1~100
console.log(Math.random() * 100 + 1);
console.log(Math.floor(Math.random() * 100 + 1));

console.log("1" + 2 === 12);
