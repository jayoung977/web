import { Component } from "react";
import PropTypes from "prop-types";

class ClassComponent extends Component {
  //state는 오브잭트 이다.
  //state는 동적으로 변하는 데이터를 담는다.
  state = {
    // counter: 0, //초기값 선언
    counter: this.props.age,
  };

  up = (name) => {
    console.log(name);
    // counter = counter + 1 //이렇게 작성하면 안됨
    // this.counter = this.counter + 1; //이렇게 작성해도 안됨
    // react에서는 값 직접 변경을 지양함
    // setState에서 값 변경 후 다시 렌더링
    this.setState({ counter: this.state.counter + 1 });
  };

  down = () => {
    // this.setState({ counter: this.state.counter - 1 });
    // 더 잘 작성하는 방법
    this.setState((value) => ({ counter: this.state.counter - 1 }));
  };
  render() {
    const { counter } = this.state; //render 함수 안에서만 구조분해할당 가능
    return (
      <div>
        <h1>Hello World, Class Component</h1>
        {/* <h5>{this.state.counter}</h5> */}
        <h5>{counter}</h5>
        {/* 클래스에서는 함수를 불러올 때 this.함수명 사용/ 함수() 하면 바로 호출이므로 사용x */}
        <button onClick={this.up}>숫자 업</button>
        {/* 만약 매개변수 있는 함수사용 시  ()=>{}*/}
        {/* <button onClick={() => { this.up("abc"); }}>숫자 업</button> */}
        <h5>{this.state.counter2}</h5>
        <button onClick={this.down}>숫자 다운</button>
      </div>
    );
  }
}

export default ClassComponent;
