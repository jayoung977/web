//클래스형 컴포넌트 ref방법
import React from "react";
class RefSample3 extends React.Component {
  handleFocus = () => {
    // console.log(this); //현재 컴포넌트: RefSample3 {props: {…}, context: {…}, refs: {…}, updater: {…}, handleFocus: ƒ, …}
    // console.log(this.myInput.value); //input value 출력 (input 창에 입력한 값)
    this.myInput.focus();
  };
  render() {
    return (
      <>
        <p>클래스형 컴포넌트에서 버튼 클릭 시 input focusing</p>
        <input
          type="text"
          ref={(ref) => {
            this.myInput = ref;
          }}
        />
        <button onClick={this.handleFocus}>focus</button>
      </>
    );
  }
}

export default RefSample3;
