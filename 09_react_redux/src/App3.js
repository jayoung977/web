//after redux 사용

import { useSelector, useDispatch } from "react-redux";
import "./styles/Box.css";

function App() {
  // useSelector() hook
  // : redux store의 state를 조회
  // -  인자로 콜백함수를 받음
  // - 콜백함수의 인자로 state를 받을 수 있음
  // const number = useSelector((state) => state.number);
  const number = useSelector((state) => state.counter.number); // { counter : { number: 9 }
  return (
    <div className="App">
      Redux Test
      <h1>number : {number}</h1>
      <Box1 />
    </div>
  );
}

const Box1 = () => {
  return (
    <div className="Box">
      <h2>Box1</h2>
      <Box2 />
    </div>
  );
};

const Box2 = () => {
  return (
    <div className="Box">
      <h2>Box2 </h2>
      <Box3 />
    </div>
  );
};

const Box3 = () => {
  const number = useSelector((state) => state.counter.number);

  // const number = useSelector((state) => {
  // console.log(state) //{number:9}
  // return(state.number)
  // });

  const isData = useSelector((state) => {
    // console.log(state); //{counter: {…}, isData: false}
    return state.isData;
  });

  const dispatch = useDispatch();

  return (
    <div className="Box">
      <h2>Box3: {number} </h2>
      <h3>isData는 {isData ? "true" : "false"}</h3>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "CHANGE" })}>CHANGE</button>
    </div>
  );
};

export default App;