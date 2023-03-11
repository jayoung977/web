let n = 0;
let sum = 0;
while (n <= 99) {
  if (n % 2 == 0 || n % 3 == 0) {
    sum += n;
  }
  n++; // 나중 증가
}

console.log(sum);
