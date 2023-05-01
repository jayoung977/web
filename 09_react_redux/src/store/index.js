// combineReducers: 여러개의 reducer을 하나로 합치는 일을 함
import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import isDataReducer from "./isDataReducer";
const rootReducer = combineReducers({
  counter: counterReducer,
  isData: isDataReducer,
});
//다른 파일에서 여러 리듀서를 합친 최종 리듀서rootReducer) 를 사용할 수 있도록 내보냄

export default rootReducer;
