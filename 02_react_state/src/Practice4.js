import { useState } from "react";
function Practice4() {
  const [message, setMessage] = useState("사라져라");
  const [bool, setBool] = useState(true);

  const onClick = () => {
    bool == false ? setBool(true) : setBool(false);
    bool == false ? setMessage("사라져라") : setMessage("보여라");
  };
  return (
    <>
      {/* 실무에서의 단축속성 사용법 : 로그인 성공시에 보이도록  */}
      <button onClick={onClick}>{message}</button>
      {bool && (
        <>
          {/* <button onClick={onClick}>{message}</button> */}
          <h1>안녕하세요</h1>
        </>
      )}
    </>
  );
}

export default Practice4;
