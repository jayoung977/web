jQuery

1.jQuery란: 자바스크립트 언어를 간편하게 사용할 수 있도록 단순화시킨 오픈소스 기반의 자바스크립트 라이브러리,
기초- $(선택자).동작함수();

react 나 view 같은 가상 dom을 다루는 라이브러리 생김,
jQuery가 무거워서 잘 안쓰임
기본 자바스크립트도 많이 기능들이 생겨서 더 안쓰임

2.메소드

- 값 가져오기 & 설정하기:
  - $(선택자).val(); 
      ex. var value =$('input').val();
  - $(선택자).val('설정할 값'); 
      ex. var value =$('input').val('설정완료');
- 텍스트 변경하기
  - $(선택자).text('글자');
      ex.$('span').text('jQuery로 바꿈');
- HTML 변경하기
  - $(선택자).html('html값');
      ex.$('span').html('<h1>jQuery</h1>');
- 속성 변경하기
  - $(선택자).attr('속성','속성값');
      ex.$('#li2').attr('style','color:red');
- CSS 변경하기
  - $(선택자).css('속성','속성값');
- 요소 추가
  - $(선택자).append(요소);
  - $(선택자).prepend(요소);
  - $(선택자).before(요소);
  - $(선택자).after(요소);
- 요소 삭제
  - $(선택자).remove();
  - $(선택자).empty();
- 요소 탐색
  - $(선택자).parent();
  - $(선택자).parents();
  - $(선택자).children();
  - $(선택자).next();
  - $(선택자).prev();
- 클래스 추가, 삭제, 확인

  - $(선택자).addClass('클래스명');
  - $(선택자).removeClass('클래스명');
  - $(선택자).hasClass('클래스명');

  서버
  서버 구축 방법 - 외부

1. 서버 호스팅
2. 웹 호스팅
3. 클라우드 서버

- AWS,Naver Cloud Platform
  서버 접속
  window PuTTY, MAC
  FileZilla

서버 설정
웹서버 -Apache, NGINX, MicrosoftIIS

IP주소와 도메인
DNS
