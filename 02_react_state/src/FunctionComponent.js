import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function FunctionComponent() {
  // const state = useState();
  // console.log(state); //[undefined, ƒ]
  // [현재상태, setter함수]
  // class componenet와 달리
  // function componenet에서는  setCounter함수로 렌더링해줌
  // 코드가 더 간결해짐 그래서 function componenet를 더 많이 사용하게됨
  //
  const [counter, setCounter] = useState(0); //counter: 초기값 0으로 설정
  const onClick = () => {
    setCounter(counter + 1);
    console.log("클릭되었습니다");
  };
  return (
    <div>
      <h1>Hello World, Function Component</h1>
      <h5>{counter}</h5>
      <button onClick={onClick}>숫자 업</button>
    </div>
  );
}

// const FunctionComponent = () => {}
export default FunctionComponent;
