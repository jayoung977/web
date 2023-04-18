import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";
import Larva from "./Larva";
import "./App.css";
import Food from "./Food";
import image from "./Book.png";
function App() {
  return (
    <div>
      <Food />
      <div className="book">
        <h2 className="book1">이번주 베스트 셀러</h2>
        <img src={image} alt="book" />
        <br />
        <div className="book2">나의 하루는 4시 40분에 시작된다</div>
        <div className="book3">
          <ul>저자: 김유진</ul>
          <ul>판매가: 13,500원</ul>
          <ul>구분: 자기계발서</ul>
        </div>
      </div>
      <ClassComponent />
    </div>
  );
}

export default App;

{
  /* 이것은 div입니다.
      <h3>이것은 div안에있는 h3입니다.</h3>
      <h2>제 반려동물의 이름은 {name}입니다.</h2>
      <h2>
        {name}은 {animal}입니다.
      </h2>
      {3 + 5 == 8 ? "정답입니다!" : "오답입니다!"}
      <br />
      {a && b ? "a가 b보다 큽니다." : "error"}
      <div className="test">
        <h2>{title}</h2>
        <label>아이디:</label>
        <input type="text"></input>
        <br />
        <br />
        <label>비밀번호:</label>
        <input type="text"></input>
      </div>
      <div className="rainbow">
        <div className="red"></div>
        <div className="orange"></div>
        <div className="yellow"></div>
        <div className="green"></div>
        <div className="blue"></div>
        <div className="navy"></div>
        <div className="purple"></div>
      </div> */
}
// <>
//   {/* <Larva /> */}
//   {/* <Larva />  2개 사용 가능*/}
//   <ClassComponent name="홍길동" age="13" />
//   <ClassComponent name="성춘향" age="11" />
//   {/* 값을 안줘도 오류 발생이 안됨 -> PropTypes 하면 콘솔에 경고창 뜸 그러나 실행은 됨*/}
//   <ClassComponent />
//   <FunctionComponent name="둘리" age="300" />
//   <FunctionComponent />
// </>
