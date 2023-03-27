//push, pop, unshift, shift
//indexOf, join, reverse

let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["quakka", "rabbit", "puppy", "haster"];
arr1[5] = 6;
console.log(arr1);
arr1[8] = 6; //중간에 빈값이 생김 , 끝자리를 알아야하는 불편함이 있음
console.log(arr1);
console.log("------".repeat(5));
arr1 = [1, 2, 3, 4, 5];
arr1.push(6);
arr1.push(10);
console.log(arr1);
console.log(arr1.pop());
console.log(arr1);
console.log("------".repeat(5));
arr2.unshift("cat");
console.log(arr2);
console.log(arr2.shift());
console.log(arr2);
console.log("------".repeat(5));
// 배열 .includes(요소) 요소가 있는지 없는지 검사
//true 나 false를 반환함
console.log(arr2.includes("quakka"));

console.log("------".repeat(5));
console.log(arr2.indexOf("quakka")); //인덱스 반환 , 타입까지 맞아야 반환

console.log("--reverse----".repeat(5));
console.log(arr1.reverse());
console.log(arr1); // 기존의 배열 변경 시킴

console.log("--join 배열을 문자열로----".repeat(5));
ㄴ;
