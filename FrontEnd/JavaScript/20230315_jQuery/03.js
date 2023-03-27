// console.log("connect");
//js
console.log(window);
console.log(document);

//jquery
console.log($(window));
console.log($(document));

//mouse event
//click(function(){}),mouseover(function(){})
//hover(function(){}, function(){})
//hover(마우스 올렸을 때 동작, 마우스를 뗐을 때 동작)

//1. click(): 클릭이 있어났을 때!
$(".p-msg").click(function () {
  $(".p-msg").css("color", "red");
});

//2. on() == addEventListner()
$(".num").on("click", function () {
  $(this).css("color", "blue"); //this -> 클릭되는 자신 하나만, .num이면 전체 파랑
});

//3. hover()
$(".div-hover").hover(
  function () {
    $(this).addClass("hover1");
  },

  function () {
    $(this).removeClass("hover1");
  }
);

//4. scroll()
$(window).scroll(function () {
  console.log("scroll!!!!!!!!!!!");
});

//keydown
//js - 선택요소.addEventListner('keydown',function(){})
//jquery
$(".input-key").keydown(function (event) {
  //   console.log(event.code);
  if (event.code === "ArrowUp") {
    console.log("up");
  } else if (event.code === "ArrowRight") {
    console.log("right");
  } else if (event.code === "ArrowLeft") {
    console.log("left");
  } else if (event.code === "ArrowDown") {
    console.log("down");
  } else {
    console.log("others");
  }
});

//todolist
$("#todo-form").on("submit", function (e) {
  e.preventDefault(); //이벤트 막기
  const todo = $('input[name="todo"]').val();
  $("ul.todos").append(`<li>${todo}</li>`);
  $('input[name="todo"]').val(""); // 초기화
});
