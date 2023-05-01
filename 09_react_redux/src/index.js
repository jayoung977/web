import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
// import App2 from "./App2";
// import App3 from "./App3";
import App4 from "./App4";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
//composeWithDevTools import
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./store";
// state 초기값 설정

//store 정의 : 상태를 관리하는 공간?
//단, 하나의 프로젝트에는 하나의 store만 있어야함!
// const store = configureStore({ reducer: reducer }); //이전 코드

// 확장 프로그램 redux-devtool 크롬 설치
// npm i redux-devtools-extension
// composeWithDevTools import 및 연결
const store = configureStore({ reducer: rootReducer }, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //Provider 컴포넌트: store props를 반드시 가져야함
  //provider 하위 컴포넌트들을 store에 저장된 state들을 사용 가능
  <Provider store={store}>
    <App4 />
  </Provider>
);
