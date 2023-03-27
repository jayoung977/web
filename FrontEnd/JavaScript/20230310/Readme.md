@Javascript 내장 메소드를 알아보자 ~!

1. 문자열관련 메소드 -> 기존 str 안바뀜
   - length - 문자열 길이
   - toUpperCase()&toLowerCase() - 문자열 전제 대문자, 소문자 변경
   - indexOf{''} - 문자열을 받아서 몇번째 인덱스인지 반환
   - slice(startrldx,endldx)-시작~끝까지 슬라이싱, 음수값도 가능함
   - replace(str1,str2) - 처음만 찾아서 변경
   - replaceAll(str1,str2) - 모두 찾아서 변경
   - repeat(n) - n번 반복
   - trim() - 양끝 공백 없앰
   - split() - 문자열을 배열로 바꿔주는 함수인데 '기준' 이 필요 if ''-> 전체 , ' '-> 공백마다 자름
2. 배열관련 메소드 -> 기존 str 바뀜

   - push() 배열 끝에 추가
   - pop() 맨끝 요소 삭제
   - shift, unshift 배열 앞에 제거/추가
   - include - 반환 값으로 true/false, 해당 배열에 지정한 요소가 있는지 확인하는 메소드
   - arr.length - 배열 길이 반환
   - arr.reverse
   - ... 등등

3. 메소드 체이닝
   - .을 이용하여 한줄 처리
4. 배열에서의 for

   - 배열에서 기본 for문이 아니라 for of 문 사용 가능함 , 배열에서만 사용 가능함
   - (1) for 인덱스 접금
   - (2) for of 데이터로 직접 점근 ex. for (let fruite of fruits)
   - (3) for each 는 함수임
     - arrname.forEach (function(매개변수 number, index, array)) {}
     - 매개변수로 익명 함수 들어감

5. 배열 함수 filter
   - 매개변수로 익명 함수 들어감
   - 해당하는 요소들만 배열로 반환
   - arr = numbers.filter(function(num){})

@자바스크립트 표준 내장 객체
: 자바스크립트가 기본적으로 가지고 있는 객체

1. object
2. array
3. string
4. number
5. boolean
   ~~
6. Math
7. Date : 시간 날짜에 대한 정보를 얻기 위해 사용
