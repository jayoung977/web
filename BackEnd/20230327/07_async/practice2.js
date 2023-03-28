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
