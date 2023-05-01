const initialState = {
  number: 9,
};
// Reducer 정의: 변화를 일으키는 함수
// dispatch가 실행됐을 때 호출되는 함수
// 함수 초기값 설정 const default = 0;  const increase = (num = default) => num+1;
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { number: state.number + 1 };
    case "DECREMENT":
      return { number: state.number - 1 };
    default:
      return state;
  }
};

// 다른 파일에서 reducer()을 사용할 수 있도록 내보내기
export default counterReducer;
