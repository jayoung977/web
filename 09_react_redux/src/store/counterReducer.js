//action type 정의
//모듈이름/액션이름 - 임의 지정 가능하나 구별 위해서 이렇게 지음
const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECREMENT";

//increase(), decrease()
//컴포넌트에서 액션을 쉽게 발생시키기 위해
export const increase = () => ({ type: INCREMENT });
// {type: "counter/INCREMENT"}
export const decrease = () => ({ type: DECREMENT });
// {type: "counter/DECREMENT"}
const initialState = {
  number: 9,
};
// Reducer 정의: 변화를 일으키는 함수
// dispatch가 실행됐을 때 호출되는 함수
// 함수 초기값 설정 const default = 0;  const increase = (num = default) => num+1;
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    // case "INCREMENT":
    case INCREMENT:
      return { number: state.number + 1 };
    // case "DECREMENT":
    case DECREMENT:
      return { number: state.number - 1 };
    default:
      return state;
  }
};

// 다른 파일에서 reducer()을 사용할 수 있도록 내보내기
export default counterReducer;
