//로컬변수로 사용하는 건 그렇게 많이 쓰이지는 않음, 거의 없음
//내부적으로만 변경할 때 사용

import { useRef } from "react";
const RefSample2 = () => {
  //1.useRef()를 이용해서 로컬 변수 만들기
  const id = useRef(1);
  // console.log(id); //{current: 1}
  const plusId = () => {
    //id값 중가
    id.current += 1;
    //콘솔 찍기
    console.log(id.current);
  };
  const minusId = () => {
    //id값 중가
    id.current -= 1;
    //콘솔 찍기
    console.log(id.current);
  };
  return (
    <>
      {/* 값이 변하지 않음, 로컬변수-값이 변해도 렌더링 되지 않음 */}
      <h1>{id.current}</h1>
      <button onClick={plusId}>plus ref</button>
      <button onClick={minusId}>minus ref</button>
    </>
  );
};

export default RefSample2;
