console.log("connect");

// val()
function getValue() {
  let value = $("input").val();
  //   let value = document.querySelector('input').value;
  alert(value);
}
function setValue() {
  $("input").val("설정!!!");
}

// css()

function changeCssJS() {
  let span = document.querySelector("span"); //first span
  span.style = "font-size: 20px; color: red;";
}
function changeCssJquery() {
  $("span").css("font-size", "40px");
  $("span").css("color", "blue");
  console.log($("span").css("color")); //속성값 가져오기
}
//attr()
function changeAttrJS() {
  let a = document.querySelector("a");
  a.setAttribute("href", "http://www.naver.com");
}
function changeAttrJquery() {
  $("a").attr("href", "http://www.daum.net");
}

//text() //innerText와 동일
function changeTextJS() {
  let p = document.querySelector(".p-text");
  p.innerText = "<b>js</b>  로 바꿨습니다.";
}
function changeTextJquery() {
  $(".p-text").text("<b>jquery</b> 로 바꿨습니다.");
}

//html()
function changeHtmlJS() {
  let p = document.querySelector(".p-html");
  p.innerHTML = "<b>js</b>  로 바꿨습니다.";
}
function changeHtmlJquery() {
  $(".p-html").html("<b>jquery</b> 로 바꿨습니다.");
}
// 요소 추가
// append()
function appendJS() {
  let li = document.createElement("li");
  li.innerText = "append()로 추가된 js";
  let ul = document.querySelector(".colors");
  ul.append(li);
}
function appendJquery() {
  $(".colors").append("<li>append()로 추가된 jquery</li>");
}
// prepend()
function prependJS() {
  let li = document.createElement("li");
  li.innerText = "prepend()로 추가된 js";
  let ul = document.querySelector(".colors");
  ul.prepend(li);
}
function prependJquery() {
  $(".colors").prepend("<li>prepend()로 추가된 jquery</li>");
}

//after()
function afterJS() {
  let green = document.querySelector(".green");
  let li = document.createElement("li");
  li.innerText = "after() 형제요소로 추가된 js";
  green.after(li);
}
function afterJquery() {
  $(".green").after("<li>after() 형제요소로 추가된 jquery</li>");
}
//before()
function beforeJS() {
  let green = document.querySelector(".green");
  let li = document.createElement("li");
  li.innerText = "before() 형제요소로 추가된 js";
  green.before(li);
}
function beforeJquery() {
  $(".green").before("<li>before() 형제요소로 추가된 jquery</li>");
}

//removeJ
function removeJS() {
  let li = document.querySelector("#li2");
  li.remove();
}
function removeJquery() {
  $("#li2").remove();
}

//empty() 자식 모두 지움 jquery만 있으나 js로 구현 가능
function emptyJS() {
  let nums = document.querySelector("ul.nums");
  nums.innerHTML = "";
}
function emptyJquery() {
  $("ul.nums").empty();
}
//요소 선택
function findParent() {
  //parent(): 부모 요소 반환
  console.log($(".child2").parent());
}

function findParents() {
  //parents(): 조상 요소 반환
  //js 없음
  console.log($(".child2").parents());
}

function findNext() {
  //next() : nextSibling
  console.log($(".child2").next());
}

function findprev() {
  //prev() :previousSibling
  console.log($(".child2").prev());
}

function findChildren() {
  //children: 자식 요소 모두 반환, js에서의 children()과 동일
  console.log($(".parent").children());
  console.log(document.querySelector(".parent").children);
}

//클래스 조작
function addClass() {
  $("#hi").addClass("fs-50");
}
function removeClass() {
  $("#hi").removeClass("fs-50"); // 특정 클래스 제거
  $("#hi").removeClass(); //hi 클래스 모두 제거
}
function hasClass() {
  //true 나 false로 반환
  console.log($("#hi").hasClass("fs-50"));
}
function toggleClass() {
  $("#hi").toggleClass("bg-pink"); //있으면 제거 없으면 추가
}
