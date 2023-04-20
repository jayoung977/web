import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";
import FunctionComponent2 from "./FunctionComponent2";
import HiComponent from "./HiComponent";
import Practice from "./Practice";
import Practice2 from "./Practice2";
import Practice3 from "./Practice3";
import Practice4 from "./Practice4";
import Practice3Commentary from "./Practice3Commentary";
import Practice4Commentary from "./Practice4Commentary";
function App() {
  const test = () => {
    console.log("콘솔체크");
  };
  return (
    <>
      {/* <ClassComponent age={13} /> */}
      {/* <FunctionComponent /> */}
      {/* <FunctionComponent2 /> */}
      {/* <HiComponent /> */}
      {/* <Practice /> */}
      {/* <Practice2 /> */}
      {/* <Practice3 /> */}
      {/* <Practice4 /> */}
      {/* <Practice3Commentary /> */}
      <Practice4Commentary />
    </>
  );
}
export default App;
