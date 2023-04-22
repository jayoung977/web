// 자식 컴포넌트
// 자식 컴포넌트만 변함 -> useEffect 자식에서 불러옴
import { useState, useEffect } from "react";

//props: 부모에서 받은 데이터(=number state)
// const LifeCycleFuncChild = (props) => {
// props = {number}
const LifeCycleFuncChild = ({ number }) => {
  const [text, setText] = useState("");
  //   console.log("props >>", props); //props >> {number: 5}
  // 구조분해 할당으로 number의 값만 꺼냄
  //   const { number } = props; //5

  //0.컴포넌트가 Mount될 때만 동작
  //   useEffect(() => {
  //     console.log("mount!!!!");
  //   }, []);

  //1.컴포넌트가 Mount될 때 +  unMount 될 떄 동작
  //   useEffect(() => {
  //     //mount 시점에 실행
  //     //특정 컴포넌트가 나타날 때 동작=> useEffect 안에 작성
  //     console.log("mount!!!!");
  //     //unmount 시점에 실행
  //     //특정 컴포넌트가 사라질 때 동작=> return () 안에 코드 작성
  //     return () => {
  //       console.log("unmount!!!!");
  //     };
  //   }, []);

  //2.mount & update 시점에 실행 - []제거
  //   useEffect(() => {
  //     console.log("mount  or  update!!!!");
  //   });

  //3.text state가 바뀔 때 마다 실행
  useEffect(() => {
    console.log("mount or update!!!!");
  }, [text]);
  return (
    <>
      <p>
        LifeCycleFuncChild <b>{number}</b>
      </p>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
};
export default LifeCycleFuncChild;
