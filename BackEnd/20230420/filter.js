//filter()
//js 배열 내장 함수
//주어진 함수의 테스트를 통과하는 모든 요소를 모아서
//true면 요소 유지, false면 버림 => "새로운 배열"을 반환

const animals = ["dog", "cat", "rabbit"];
//콜백함수를 매개변수로 받음
const newAnimals = animals.filter((animal) => {
  return animal.length > 3;
});

// console.log(newAnimals); //[ 'rabbit' ]

const newAnimals2 = animals.filter((animal) => {
  return animal.includes("a");
});
// console.log(newAnimals2); //[ 'cat', 'rabbit' ]

//Quize1
const nums = [1, 2, 3, 4, 5];
const words = ["dog", "cat", "rabbit", "apple", "wow"];
// 1. map()를 이용해서 dobbleNums 배열에 [2, 4, 6, 8, 10]이 반환되도록 코드 작성
// const dobbleNums = nums
//   .map((num, id, arr) => {
//     if (num % 2 === 0) {
//       return num;
//     }
//     //   return id % 2 === 0;
//   })
//   .filter((num) => {
//     return num !== undefined;
//   });
// console.log(dobbleNums);
//정답1-1
// const dobbleNums = nums.map((n) => {
//   return n * 2;
// });
//정답1-2
const dobbleNums = nums.map((n) => n * 2);
// console.log(dobbleNums);
//map() 파라미터값 다 안써도 됨

// 2. filter() 이용해서 글자에 t 포함 필터링하는 newWords 배열 작성
//정답2-1
// const newWords = words.filter((word) => {
//   return word.includes("t");
// });
//정답2-2
const newWords = words.filter((word) => word.includes("t"));
// console.log(newWords);

////////////////////////////////////////////////////////////
//Quize2
const tripleNums = nums.map((n) => n * 3);
console.log(tripleNums); // [3, 6, 9, 12, 15]
console.log(tripleNums.includes(3)); //3원소 있나?
console.log(tripleNums.includes(7)); //7원소 있나?
console.log(tripleNums.indexOf(9)); //9원소의 인덱스 위치는? => 2
console.log(tripleNums.indexOf(7)); //9원소의 인덱스 위치는? 없음=> -1

const aaa = ["a", "b", "c"];
const bbb = ["d", "e", "f"];

//concat(): 배열 합치기
console.log(aaa.concat(bbb)); //[ 'a', 'b', 'c', 'd', 'e', 'f' ]

const arr1 = [
  { name: "a", id: 1 },
  { name: "b", id: 2 },
  { name: "c", id: 3 },
];
const arr2 = [
  { name: "d", id: 4 },
  { name: "e", id: 5 },
  { name: "f", id: 6 },
];

const arr3 = arr1.concat(arr2);
console.log(arr3);
// [
//     { name: 'a', id: 1 },
//     { name: 'b', id: 2 },
//     { name: 'c', id: 3 },
//     { name: 'd', id: 4 },
//     { name: 'e', id: 5 },
//     { name: 'f', id: 6 }
//   ]
