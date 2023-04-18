// import React from "react";
// class ClassComponent extends React.Component {}

import { Component } from "react";
import PropTypes from "prop-types"; //오류 검출

class ClassComponent extends Component {
  //클래스혈 컴포넌트 render() 함수 필수
  render() {
    // const name = "홍길동";
    console.log(this.props); // {} 객체
    const { name, age } = this.props; //객체 구조 분해 할당

    return (
      <div>
        <h1>Hello World, Class Component</h1>
        {/* <h5>{this.props.name}</h5>
        <h5>{this.props.age}</h5> */}
        <h5>{name}</h5>
        <h5>{age}</h5>
      </div>
    );
  }
}

//default 값 지정
ClassComponent.defaultProps = {
  name: "abc",
  age: "11",
};

//주의) [p]ropTypes 소문자로 시작
ClassComponent.propTypes = {
  // 주의) [P]ropTypes 대문자
  name: PropTypes.string.isRequired,
  age: PropTypes.string,
};

export default ClassComponent;
