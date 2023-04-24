// 단축평가 ||(논리합) &&(논리곱)

const a = 20;
const b = 10;

//2개 다 true일 경우에만 출력됨
//논리 곱은 조건식일 때 사용
a > b && console.log("A가 큽니다");

//논리합 - 조건에 상관없이 실행됨
//기본 값 설정 시 사용
function test(name) {
  const obj = {
    a: name || "기본 이름",
  };
  console.log(obj);
}

test(); //{ a: '기본 이름' }
test("홍길동"); //{ a: '홍길동' }
