function changeBgcolor(newColor) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.querySelector("body").style.backgroundColor = newColor;
      resolve();
    }, 1000);
  });
}
const colors = ["red", "orange", "yellow", "green", "blue"];
async function exec() {
  for (const color of colors) {
    await changeBgcolor(color);
  }
}
exec();

//정답 코드
// async function exec() {
//   await changeBgcolor("red");
//   await changeBgcolor("orange");
//   await changeBgcolor("yellow");
//   await changeBgcolor("green");
//   await changeBgcolor("blue");
// }
// exec();
