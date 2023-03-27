console.log("connected");
// 1.for문
for (let i = 0; i < 10; i++) {
  console.log("안녕", i);
}
//+2
for (let i = 0; i < 10; i += 2) {
  console.log(`안녕 ${i}`);
}
//+3
for (let i = 0; i > 10; i = i + 3) {
  console.log(i);
}

//1 ~5 출력
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

for (let i = 1; i < 6; i++) {
  console.log(i);
}

for (let i = 0; i < 6; i++) {
  console.log(i + 1);
}

// 5~1 출력
for (let i = 5; i > 0; i--) {
  console.log(i);
}

// 1~n까지의 합
let n = 11;
let sum = 0;
for (n; n > 0; n--) {
  sum += n;
}
console.log(sum);

// 정답
let nt = 11;
let sumt = 0;
for (let i = 1; i < nt + 1; i++) {
  sumt += i; //sum = sum +1;
}
console.log(sumt);

//배열과 for문

let fruits = ["사과", "배", "포도", "망고"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

let numsArr = [90, 50, 30, 20, 11];
let numsSum = 0;

for (let i = 0; i < numsArr.length; i++) {
  numsSum += numsArr[i];
}
console.log(numsSum);

//1~20 짝수일 때의 합 구하기
let sum2 = 0;
for (let i = 0; i < 21; i++) {
  if (i % 2 === 0) {
    sum2 += i;
  }
}
console.log(sum2);

//실습 1 - 구구단
for (let i = 1; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

//정답
for (let i = 2; i < 10; i++) {
  console.log(`-- ${i}단 입니다 --`);
  for (let j = 1; j < 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

//실습 2 - 13의 배수이면서 홀수인 숫자
for (let i = 1; i < 10001; i++) {
  if (i % 13 === 0 && i % 2 === 1) {
    console.log(i);
  }
}
// 정답
// let num3 = Number(prompt('숫자를 입력해주세요.'))
for (let i = 1; i < 10001; i++) {
  if (i % 13 === 0 && i % 2 === 1) {
    console.log(i);
  } // 더 false가 나올 확률이 높은걸 먼저 조건으로 써주는게 좋음
}
