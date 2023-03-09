console.log("연결!");

// 1. 함수 선언
helloworld1();
function helloworld1() {
  console.log("helloword1");
}
helloworld1();

function helloworld2() {
  return "helloworld2";
}
/**
helloworld2(); //이름이 안찍힘: return은 반환

function add(num1, num2) {
  console.log("안뇽");
  return num1 + num2;
  console.log("안뇽"); //return 후에는 실행 안됨
}

add(5, 5);
console.log(helloworld2()); //return 출력위해


function add(num1, num2) {
  return num1 + num2;
}

function add(num1, num2) {
  console.log(num1 + num2);
}

let result = add(5, 5);
let result2 = add2(5, 5);

console.log(result, result2);  //return해줘야 값 저장됨

 */

//2. 함수 표현식
/*helloworld3();  */ // 안됨
let helloworld3 = function () {
  console.log("helloworld3");
};

helloworld3(); //됨

//3.화살표 함수
/* helloworld4(); */ // 안됨
let helloworld4 = () => {
  console.log("helloworld4");
};
helloworld4();

//매개 변수 있는 Version
function sayHello1(text) {
  return text;
}

console.log(sayHello1("a blue dog"));

function sayHello2(text, name) {
  return `${text} ${name}`;
}

console.log(sayHello2("a cream dog", "bogdoll"));

//화살표 함수
let printAny = (text) => {
  return text;
};
console.log(printAny("anything"));
//함수 표현식
let printAny2 = function (text) {
  return text;
};
console.log(printAny2("anything2"));

//실습1

let multifly1 = (num1, num2) => {
  return num1 * num2;
};

let multifly2 = function (num1, num2) {
  return num1 * num2;
};

function multifly3(num1, num2) {
  return num1 * num2;
}

console.log(multifly3(3, 5));
console.log(multifly2(3, 5));
console.log(multifly3(3, 5));

//실습2

let square = (num1) => {
  return num1 ** 2;
};

console.log(square(4)); //16
console.log(square(11)); //121
console.log(square(5)); //25

//정답
//multifly
function multiflyt(a, b) {
  return a * b;
}
console.log(multiflyt(6, 4));
//square
let squaret = function (a) {
  console.log(a ** 2);
};

let squaret2 = (a) => {
  console.log(a ** 2);
};

squaret2(5);
