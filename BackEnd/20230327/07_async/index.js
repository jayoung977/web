// serTimeout()
// serTimeout(code, delay);
// delay 동안 기다리다가 code 함수 실행
// 2초 : 2000 , ms 단위

// console.log(1);
// setTimeout(function () {
//   console.log(2);
// }, 2000);

// console.log(3);

// //1초 후에 body 태그 배경색상을 빨간색으로 바꾸기
// let body = document.querySelector("body");
// setTimeout(function () {
//   body.style.backgroundColor = "red";
// }, 1000);

// //선생님 코드
// setTimeout(function () {
//   //1. body 태그 선택
//   //2. 배경 색상 변경
//   document.querySelector("body").style.backgroundColor = "red";
// }, 1000);

// //1초 후에 h1 태그의 글자색을 파란색으로
// // setTimeout 밖에서 함수 정의
// function changeColor() {
//   document.querySelector("h1").style.color = "blue";
// }
// setTimeout(changeColor, 1000);

//주석 단축키 /* */ ,//

// #############################################
// 비동기 처리

// function goMart() {
//   console.log("마트에 가서 어떤 음료 살지 고민!");
// }
// function pickDrink() {
//   setTimeout(function () {
//     console.log("고민 끝");
//     product = "제로 콜라";
//     price = 2000;
//   }, 1000);
// }
// function pay(product, price) {
//   console.log(`상품명: ${product},가격:${price}`);
// }

// let product; //undefined
// let price; //undefined
// goMart();
// pickDrink(); //3초 지연됨
// pay(product, price); //goMart();->pay()로 바로 넘어감 ->pickDrink() 값 할당됨

// // [출력 결과]
// // 마트에 가서 어떤 음료 살지 고민!
// // 상품명: undefined,가격:undefined
// // 고민 끝
// // 결과가 끝나기 전에 pay()실행됨

// #############################################
// 1-1.콜백함수로 해결
// 다른 함수의 실행이 끝난 뒤에 실행되는 함수
// 어떤 함수의 파라미터 (매개변수, 인자)로 쓰임

// function goMart() {
//   console.log("마트에 가서 어떤 음료 살지 고민!");
// }
// function pickDrink(callback) {
//   //callback: 매개변수가 된 콜백 함수
//   setTimeout(function () {
//     console.log("고민 끝");
//     product = "제로 콜라";
//     price = 2000;
//     callback(product, price); //매개변수로 넘긴 콜백함수를 실행
//   }, 1000);
// }

// let product;
// let price;
// goMart();
// pickDrink(function (product, price) {
//   console.log(`상품명: ${product},가격:${price}`);
// });  // 프라이스 안에 함수가 콜백함수

// #############################################
//1-1. 콜백 지옥
//콜백함수가 반복되어 코드의 들여쓰기가 너무 깊어짐
//=> 가독성/ 유지보수성 하락

//1초마다 배경색이 변경되는 코드
// 뻘-> 주 -> 노-> 초-> 파
setTimeout(function () {
  document.querySelector("body").style.backgroundColor = "red";
  setTimeout(function () {
    document.querySelector("body").style.backgroundColor = "orange";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "yellow";
      setTimeout(function () {
        document.querySelector("body").style.backgroundColor = "green";
        setTimeout(function () {
          document.querySelector("body").style.backgroundColor = "blue";
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
