import React from "react";

// 잘 안사용
class ClassComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Codingon",
    };
    // 해결1
    // this.printConsole = this.printConsole.bind(this);
  }
  //해결1 : this.printConsole = this.printConsole.bind(this);
  //   printConsole() {
  //     // 코드 에러 이유: this를 못찾음 -> 해결1: constructor에서 .bind(this)로 해당 클래스를 정의해줌
  //     console.log("버튼 클릭! >>", this.state);
  //   }

  //해결2 : 화살표 함수로 변경
  printConsole = () => {
    console.log("버튼 클릭! >>", this.state);
  };
  //   ???
  printConsole2 = (msg) => {
    console.log(msg);
  };
  render() {
    return (
      <div>
        클래스형 컴포넌트에서 이벤트 사용해보기
        {/* 아래처럼 쓰면 에러남 class형 컴포넌트에서는 this. 써야함 
        <button onClick={printConsole}>print console</button> */}
        <button onClick={this.printConsole}>print console</button>
        {/*방법2 */}
        <button onClick={() => this.printConsole2("hihi")}>print msg</button>
      </div>
    );
  }
}
export default ClassComponent;
