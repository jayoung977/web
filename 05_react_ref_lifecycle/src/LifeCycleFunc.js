// 컴포넌트들이 진짜 업데이트 되는지 확인
import { useState } from "react";
import LifeCycleFuncChild from "./LifeCycleFuncChild";

// 부모 컴포넌트
const LifeCycleFunc = () => {
  const [visible, setVisible] = useState(true);
  const changeVisible = () => {
    setVisible(!visible);
  };
  //자식에서 사용하지만 단방향이라 부모에서 state정의
  const [number, setNumber] = useState(5);
  const changeNumber = () => {
    setNumber(number + 1);
  };
  return (
    <>
      <button onClick={changeNumber}>PLUS</button>
      <button onClick={changeVisible}>ON/OFF</button>
      {/* 부모 컴포넌트에서 데이터를 Prop사용해서 넘김 */}
      {visible && <LifeCycleFuncChild number={number} />}
      {/*사용 가능하나 안에 요소 없다면 위처럼 쓰는 것을 권장함
       <LifeCycleFuncChild ></LifeCycleFuncChild > */}
    </>
  );
};

export default LifeCycleFunc;
