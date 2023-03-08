/* 옵션 시프트 에이 

자료혈 
- 기본 
    - strinf
    - number
    - boolean
    - null
    - undefined
- 객체
    - array
    - object
    
  
    
*/

// 1. string
let myName = "길동";
let email = "gildong@naver.com";
let city = "'서울'";

console.log(myName);
console.log(email);
console.log(city);

// 문자와 변수를 동시에 출력

console.log("내 이름은", myName, "이고 이메일은", email, "입니다."); // 방법1
console.log("내 이름은" + myName + "이고 이메일은" + email + "입니다."); //방법2 + 는 띄어쓰기 안됨
// 템플릿 리터럴 달러 키 누르기, 가장 많이 쓰임
console.log(`내이름은 ${myName}이고 이메일은 ${email}입니다.`);
let gildong = console.log(`내이름은 ${myName}이고 이메일은 ${email}입니다.`);
console.log(gildong);

// 2. number, 산수 계산 가능
let number = 123;
let opacity = 0.7;
console.log(number);
console.log(opacity);

// NaN: not a number
console.log("apple" - 3);

// 3.boolean
let checked = true;
let unchecked = false;

console.log(checked);
console.log(unchecked);

// 4.undefined
let undef;
console.log(undef);

// 5.null
let empty = null;
console.log(empty);

// 6. array 배열
let fruits = ["orange", "pineapple", "grape", "apple"]; //array 만드는 방법1
let fruits2 = new Array("orange", "pineapple", "grape", "apple"); //array 만드는 방법2

console.log(fruits[0], fruits[1]);

let data = [1, "allie", false, null, undefined]; //다양한 자료형 포함
console.log(data[4]);

// 6-1: array: 2차원 배열
let korean = [
  ["가", "나", "다"],
  ["라", "마", "바"],
  ["사", "아", "자"],
];

console.log(korean[1][1]);

let letters = [
  ["사", "스", "자", "크"],
  ["진", "안", "리", "이"],
  ["가", "수", "림", "나"],
  ["아", "으", "차", "운"],
];

console.log(
  letters[3][0] + letters[1][3] + letters[0][1] + letters[0][3] + letters[2][2]
); //파이썬과 달리 -1 사용 불가

// 6-2: 3차원 배열
let nums = [
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  [
    [7, 8, 9],
    [10, 11, 12],
  ],
];
console.log(nums[1][0][1]);
console.log("");

//7.object 키값에 대한 값을 저장함

let cat = {
  name: "나비",
  age: 1,
  isCute: true,
  mew: function () {
    return "냐옹";
  }, //함수 가능
};

console.log(cat);
//점 표기 법
//오브젝트 이름. key이름
console.log(cat.name);
console.log(cat.age);
console.log(cat.mew()); //함수는 출력시 ()
// 대괄호 표기법
//오브젝트 이름['key이름']
console.log(cat["name"]); //키값 문자열, 출력

//work1

let jayoung = {
  name: "최자영",
  sex: "female",
  age: 27,
  personalColor: "springRight",
  mbti: "infj",
};

console.log(jayoung.name);
console.log(jayoung["sex"]);
console.log(jayoung.age);
console.log(jayoung.personalColor);
console.log(jayoung.mbti);
console.log(jayoung);

/*typeof 사용 */
let und;
console.log(typeof "문자"); //string
console.log(typeof 123); //number
console.log(typeof true); //boolean
console.log(typeof cat); //object
console.log(typeof nums); //object
console.log(typeof NaN); //number
console.log(typeof null); //object
console.log(typeof und); //undefined

//work2

console.log(
  '"' + typeof 123 + '"',
  "isn't",
  '"' + typeof "123" + '"',
  "data type."
);

//정답 - 백틱₩
console.log(`${typeof 1} isn't ${typeof "1"} data type.`);
console.log("typeof를 array나 null에 사용하면" + typeof {} + "결과");

//형변환
// let mathScore = prompt("수학 점수 입력"); //80
// let engScore = prompt("영어 점수 입력"); //90
//'8090'/2 문자열이지만 임의로 계산됨
// let avg = (mathScore + engScore) / 2;
// console.log(avg);

// 1. ->문자 string()
let str1 = true;
let str2 = 123;
let str3 = null;

console.log(typeof String(str1)); //방법1
console.log(typeof String(str2));
console.log(typeof String(str3));

console.log(typeof str1);
console.log(typeof str1.toString()); //방법2

//2. ?->숫자 Number()
let n1 = true;
let n2 = false;
let n3 = "123.9";
console.log(typeof n1);
console.log(typeof n2);
console.log(typeof n3);

console.log(typeof Number(n1)); // 1
console.log(typeof Number(n2)); // 0
console.log(typeof Number(n3)); // 123.9

console.log(Number(n1));
console.log(Number(n2));
console.log(Number(n3));

console.log(parseInt(n3)); //소수점버리고 정수형으로만 변환 -> 123

//work3
let mathScore = "77";
let engScore = "88";
let avgScore = (Number(mathScore) + Number(engScore)) / 2;
console.log(avgScore);
