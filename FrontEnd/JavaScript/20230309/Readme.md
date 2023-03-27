1. function - 함수
   특정 동작을 수행하는 일부 코드의 집합
   자바스크립트의 경우 작성방법 3가지가 있음

   a. 함수 선언문 - function sayHello(매개변수-파라미터-인자){}; / 어디서든 호출이 가능 sayHello();, 자바스크립트는 메모리 관리를 자신이함, 메모리 공간을 미리 할당 = 호이스팅 (맨 위로 코드를 올리는 것과 같이 동작함)
   b. 함수 표현식 - let sayHello = function(){}; 변수에 이름이 없는 익명함수를 사용 / 함수 생성 이후에 함수 호출 가능 sayHello();, 백앤드 배울 때 함수 표현식으로 사용해야하는 경우가 있음
   c. 화살표 함수 - let add = () => {}; /함수 표현식의 모습만 다르고 동일하게 작동, 함수 표현식을 줄여 쓴 것임

   onclick - html 요소에 함수 연결
   <div onclick="alert('빨간 박스를 눌렀군요!')"></div>
   <div onclick="helloworld1()"></div>
   <div onmouseover="helloworld1()"></div>
   <div onmouseout="helloworld1()"></div>

2. 조건문 - if, switch, 3항연산자
   a. if /else , if/else if/ else (조건1이 아닐 때 조건 2실행), 중첩
   b. switch : 조건이 없음, 값 만이 올수 있음
   c. 삼항연산자 : if 문을 간단하게 표현 한줄로 표현 가능 조건? 참:거짓

3. 반복문
   a. for
   b. while - while(조건문){ 실행할 코드(명령문);}/ for문과 달리 조건 변경 구문이 없어 무한루프 가능
   c. do while -while 문과 동일하지만 최소한 코드 한번은 실행됨

   반복문 제어
   a. break: 바로멈추고 빠져나옴
   b. continue: 반복문을 한번만 멈추고 다음으로 진행
