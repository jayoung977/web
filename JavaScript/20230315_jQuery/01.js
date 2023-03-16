console.log($("button"));
console.log(document.querySelectorAll("button"));

$("button").css("color", "red"); // jQuery 배열형태여도 전부다 변환됨

function submitjs() {
  document.querySelector("#div1").innerHTML = "반갑습니다.";
  document
    .getElementById("div1")
    .setAttribute("style", "border: 2px solid blue");
}
function submitjquery() {
  $("#div1").html("잘지내세요");
  $("#div1").css("border", "3px dotted red");
}
