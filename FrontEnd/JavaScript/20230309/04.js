console.log("connected");
console.log("-----1------");
// while 문
let n2 = 1;
while (n2 <= 5) {
  console.log(n2);
  n2++; // 나중 증가
}
console.log("-----2------");
n2 = 10;
while (n2 >= 4) {
  console.log(n2);
  n2--; // 나중 증가
}

console.log("-----3------");
n2 = 10;
while (n2 >= 1) {
  if (n2 % 2 === 0) {
    console.log(n2);
  }
  n2--;
}
n2 = 1;
//무한 루프
while (true) {
  console.log("안녕");
  if (n2 === 10) {
    break;
  }
  n2++;
}

//화면에 나옴 true, false
// n2 = 0;
// while (confirm("계속 진행?")) {
//   n2++;
//   alert(`${n2}번쨰 alert창`); //취소 되면 false 되서 반복문 나옴
// }

// continue
let sum3 = 0;
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  sum3 += i;
}
console.log(sum3);
