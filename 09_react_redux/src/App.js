//before redux

import { useState } from "react";
import "./styles/Box.css";
function App() {
  const [number, setNumber] = useState(100);

  // props로 3까지 넘겨야함
  const onIncrease = () => {
    setNumber(number + 1);
  };
  const onDecrease = () => {
    setNumber(number - 1);
  };
  return (
    <div className="App">
      Redux Test
      <Box1 number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
    </div>
  );
}
const Box1 = ({ number, onIncrease, onDecrease }) => {
  return (
    <div className="Box">
      <h2>Box1: {number}</h2>
      {/* box1,3 에서만 number 시용 */}
      <Box2 number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
    </div>
  );
};
// 컴포넌트 너무 많으면 왔다갔다해야해서 한파일에 작성함
const Box2 = ({ number, onIncrease, onDecrease }) => {
  return (
    <div className="Box">
      <h2>Box2:</h2>
      {/* box3에 넘겨주기 위해 1애서 받아와서 props로 3에 number 넘김 */}
      <Box3 number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
    </div>
  );
};

const Box3 = ({ number, onIncrease, onDecrease }) => {
  return (
    <div className="Box">
      <h2>Box3:{number}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  );
};
export default App;
