import { useState } from "react";

// function Practice3Commentary() {
//   const [color, setColor] = useState("black");
//   const [text, setText] = useState("검정색 글씨"); //커서 있는 곳 c+v/ c+option+v //c+d 동일한 글자
//   const onClickRed = () => {
//     setText("빨간색 글씨");
//     setColor("red");
//   };
//   const onClickBlue = () => {
//     setText("파란색 글씨");
//     setColor("Blue");
//   };
//   return (
//     <>
//       <h1 style={{ color: color }}>{text}</h1>
//       <button onClick={onClickRed}>빨간색</button>
//       <button onClick={onClickBlue}>파란색</button>
//     </>
//   );
// }

//실습 방법 2
function Practice3Commentary() {
  const [state, setState] = useState({
    color: "black",
    text: "검정색 글씨",
  });

  const onClickRed = () => {
    setState({
      color: "빨간색 글씨",
      text: "red",
    });
  };
  const onClickBlue = () => {
    setState({
      color: "파란색 글씨",
      text: "blue",
    });
  };
  return (
    <>
      <h1 style={{ color: state.color }}>{state.text}</h1>
      <button onClick={onClickRed}>빨간색</button>
      <button onClick={onClickBlue}>파란색</button>
    </>
  );
}

export default Practice3Commentary;
