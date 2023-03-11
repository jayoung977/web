//push, pop, unshift, shift
//indexOf, join, reverse

let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["quakka", "rabbit", "puppy", "haster"];
arr1[5] = 6;
console.log(arr1);
arr1[8] = 6; //중간에 빈값이 생김 , 끝자리를 알아야하는 불편함이 있음
console.log(arr1);
console.log("---push & pop--");
arr1 = [1, 2, 3, 4, 5];
arr1.push(6);
arr1.push(10);
console.log(arr1);
console.log(arr1.pop());
console.log(arr1);

console.log("---unshift & shift---");
arr2.unshift("cat");
console.log(arr2);
console.log(arr2.shift());
console.log(arr2);

console.log("---includes---");
// 배열 .includes(요소) 요소가 있는지 없는지 검사
//true 나 false를 반환함
console.log(arr2.includes("quakka"));

console.log("---indexOf---");
console.log(arr2.indexOf("quakka")); //인덱스 반환 , 타입까지 맞아야 반환

console.log("--reverse----");
console.log(arr1.reverse());
console.log(arr1); // 기존의 배열 변경 시킴

console.log("--join 배열을 문자열로--");
str1 = arr1.join("");
console.log(str1);

console.log("--배열에서의 for--");
//배열에서의 for
// 기본 for 문
// for of 문
//forEach 함수 > 매개변수로 익명 함수가 들어감

let arr3 = [1, 3, 5, 4, 6];
let alphabets = ["a", "b", "c", "d", "e"];

for (let i = 0; i < arr3.length; i++) {
  console.log(arr3[i]);
}

for (let number of arr3) {
  console.log(number);
}

arr3.forEach(function (data, index, arr) {
  console.log(data, index, arr);
});

arr3.forEach((data, index) => {
  console.log(data, index);
});

arr3.forEach(function (data) {
  console.log(data);
});

console.log("--filter 새로운 배열 반환 --");
//filter 매개변수 이름은 아무거나
arr3 = arr3.filter(function (num) {
  return num > 3;
});
console.log(arr3);

let six = arr2.filter(function (el) {
  return el.length >= 6;
});

console.log(six);

//map & find

//map: 배열 내의 모든 원소에 대해서 연산한 결과를 모아서 새로운 배열 반환
// [1,2,3]
console.log("--map: 연산한 결과를 모아서 새로운 배열 반환 --");
let arr4 = [1, 2, 3].map(function (el) {
  return el * 3;
});
console.log(arr4);

arr4 = [1, 2, 3, 4, 5];

// arr4 = arr4.map((el) => {
//   return el * 10;
// });

// console.log(arr4);

arr4 = arr4.map((el) => el * 10); //!!중괄호와 리턴 안써도 됨
console.log(arr4);

// arr4 = [10, 20, 30, 40, 50]
console.log("--find: 특정 조건을 만족하는 첫번째 요소를 반환 --");

let findResult = arr4.find((num) => num >= 30);
console.log(findResult);

//실습1
console.log("--실습1 --");
// for 빈배열 -> 1~100
let array = [];
for (let i = 1; i < 101; i++) {
  array.push(i);
}

//1 for
let sum = 0;
console.log(array);

for (let i = 1; i <= array.length; i++) {
  sum += i;
}
console.log(sum);

//2 for of
sum = 0;
for (num of array) {
  sum += num;
}
console.log(sum);

//3 forEach
sum = 0;
array.forEach((num) => (sum += num));
console.log(sum);

//실습2
console.log("--실습2--");
let fruits1 = [
  "사과",
  "딸기",
  "파인애플",
  "수박",
  "참외",
  "오렌지",
  "자두",
  "망고",
];
let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];

//filter 이용하는 방법-1
let same = fruits1.filter((fruit) => fruits2.includes(fruit) == true);
let diff = fruits1.filter((fruit) => fruits2.includes(fruit) == false);

// let same = fruits1.filter((fruit) => fruits2.includes(fruit));
// let diff = fruits1.filter((fruit) => !fruits2.includes(fruit));

console.log(same);
console.log(diff);

same = [];
diff = [];
//for문을 이용하는 방법-2
for (let i = 0; i < fruits1.length; i++) {
  if (fruits2.includes(fruits1[i])) {
    same.push(fruits1[i]);
  } else {
    diff.push(fruits1[i]);
  }
}

console.log(same);
console.log(diff);
