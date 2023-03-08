console.log("연결");
/**
 *
 * 산술 연산자
 * +
 * -
 * /
 * *
 */

let a = 5;
let b = 2;
console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a * b);
console.log(a % b);

/*
 *
 * 논리 연산자
 * || -or
 * 확률이 높은 걸 먼저 배치
 * &&  -and
 * ! - no
 * t
 * *
 *
 * ===ㄴ 타입까지 같은지 확인
 *
 */

//비교 연산자
//동등한지 비교 (==,===)
// == 값만 비교
console.log(1 == 2);
console.log(1 == 2);
console.log(1 != 2);
console.log(1 != 1);
console.log("1" == 1);
console.log("1" != 1);

console.log("--------------------------");
// ===: 타입과 값 모두 비교  권장!
console.log(1 === 1);
console.log(1 === 2);
console.log(1 !== 2);
console.log(1 !== 1);
console.log("1" === 1);
console.log("1" !== 1);

console.log("--------------------------");

//크기 비교
//> < <= >=
console.log(2 > 1);
console.log(2 >= 2);
console.log(2 < 1);
console.log(2 <= 2);

console.log("--------------------------");
//논리 연산자
console.log(!true); //false
console.log(!false);
console.log(!!true);
console.log(!!false);

console.log(true && true); //true
console.log(true && false); //false
console.log(false && false); //false

console.log(false || false); //false
console.log(false || true); //true
console.log(true || true); //true

console.log(!(2 > 1)); //false
console.log(2 > 1 && -2 < 1); //true

//여러개 이어서 쓰기 가능
console.log((2 > 1 && -2 < 1) || 5 > 2); //true

console.log("--------------------------");
// 동등연산자 2대(관대한 연산자) //true -> 그래서 쓰지 않는게 좋음
console.log(1 == "1");
console.log("0" == false);
console.log("" == 0);
console.log(null == undefined);
