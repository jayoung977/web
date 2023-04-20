import { useState } from "react";

function Practice3() {
  const [color, setColor] = useState(["black", "검정색 글씨"]);

  const Red = () => {
    setColor(["red", "빨간색 글씨"]);
  };
  const Blue = () => {
    setColor(["blue", "파란색 글씨"]);
  };

  return (
    <>
      <h5 style={{ color: color[0] }}>{color[1]}</h5>
      <button onClick={Red}>빨간색</button>
      <button onClick={Blue}>파란색</button>
    </>
  );
}

export default Practice3;
