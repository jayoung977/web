import { Component } from "react";

class Practice extends Component {
  state = {
    counter: 0, //초기값 선언
  };

  up = (name) => {
    // console.log(name);
    // this.setState({ counter: this.state.counter + 2});
    this.setState((value) => ({ counter: this.state.counter + 2 }));
  };

  down = () => {
    this.setState((value) => ({ counter: this.state.counter - 1 }));
  };
  render() {
    const { counter } = this.state; //render 함수 안에서만 구조분해할당 가능
    return (
      <div>
        <h2>{"클래스형 컴포넌트"}</h2>
        <h5>{counter}</h5>
        <button onClick={this.up}>+2</button>
        <button onClick={this.down}>- 1 </button>
      </div>
    );
  }
}

export default Practice;
