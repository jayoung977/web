//문자열 관련 함수 + 속성(length 한개만 속성임)

/*
- toUpperCase(),toLowerCase()
- trim()
- indexOf()
- slice()
- replace(),replaceAll()
- repeat()
 */

let str1 = "Strawberry Moon";
let str2 = "       Strawberry Moon";
//문자열 인덱싱
console.log(str1[0]);
console.log(str1[0] + str1[12]);
//Sonny

console.log(str1[0] + str1[13] + str1[14] + str1[14] + str1[9]);
//.length 속성
console.log(str1.length);
console.log(str2.length);

//매개변수 없는 함수
//.toUpperCase(),.toLowerCase()
let msg = "Happy Birthday!";
console.log(msg.toUpperCase());
console.log(msg.toLowerCase());
//.trim()
console.log(str2.trim()); //Strawberry Moon
console.log(str2.trim().length); //15

let msg2 = "  hello World!!  ";
console.log(msg2.toUpperCase().trim());

//매개변수가 있는 함수
//.indexOf()
let fruit = "applemango";
console.log(fruit.indexOf("a")); //0
console.log(fruit.indexOf("apple")); //0 문자가 시작하는 인덱스를 반환함
console.log(fruit.indexOf("x")); //-1 없는 문자
//.charAt()
console.log(fruit.charAt(3)); //l 인덱스 번호에 대한 문자 반환

//.slice()
console.log(fruit.slice()); //applemango 전체 문자열
console.log(fruit.slice(5)); // mango 5번 부터 끝까지 반환
console.log(fruit.slice(3, 6)); //lem 3번부터 5번까지
console.log(fruit.slice(-3)); //ngo 뒤에서 3번째 부터

//함수 써도 문자열 안변함
console.log(fruit);
//replace(), replaceAll()
let msg3 = "Wow! It is so amazing!";
console.log(msg3.replace("Wow", "Hey"));
console.log(msg3.replace("o", "a")); //처음만
console.log(msg3.replaceAll("o", "a")); //모두 변경

//.split()
let date = "23.03.10";
console.log(date.split(""));
console.log(date.split("."));
//.repeat()
console.log("hi".repeat(5)); //매개변수 아니어도 반복됨
