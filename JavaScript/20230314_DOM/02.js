const todoForm = document.getElementById("todo-form");
const todos = document.querySelector(".todos");
console.log(todoForm, todos);

todoForm.addEventListener("submit", (e) => {
  console.log("submit");
  e.preventDefault(); //실제로 폼이 제출되는 것을 막아서 새로고침 방지, 이벤트 전달을 막는 방법
  const todoInput = document.querySelector('input[name="todo"]');
  console.log(todoInput);
  console.dir(todoInput); //요소의 데이터 반환 이중 value 쓸것임
  console.dir(todoInput.value); //무조건 문자열로 들어옴 숫자여도
  //input 에 문자열 저장
  //   const todo = todoInput.value;
  //   const newTodo = document.createElement("li"); //<li></li>
  //   newTodo.append(todo); //<li>todo</li>
  //   todos.append(newTodo);
  //공백문자 들어오면 추가 안되게 하는 법
  const todo = todoInput.value.trim();
  if (todo !== "") {
    const newTodo = document.createElement("li"); //<li></li>
    newTodo.append(todo); //<li>todo</li>
    todos.append(newTodo);
  }
  todoInput.value = ""; //입력값 초기화
});

const chgInput = document.querySelector("#change-input");

chgInput.addEventListener("change", function () {
  console.log("change!!");
});
// 실시간 연동해서 입력값 넣기
chgInput.addEventListener("input", function () {
  console.log("change?");
  let div = document.querySelector(".intro");

  div.innerHTML = chgInput.value;
}); //변화를 할 때마다 동작 <b>안녕</b> html이라 저장됨 , 화살표나 그런것들은 영향을 안줌
