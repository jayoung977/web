let btn1 = document.querySelector(".btn--black");
let btn2 = document.querySelector(".btn--green");
let btn3 = document.querySelector(".btn--blue");
let btn4 = document.querySelector(".btn--red");
console.log(btn1, btn2, btn3, btn4);

// btn1.addEventListener('동작이름',function(){})
// btn1.addEventListener('동작이름',() => {})

btn1.addEventListener("click", function () {
  alert("버튼 1을 클릭하셨네요!");
});

btn1.addEventListener("mouseover", function () {
  this.style.backgroundColor = "aqua"; //this : 자기자신 의미, 빠졌을 떄 돌아가지 않음
});

let container = document.getElementById("container");
console.log(container);

btn2.addEventListener("click", () => {
  let div = document.createElement("div");
  div.style.backgroundColor = "pink";
  div.innerHTML = "hi";
  //   div.innerText = "hi";
  container.append(div);
});

btn3.addEventListener("click", changrColor); //함수 옆에 괄호 쓰면 안됨 , 쓰면 직접호출이됨

//함수 선언문이라서 호이스팅됨
function changrColor() {
  //div 색변경
  let divs = document.querySelectorAll("#container div");
  for (let div of divs) {
    div.style.backgroundColor = "skyblue";
  }
  //맨 마지막div만 색변경
  divs[divs.length - 1].style.backgroundColor = "yellow";
}

btn4.addEventListener("click", changeBtnColor);
function changeBtnColor() {
  btn4.style.backgroundColor = "yellow";
  btn4.style.color = "#000";
} //btn4만 가능, this 사용하면 재사용 가능

// btn4.addEventListener("click", chaneBtnColor);
// function chaneBtnColor() {
//     this.style.backgroundColor = "yellow";
//     this.style.color = "#000";
// }

console.log(window); //scrollX,Y
window.addEventListener("scroll", function (event) {
  //event == e
  console.log(event); //scroll
  console.log(scrollY);
  //특정위치에서 보이도록 scrollY 700
  let pos = this.document.querySelector(".pos");
  if (this.scrollY > 700) {
    pos.style.opacity = "1";
  }
});

const btn = this.document.querySelector("button");
const input = this.document.querySelector("input");
// console.log(btn, input); 테스트만 하고 지우기
btn.addEventListener("click", function (event) {
  console.log(event);
});

//keydouwn 키보드 눌렀을 때

input.addEventListener("keydown", function (e) {
  console.log(e.code);
  console.log(e.key);
  //   console.log(e.keyCode); 안쓰임
  if (e.code === "ArrowUp") {
    console.log("위쪽 방향키를 누르셨군요!");
  } else if (e.code === "ArrowDown") {
    console.log("아래쪽 방향키를 누르셨군요!");
  } else if (e.code === "ArrowLeft") {
    console.log("왼쪽 방향키를 누르셨군요!");
  } else if (e.code === "ArrowRight") {
    console.log("오른쪽 방향키를 누르셨군요!");
  } else {
    console.log("others");
  }
});
