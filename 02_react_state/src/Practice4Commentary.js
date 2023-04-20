import { useState } from "react";
function Practice4Commentary() {
  const [visible, setVisible] = useState(true);
  const toggle = () => {
    setVisible(!visible);
  };
  return (
    <>
      <button onClick={toggle}>{visible ? "사라져라!" : "보여라!"}</button>
      <h1>{visible && "안녕하세요"}</h1>
    </>
  );
}

export default Practice4Commentary;
