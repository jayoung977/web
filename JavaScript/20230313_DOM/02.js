let div1 = document.getElementById("div1");
console.log(div1);

//[1]. 태그 내부 변경
div1.innerHTML = "여기는 <b>첫번째</b> 태그입니다. &hearts;";
console.log(div1); //변경됨
console.log(div1.innerHTML);

div1.innerText = "      여기는 <b>첫번째</b> 태그입니다.        &hearts;"; //b태그 적용 안됨, 태그 자체를 문자열로 판단함, 공백 문자 제거됨
console.log(div1.innerText);
div1.textContent = "      여기는 <b>첫번째</b> 태그입니다.      &hearts;"; //b태그 적용 안됨, 태그 자체를 문자열로 판단함, 공백 문자 제거 안됨, 인터넷 익스플로러 9이전 사용 안됨
console.log(div1.textContent);

//정리
//innerText vs textContent => 태그가 그대로 보임
//innerText: 공백 문자 제거
//textContent: 공백 문자 그대로 반환, 인터넷 익스플로러 9(IE9) 이전 버전 에서 사용 안됨

div1.innerHTML = "<ul><l1>1</li></ul><ul><l1>2</li></ul><ul><l1>3</li></ul>";

//[2].속성 접근
let naver = document.getElementById("naver");
naver.setAttribute("href", "https://www.google.com"); //a태그의 href속성을 naver->google
//속성 접근 방법1:
console.log(document.getElementById("dobby").getAttribute("src")); //속성을 가지고옴 img.jpeg
//속성 접근 방법2: .속성
console.log(document.getElementById("dobby").src);
//직접 접근 변경
naver.href = "#";

//[3]css 지정
let h1 = document.querySelector("h1");
let list = document.querySelectorAll("ul >li");
console.log(h1);
console.log(list);
//1).style 속성 사용
//backgroundColor camel로
// list.style.backgroundColor = "red";//오류
list[0].style.backgroundColor = "red";
for (let li of list) {
  li.style.backgroundColor = "yellow";
  li.style.color = "#444";
  li.style.fontSize = "1.5rem";
}
// 위처럼 하면 다 속성이름 외워야해서 아래 방법을 사용할 수 있음

//2).classlist
console.log(h1.classList); //클래스 목록 없어서 안뜸
h1.classList.add("add-h1"); //html위에 지정해 놓았던거 불러옴
/*
classList.add: 클래스 추가
classList.remove:해당 클래스 제거
classList.contains: 있는지 확인 true/false 반환
classList.toggle: 해당 클래스가 있다면 제거, 없으면 추가 
*/

//[4]노드 찾기

let friends = document.querySelector("#friends");
let tigger = document.querySelector("#tigger");
console.log(friends);
console.log(tigger);
//1).자식 노드 접근
console.log("자식 노드 접근");
console.log(friends.children);
console.log(friends.children[0]); //이요르
//2).부모 노드 접근
console.log("부모 노드 접근");
console.log(tigger.parentNode);
//3).형제 노드 접근 2가지 방법
console.log("형제 노드 접근 2가지 방법");
console.log("1 이전 형제");
//3)-1.이전 형제
console.log(tigger.previousElementSibling);
console.log("2 다음 형제");
//3)-2.다음 형제
console.log(tigger.nextElementSibling); //피글렛
console.log(tigger.nextElementSibling.nextElementSibling); //로빈

//[5] 요소 생성 삭제 추가

//1) 부모의 앞 뒤 추가
//a.append: 선택된 요소에 맨 마지막 자식으로 추가됨
let container = document.querySelector(".container");
console.log(container);
let p = document.createElement("p"); //생성
p.innerText = "새로 추가된 p";
p.style.fontWeight = "700";
p.style.backgroundColor = "red";

//1)-1 부모의 뒤 추가
container.append(p); //container안에 자식으로 붙여 넣기

let p2 = document.createElement("p");
let p3 = document.createElement("p");
p2.innerHTML = "p2";
p3.textContent = "p3";
p2.classList.add("p-2");
p3.classList.add("p-3");

container.append(p2, p3); //container안에 자식으로 붙여 여러개 넣기
container.appendChild(p3); //한개만 넣기 가능함

//1)-2 부모의 앞 추가
//b.prepend: 선택된 요소에 맨 첫번째 자식으로 추가됨

let li1 = document.createElement("li");
li1.textContent = "캉가";
friends.prepend(li1);

//2) 형제의 앞 뒤 추가
//before: 선텍된 요소 앞으로 추가됨
//after: 선텍된 요소 뒤로 추가됨

let h3 = document.createElement("h3");
h3.innerText = "h3";
//2)-1 형제의 뒤 추가
h1.after(h3); //h1 뒤에 h3 붙임

let h2 = document.createElement("h2");
h2.innerText = "h2";
//2)-2 형제의 앞 추가
h1.before(h2); //h1 앞에 h2 붙임

//3) 요소 삭제
let firstl1 = document.querySelector("li");
console.log(firstl1);
let ul = firstl1.parentNode;
console.log(ul);

//3)-1 remove
firstl1.remove();
//3)-2 removeChild()
ul.removeChild(firstl1);

/*
요소 삭제 
remove &removeChild()
-remove() : 선택된 요소 삭제
-removeChild(자식요소): 요소의 자식요소가 삭제됨
*/

//사진 추가 실습

let container2 = document.createElement("container2"); //생성
container2.innerText = "새로 추가된 container2";

container.append(container2); //container안에 자식으로 붙여 넣기

container2.innerHTML = "<img src='./hero1.png'/>";

//정답
let img = document.createElement("img");
container.append(img);
img.setAttribute("src", "./hero1.png");
img.setAttribute("alt", "hero1");
// img.src
