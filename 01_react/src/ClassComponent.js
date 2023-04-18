// import React from "react";
// class ClassComponent extends React.Component {}

import { Component } from "react";
import PropTypes from "prop-types"; //오류 검출

class ClassComponent extends Component {
  //클래스혈 컴포넌트 render() 함수 필수
  render() {
    const { text } = this.props; //객체 구조 분해 할당

    console.log(text);

    return (
      <div>
        <button onClick={valid}>버튼</button>
      </div>
    );
  }
}

//default 값 지정
ClassComponent.defaultProps = {
  text: "이건 기본 text prop입니다",
  //   age: "11",
};
function valid() {
  console.log("콘솔 띄우기 성공");
}

//주의) [p]ropTypes 소문자로 시작
// ClassComponent.propTypes = {
//   // 주의) [P]ropTypes 대문자
//   name: PropTypes.string.isRequired,
//   age: PropTypes.string,
// };

export default ClassComponent;
