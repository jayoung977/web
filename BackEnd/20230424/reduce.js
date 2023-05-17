// reduce(callback)란?
// reduce 초기값 설정 가능 그러나 보통 안함, 그러면 첫 요소가 초기값됨
// 배열의 각요소에 주어진 리듀서 함수를 실행하고, 하나의 결과값을 반환
const numbers = [1, 2, 3, 4, 5];

//1 + 2 + 3 + 4 + 5
const sum = numbers.reduce((acc, currentValue) => {
  return acc + currentValue;
});

console.log(sum); //15
//acc: 누적합  reduce((누적합, 현재값,인덱스)=> {})
const sum2 = numbers.reduce((acc, currentValue, idx) => {
  console.log(`======${idx}번째 index=====`);
  console.log(`acc : ${acc}`);
  console.log(`currentValue : ${currentValue}`);
  return acc + currentValue;
});
// ======1번째 index=====
// acc : 1
// currentValue : 2
// ======2번째 index=====
// acc : 3
// currentValue : 3
// ======3번째 index=====
// acc : 6
// currentValue : 4
// ======4번째 index=====
// acc : 10
// currentValue : 5
console.log(sum); //15
