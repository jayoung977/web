// async / await
// promise 기반 코드를 더 가독성 있게 하기 위해 등장

function fetchFruits() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const fruits = ["🍎", "🍐", "🍋"];
      resolve(fruits);
      reject(new Error("unknowm error"));
    }, 1000);
  });
}

//promise then() 사용 시
fetchFruits()
  .then((fruits) => {
    console.log(fruits);
  })
  .catch((error) => {
    console.log(error);
  });

//async await 사용 시
async function printItems() {
  try {
    const fruits = await fetchFruits();
    console.log(fruits);
  } catch (error) {
    console.log(error);
  }
}
printItems();

//장보기 코드를 async await 이용해서 변경하기
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
  goMart();
  await pickDrink();
  pay();
}
let product;
let price;
exec();
