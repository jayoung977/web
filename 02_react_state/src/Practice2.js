import { useState } from "react";

function Practice2() {
  const [count, setCount] = useState(0);

  const Increase = () => {
    setCount(count + 1);
  };
  const Decrease = () => {
    setCount(count - 2);
  };

  return (
    <>
      <h2>{"함수형 컴포넌트"}</h2>
      <h5>{count}</h5>
      <button onClick={Increase}>+1</button>
      <button onClick={Decrease}>-2</button>
    </>
  );
}

export default Practice2;
