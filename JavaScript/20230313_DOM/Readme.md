1.DOM
html 문서 요소의 집합, node 또는 object에 접근해서 수정 가능

0. <script defer src="./~~"></script>

   : <script> 태그의 defer 속성은 페이지가 모두 로드된 후에 해당 외부 스크립트가 실행됨을 명시합니다.

1. 요소 선택 - 요소 선택자를 사용해서 가져옴

   - document.querySelector('요소 선택자') - 태그 중 맨 처음 요소를 가져옴
     console.log(document.querySelector(".others"));
     console.log(document.querySelector("#green"));
     console.log(document.querySelector("div"));
     console.log(document.querySelector("[name='id']"));
   - document.querySelectorAll('요소 선택자') - 태그를 배열 형태로 가져옴
     console.log(document.querySelectorAll(".pink"));
     console.log(document.querySelectorAll("input"));

     console.log(document.querySelectorAll(".pink")[0]);
     console.log(document.querySelectorAll(".pink")[1]);
     console.log(document.querySelectorAll(".pink")[2]);
     console.log(document.querySelectorAll(".pink")[3]);

   - document.getElementByid("id 이름") - 해당 id를 갖는 요소 가져옴(id는 한개)
     console.log(document.getElementById("t1"));
   - document.getElementsByClassName('class 이름') - 해당 클래스에 해당하는 요소들을 배열 형태로 가져옴
     console.log(document.getElementsByClassName("test")[0]);
   - document.getElementsByTagName("div") - 해당 태그에 해당하는 요소들을 배열 형태로 가져옴
   - document.getElementsByName("name") - 해당 name에 해당하는 요소들을 배열 형태로 가져옴 ,name은 중복될 수 있는 요소

2. 요소 다루기

   - 태그 내부 변경 (요소.textContent, 요소.innerText)
     (1) 요소.innerText: 공백 문자 제거 - div1.innerText = "문자열"  
      (2) 요소.textContent: 공백 문자 그대로 반환, 인터넷 익스플로러 9(IE9) 이전 버전 에서 사용 안됨 - div1.textContent = "문자열"

   - 요소내에 포함 된 HTML 설정 (요소.innerHTML)
     - div1.innerHTML = "<ul><l1>1</li></ul><ul><l1>2</li></ul><ul><l1>3</li></ul>";
   - 속성 접근 (document.getAttribute("속성"),요소.속성 )
     (1) document.getAttribute('속성')사용 - document.getElementById("dobby").getAttribute("src")
     (2) 요소.속성 /직접 접근 - document.getElementById("dobby").src
   - 속성 변경 및 추가
     (1) 요소.setAttribute('속성이름','변경 값'): html 요소 속성 추가 - naver.setAttribute("href", "https://www.google.com"); //a태그의 href속성을 naver->google
     (2) 요소.속성 = '변경값' - naver.href = "#";
   - css 속성 추가
     (1) 요소.style 속성 사용 (속성이름 외워야해서 (2)번 사용) - li.style.backgroundColor = "yellow"; - li.style.color = "#444"; - li.style.fontSize = "1.5rem";
     (2) 요소.classlist.add('class 이름') 사용 - 요소.classList.add('class 이름'): 클래스 추가 //css 지정 가능
     (+) class 속성 변경 및 추가 - 요소.classList.remove('class 이름'):해당 클래스 제거 - 요소.classList.contains('class 이름'): 있는지 확인 true/false 반환 - 요소.classList.toggle('class 이름'): 해당 클래스가 있다면 제거, 없으면 추가

   - 다른 노드에 접근하기
     (1) 자식 노드 접근 (요소.children) - 배열 형태로 가져옴 - friends.children - friends.children[0] //이요르
     (2) 부모 노드 접근 (요소.parentNode) - 부모 1개 - tigger.parentNode
     (3) 형제 노드 접근 2가지 방법
     a.이전 형제 (요소.previousElementSibling) - tigger.previousElementSibling
     b.다음 형제 (요소.nextElementSibling) - tigger.nextElementSibling //피글렛 - 연달아 사용 가능 ; tigger.nextElementSibling.nextElementSibling //로빈
   - 요소 생성
     (1) 요소 생성(document.createElement("요소 이름")) - let p2 = document.createElement("p");
     (2) 부모의 뒤 자식으로 추가 (부모.append(요소)) - container.append(p2, p3); - container.appendChild(p3); //한개만 넣기 가능함
     (3) 부모의 앞 자식으로 추가 (부모.prepend(요소)) - friends.prepend(li1);
     (4) 형제의 뒤 추가 (형제.after(요소)) - h1.after(h3);
     (5) 형제의 앞 추가 (형제.before(요소)) - h1.before(h3);
   - 요소 삭제
     (1) 선택된 요소 삭제 (삭제될요소.remove()) - firstl1.remove();
     (2) 요소의 자식요소가 삭제됨 (부모.removeChild(자식요소)) - ul.removeChild(firstl1);
