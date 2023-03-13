console.log("connect");
/**
 * 요소 선택
 * - querySelector
 * - querySelectorAll
 * - getElementById
 * - getElementsByClassName
 *
 */

console.log(document);
console.log(document.head);
console.log(document.body); //null 값이 나옴 이유는 script를 head 안에 넣어줘서 ->1. body 맨 마지막에 link , 2.defer 키워드 추가
console.log(document.title);
console.log(document.URL); //http://127.0.0.1:5500/  127.0.0자기 자신 5500: 라이브 서버

//1. getElementById

console.log(document.getElementById("green"));
console.log(document.getElementById("red")); //개발자 도구에 가지고 와짐

//2.getElementsByClassName
console.log(document.getElementsByClassName("pink"));
console.log(document.getElementsByClassName("others")); //배열 형태로 가지고 옴
console.log(document.getElementsByClassName("others")[0]); //첫번째 요소 가지고옴

//3.getElementsByTagName
console.log(document.getElementsByTagName("div")); //배열 형태로 가지고 옴

//4.getElementsByName
console.log(document.getElementsByName("id")); //배열 형태로 Name 속성값을 가지고 옴
//NodeList(2) [input, input]

//5.querySelector 더 나중 나옴
console.log(document.querySelector(".pink")); //pink 선택자 가지고 옴 , 4개 중에 맨 처음 나오는 1을 가지고옴
console.log(document.querySelector(".others"));
console.log(document.querySelector("#green"));
console.log(document.querySelector("div"));
console.log(document.querySelector("[name='id']"));

//6.
console.log(document.querySelectorAll(".pink"));
console.log(document.querySelectorAll("input"));

console.log(document.querySelectorAll(".pink")[0]);
console.log(document.querySelectorAll(".pink")[1]);
console.log(document.querySelectorAll(".pink")[2]);
console.log(document.querySelectorAll(".pink")[3]);

// for of 문 출력 가능/ map ,filter, find 등 못함
let pink = document.querySelectorAll(".pink");
console.log(pink);
// for of
for (let i of pink) {
  console.log(i);
}
// forEach
pink.forEach((i) => console.log(i));
