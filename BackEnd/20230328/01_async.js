// async  / await
// 비동기 처리 패턴 중 가장 최신 문법
// promise 기반 코드를 더 가독성 있게 하기 위해 등장

// 기본 구조
// - 함수 앞에 async 키워드 붙이기
// - 비동기 처리 메서드 앞에 await 키워드 붙임 (해당 작업 기다림)
// async와 await는 세트!! 같이 써야함!!
// async function 함수명() {
//   await 비동기처리_메서드명();
// }

//1초 뒤에 과일 배열을 출력하는 코드
function fetchFruits() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const fruits = ["🍓", "🍐", "🍎"]; //과일 배열
      resolve(fruits);
      //   reject(new Error("알 수 없는 에러 발생!! 아이템을 가져올 수 없음")); //에러 임의로 발생시킴
    }, 1000);
  });
}

//1-1. promise then() 사용시
// fetchFruits().then((fruits) => {
//   console.log(fruits);
// });
//1-2. 에러 임의로 발생시킴
// fetchFruits()
//   .then((fruits) => {
//     console.log(fruits);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//2-1.async await 사용
async function printItems() {
  const fruits = await fetchFruits();
  console.log(fruits);
} //함수 정의
printItems(); //호출

//2-2.에러 발생시킴,  예외 처리 try catch 구문 사용

// - try 블록 코드가 실행
// - try 블록에서 에러가 없다면, catch 블록은 건너띔
// - try 블록에서 에러가 있다면, try 블록 중단 -> catch 블록 코드 실행

// 구조
// try {
//   //코드 실행 ing
//   //에러 발생기 catch 로 이동
// } catch (error) {
//   //에러 관리
// }

// async function printItems() {
//   try {
//     const fruits = await fetchFruits();
//     console.log(fruits);
//   } catch (error) {
//     console.log(error);
//   }
// } //함수 정의
// printItems(); //호출

//##########################장보기#################################
//장보기 코드를 saync/await 이용해서 변경하기
function goMart() {
  console.log("마트에 가서 어떤 음료를 살지 고민! ");
}
function pickDrink() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("고민 끝");
      product = "제로콜라";
      price = 2000;
      resolve();
    }, 1000);
  });
}
function pay() {
  // resolve() === pay()
  console.log(`상품명: ${product}, 가격: ${price}`);
}

async function exec() {
  goMart(); //1번 실행
  await pickDrink(); //2번 실행 - 기다림
  pay(); //2번 완료 후 3번 실행
  // 장점: 코드 순서가 병확함
}
let product;
let price;
exec();
