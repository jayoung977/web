import { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);
  const increase = () => {
    setNumber(number + 1);
  };
  const alertMsg = (msg) => {
    alert(`${msg} 현재 숫자는 ${number}입니다`);
  };
  const consoletMsg = (e, msg) => {
    console.log(e.target); //<button> console 띄우기 </button>
    console.log(`${msg} 현재 숫자는 ${number}입니다`);
  };
  return (
    <>
      <div>숫자 카운티</div>
      <h1>{number}</h1>
      {/* 함수형 컴포넌트에서 이벤트 사용하는 방법
         1. 인자가 없는 경우, 함수 이름만 전달
         2. 인자가 있는 경우, 함수를 익명 화살표 함수로 감싸서 처리  */}
      <button onClick={increase}>더하기</button>
      <button onClick={() => alertMsg("hello~~~~~~~~")}>alert 띄우기</button>
      <button onClick={(e) => consoletMsg(e, "hello~~~~~~~~")}>
        console 띄우기
      </button>
    </>
  );
};
export default Counter;
