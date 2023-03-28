// 1. callback hell
// setTimeout(function () {
//   document.querySelector("body").style.backgroundColor = "red";
//   setTimeout(function () {
//     document.querySelector("body").style.backgroundColor = "orange";
//     setTimeout(function () {
//       document.querySelector("body").style.backgroundColor = "yellow";
//       setTimeout(function () {
//         document.querySelector("body").style.backgroundColor = "green";
//         setTimeout(function () {
//           document.querySelector("body").style.backgroundColor = "blue";
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

//2. promise chaining

function colorChange(newColor) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = newColor;
      resolve();
    }, 1000);
  });
}

colorChange("red")
  .then(() => {
    return colorChange("orange");
  })
  .then(() => {
    return colorChange("yellow");
  })
  .then(() => {
    return colorChange("green");
  })
  .then(() => {
    return colorChange("blue");
  });

// 정답 코드

// function changeBgcolor(newColor) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       document.querySelector("body").style.backgroundColor = newColor;
//     }, 1000);
//   });
// }

// changeBgcolor("red")
//   .then(() => {
//     return changeBgcolor("orange");
//   })
//   .then(() => {
//     return changeBgcolor("yellow");
//   })
//   .then(() => {
//     return changeBgcolor("green");
//   })
//   .then(() => {
//     return changeBgcolor("blue");
//   });
