function call(name) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(name);
      resolve(name); // then(name)
    }, 1000);
  });
}

function back() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("back");
      resolve("back"); // then('back')
    }, 1000);
  });
}

function hell() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("callback hell");
    }, 1000);
  });
}

// call -> back -> hell 순서로 실행

// async function exec() {
//   call("kim");
//   const name = await call("kim");
//   console.log(`${name} 반가워`);
//   back();
//   const txt = await back();
//   console.log(`${txt}를 실행했구나"`);
//   hell();
//   const message = await hell();
//   console.log(`여기는 ${message}`);
// }
// exec();

//정답 코드

async function exec() {
  const name = await call("kim"); //실행 + 결괏값  , 동시에 실행됨
  console.log(`${name} 반가워`);
  const txt = await back();
  console.log(`${txt}를 실행했구나"`);
  const message = await hell();
  console.log(`여기는 ${message}`);
}
exec();
