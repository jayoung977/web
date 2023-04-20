import React from "react";
import { useState } from "react";
//1. 클래스형

class Practice1 extends React.Component {
  constructor() {
    super();
    this.state = {
      str: "Hello World!",
    };
  }

  changeStr = () => {
    this.setState({ str: "Goodbye World!" });
  };

  render() {
    return (
      <>
        <h1>{this.state.str}</h1>
        <button onClick={this.changeStr}>클릭</button>
      </>
    );
  }
}

// class Practice1 extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       str: "Hello World!",
//       value: true,
//     };
//   }

//   changeStr = () => {
//     this.setState({ value: !this.state.value });
//   };

//   render() {
//     return (
//       <>
//         <h1>{this.state.value ? this.state.str : "Goodbye World!"}</h1>
//         <button onClick={this.changeStr}>클릭</button>
//       </>
//     );
//   }
// }

//2.함수형
// const Practice1 = () => {
//   const [state, setState] = useState({ value: true });

//   const changeStr = () => {
//     setState({
//       value: !state.value,
//     });
//   };

//   return (
//     <>
//       <h1>{state.value ? "Hello World!" : "Goodbye World!"}</h1>
//       <button onClick={changeStr}>클릭</button>
//     </>
//   );
// };

export default Practice1;
