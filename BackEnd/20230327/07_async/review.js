// console.log(1);
// setTimeout(() => {
//   console.log(2);
// }, 2000);
// console.log(3);

// setTimeout(() => {
//   document.querySelector("body").style.backgroundColor = "red";
// }, 2000);

// setTimeout(() => {
//   document.querySelector("h1").style.color = "blue";
// }, 2000);

// function changeColor (){
//     document.querySelector('h1').style.color = 'blue';
// }
// setTimeout(changeColor,2000)

// function goMart() {
//     console.log("마트에 가서 어떤 음료를 살지 고민! ");
// }
// function pickDrink(){
//     setTimeout(()=>{
//         console.log("고민 끝");
//         product = "제로콜라";
//         price = 2000;
//     },1000)

// function pay(product, price){
//     console.log(`상품명: ${product}, 가격:${price}`);
// }
// }

// let product;
// let price;
// goMart();
// pickDrink();
// pay(product, price);

// function goMart() {
//   console.log("마트에 가서 어떤 음료를 살지 고민! ");
// }
// function pickDrink(cb) { //매개변수로 콜백함수가 들어간다.
//   setTimeout(() => {
//     console.log("고민 끝");
//     product = "제로콜라";
//     price = 2000;
//     cb(product, price); //콜백함수의 인자를 넣어준다. 여기서 콜백함수는 정의되지 않았다.
//   }, 1000);
// }
// function pay(product, price) {
//   console.log(`상품명: ${product}, 가격:${price}`);
// }  // 콜백함수 정의

// let product;
// let price;
// goMart();
// pickDrink(pay); // 매개변수로 콜백함수를 넣어준다.

// ######promise

// function goMart() {
//   console.log("마트에 가서 어떤 음료를 살지 고민! ");
// }
// function pickDrink() {
//   return new Promise((resolve, reject) => {
//     //Promise 생성자는 주로 프로미스를 지원하지 않는 함수를 감쌀 때 사용
//     setTimeout(() => {
//       console.log("고민 끝");
//       product = "제로콜라";
//       price = 2000;
//       resolve();
//     }, 1000);
//   });
// }
// function pay() { // resolve() === pay()
//   console.log(`상품명: ${product}, 가격:${price}`);
// }

// let product;
// let price;
// goMart();
// pickDrink().then(pay);

// ######promise chaining

// function add(n1, n2) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let result = n1 + n2;
//       resolve(result);
//     }, 1000);
//   });
// }

// function mul(n) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let result = n * 2;
//       resolve(result);
//     }, 1000);
//   });
// }

// function sub(n) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let result = n - 1;
//       resolve(result);
//     }, 1000);
//   });
// }

// add(4, 3)
//   .then((result) => {
//     console.log(result);
//     return mul(result); //return 해야 다음 함수 매개변수로 넘어감
//   })
//   .then((result) => {
//     console.log(result);
//     return sub(result);
//   })
//   .then((result) => {
//     console.log(result);
//   });

// function colorChange(color) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       document.querySelector("body").style.backgroundColor = color;
//       resolve();
//     }, 500);
//   });
// }
// colorChange("red")
//   .then(() => {
//     return colorChange("yellow");
//   })
//   .then(() => {
//     return colorChange("orange");
//   })
//   .then(() => {
//     return colorChange("green");
//   })
//   .then(() => {
//     return colorChange("blue");
//   });
