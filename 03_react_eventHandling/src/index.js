import React from "react";
import ReactDOM from "react-dom/client"; //리액트 돔 라이브러리에서 ReactDOM 객체를 가져온다.
import App from "./App";
import "./index.css";

//root 이라는 id 를 가진 요소를 엔트리 포인트로 삼겠다는 것을 리액트돔에게 알려준다.
//public > index.html에서 id가 'root'인 요소 가져옴
const root = ReactDOM.createRoot(document.getElementById("root"));

setInterval(() => {
  //그 후에 render 메서드를 이용해서 root가 App 컴포넌트 안에 있는 내용들를 렌더링 한다고 알린다.
  root.render(
    <React.StrictMode>
      {/* 컴포넌트 하나(ex.App)밖에 못넣음 */}
      <App />
    </React.StrictMode>
  );
});
