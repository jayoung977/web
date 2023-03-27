//2.promise(프로미스)
//: 비동기함수를 동기처리하기 위해 만든 객체
// 성공이랑 실패를 분리해서 반환함
// => 성공이든 실패든 무언가의 "최종 결과"
// resolved: 성공
// rejected: 실패
// 프로미스는 콜백함수 전달할 필요없이 그냥 호출하면 됨!

//1). 프로미스 생성하는 코드
//promise1 함수의 return값이 promise 객체
//-resolve(): 성공한 경우, 프로미스 사용시 then 메서드와 연결
//-reject(): 실패한 경우, 프로미스 사용시 catch 메서드와 연결
// function promise1(flag) {
//   //flag: true, false
//   return new Promise(function (resolve, reject) {
//     //resolve, reject로 작성 아니어도 되지만
//     if (flag) {
//       resolve(
//         `promise 상태는 fulfilled(성공)!! then으로 연결됩니다. 이 때의 flag는 ${flag} 입니다`
//       );
//     } else {
//       reject(
//         `promise 상태는 rejected(실패)!! catch로 연결됩니다. 이 때의 flag는 ${flag} 입니다`
//       );
//     }
//   });
// }

// //2).프로미스 사용(소비)하는 코드
// promise1(5 > 3) //true,false, 5 > 3
//   .then(function (result) {
//     console.log(result);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

//3). #index.js에서 "콜백함수"이용해서 동기처리 한 것을
//promise를 이용해서= 동기처리하기
// function goMart() {
//   console.log("마트에 가서 어떤 음료 살지 고민!");
// }
// function pickDrink() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log("고민 끝");
//       product = "제로 콜라";
//       price = 4000; //2000일 때 상품명, 가격 출력 그대로/ 4000원일 때는 금액부족 메세지 출력
//       //   resolve();
//       if (price <= 2000) {
//         resolve();
//       } else {
//         reject();
//       }
//     }, 2000);
//   });
// }
// //resolve할때 실행할 함수
// function pay() {
//   console.log(`상품명: ${product},가격:${price}`);
// }
// //reject할때 실행할 함수
// function nopay() {
//   console.log(`금액부족!`);
// }

// let product;
// let price;
// goMart();
// // pickDrink().then(pay); // 1.
// // pickDrink().then(function () {
// //   console.log(`상품명: ${product},가격:${price}`);
// // }); // 동일함, 함수를 then 안에 넣을 수 있음

// pickDrink()
//   .then(pay) //pickDrink 함수 안에서 resolve 실행시 then으로 연결
//   .catch(nopay); //pickDrink 함수 안에서 reject 실행 catch로 연결

//######################################################
//4)pomise 체이닝 (chaining)
//함수를 이용해 ( 4 + 3 ) * 2 -1 = 13 연산
// a. add(4, 3)
// b. mul(add(4, 3), 2)
// c. sub(mul(add(4, 3), 2), 1)
// add -> mul -> sub 순으로 연산 필요

//4-1 콜백 함수 사용
// function add(n1, n2, callback) {
//   setTimeout(function () {
//     let result = n1 + n2;
//     callback(result);
//   }, 1000);
// }
// function mul(n, callback) {
//   setTimeout(function () {
//     let result = n * 2;
//     callback(result);
//   }, 700);
// }
// function sub(n, callback) {
//   setTimeout(function () {
//     let result = n - 1;
//     callback(result);
//   }, 500);
// }

// add(4, 3, function (x) {
//   console.log("1: ", x); //x = 4+3 ;7
//   mul(x, function (y) {
//     console.log("2: ", y); // y = x*2 ;14
//     sub(y, function (z) {
//       console.log("3: ", z); //z = y-1 ;13
//     });
//   });
// });

//4-2 pomise 체이닝
//장점 1. then 메서드 연속 사용 가능 -> 순차적인 작업 가능 ; 콜백 지옥에서 탈출
//장점 2. 예외처리가 간편해짐 (에러처리 쉬움)
//-> 마지막에 catch구문에서 한번에 에러 처리 가능

// add -> mul -> sub 순

function add(n1, n2) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n1 + n2;
      resolve(result);
    }, 1000);
  });
}
function mul(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n * 2;
      resolve(result);
    }, 700);
  });
}
function sub(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n - 1;
      //   resolve(result);
      reject(new Error("의도적으로 에러를 일으켜봄!!"));
    }, 500);
  });
}

add(4, 3)
  .then(function (result) {
    //result = 4+3
    console.log("1: ", result);
    return mul(result);
  })
  .then(function (result) {
    console.log("2: ", result);
    return sub(result);
  })
  .then(function (result) {
    console.log("3: ", result);
  })
  .catch(function (error) {
    console.log("실패!");
    console.log(error);
  });
