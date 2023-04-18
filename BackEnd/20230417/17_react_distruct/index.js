//1. 배열 구조 분해 할당
// 1-1. 배열 구조 분해 할당
const lists = ["apple", "grape"];
console.log(lists[0]);
[item1, item2, item3 = "peach"] = lists;
console.log("item1:", item1);
console.log("item2:", item2);
console.log("item3:", item3);

const arr = [1, 2, 3, 4, 5];
console.log();

// 1-2.변수 값을 서로 바꿀 수 있음
let x = 1,
  y = 2;
console.log(x, y);
[x, y] = [y, x];
console.log(x, y);

//2. 객체 구조분해 할당

//2-1. : 를 통해 새키로 변환 가능
//이전)
const obj = {
  key1: "one",
  key2: "two",
};
console.log(obj.key1);
//구조분해 할당 적용)
// const { key1, key2 } = obj;
// console.log("key1: ", key1);
// console.log("key2: ", key2);

//만약 key1이 중복되서 못쓴다면 새로 할당
// const { key1: newKey, key2 } = obj;
// console.log("newKey: ", newKey);
// console.log("key2: ", key2);

// 새 키
const { key1: newKey, key2, key3 = "three" } = obj;
console.log("newKey: ", newKey);
console.log("key2: ", key2);
console.log("key3: ", key3);

//객체 넣을 때 좌우측 동일해야함
// const {a,c} = {a:10, b:10}  c 없어서 undefined출력됨
const { a, b } = { a: 10, b: 10 };
console.log("a", a);
console.log("b", b);

//spread 연산자 ...a1- 배열을 쉽게 가져옴
//함수 호출에 점(...)울 사용하는 경우 spread연산자
const a1 = [1, 2, 3, 4, 5];
console.log(...a1);

//rest parameter : 남은 인수들을 묶어서 배열로 반환
//함수 매개변수에 점(...)울 사용하는 경우 rest 매개변수
//실무에서 자주 쓰이지는 않으나 가끔 사용됨
//값을 묶어서 사용할 때 사용됨
const data = { c: 30, d: 40, e: 50, f: 60 };
const { c, d, ...rest } = data;
// const { c, d } = data;
// const { c, d, ...abc } = data; //다른 이름도 가능하지만 rest로 약속
console.log("c: ", c);
console.log("d: ", d);
console.log("rest: ", rest); //나머지 object 가져옴

//배열 분해 할당
const newArr = ["one", "two", "three"];
// const [one, two, three] = newArr; //긴 문자열 아닐경우 변수= 값 통일
const [one, two, three, four = "four"] = newArr;
console.log(one, two, three, four);

//swap
let newA = 10,
  newB = 20;
console.log(newA, newB);
[newA, newB] = [newB, newA];
console.log(newA, newB);

//객체 구조 분해 할당
const newObj = {
  one: "one",
  two: "two",
  three: "three",
};
//이전)
console.log(newObj.one);
console.log(newObj.two);
console.log(newObj.three);
//구조분해 할당 적용)
//만약 중복되는 변수을 쓸 경우 :로 키 변경
const { one: newOne, two: newTwo, three: newThree } = newObj;
console.log(newOne);
console.log(newTwo);
console.log(newThree);

//spread 연산자 !중요!
//-> 객체의 값을 펼치는 연산자
//1. 두개의 배열을 간단하게 합칠 수 있다.
const t1 = [1, 2, 3];
const t2 = [5, 6];
const t3 = [...t1, ...t2]; //두개의 배열을 간단하게 합칠 수 있다.
console.log(t3);

//2.새로운 dbj에 넣기
const cookie = {
  base: "cookie",
  madeIn: "korea",
};

const chocoshipCookie = {
  ...cookie,
  toping: "chocochip",
};

console.log("chocoshipCookie: ", chocoshipCookie);

//배열 객체할당
//1.배열 합치기
const noTopingCookies = ["촉촉한쿠키", " 안촉촉한 쿠키"];
const topingCookies = ["바나나쿠키", "블루베리쿠키", "딸기쿠키"];
const allCookies = [...noTopingCookies, ...topingCookies, "초코침쿠키"]; //새로운 값 추가 가능
console.log(allCookies);
