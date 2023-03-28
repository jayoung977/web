1. async / await
   프로미스기반 코드를 좀 더 쓰기쉽고 읽기쉽게 하기 위해 등장!!
   비동기처리 패턴중 가장 최근에 나온 문법
   async / await
   비동기 처리 패턴 중 가장 최신 문법
   promise 기반 코드를 더 가독성 있게 하기 위해 등장
   기본 구조

- 함수 앞에 async 키워드 붙이기
- 비동기 처리 메서드 앞에 await 키워드 붙임 (해당 작업 기다림)
  async와 await는 세트!! 같이 써야함!!
  async function 함수명() {
  await 비동기처리 메서드명();
  }

2. Form 전송

- 노드프로젝트생성
- body-parser
  • 데이터를 쉽게 처리 할 수 있도록 도와주는 라이브러리
  • Post로 정보를 전송할때 요청의body(req.body)로 받을수있게도와줌
  • express 4.x 부터 body-parser가 내장되어 있어 설치 필요없음
- form
  • 입력된데이터를한번에서버로전송하기위해사용
  • 즉, 클라이언트가서버에게정보를전달할때사용
  • 속성: action, name, target, method
  • 폼요소: <input>, <select>, <textarea>, <button> 등등
- form 받기
