import { useState } from "react";

// 버전1
// const Alphabet = () => {
//   const [alphabet, setAlphabet] = useState(["a", "p", "p", "l", "e"]); // 순서가 있으므로 배열로 초기값 설정
//   console.log(alphabet); //["a", "p", "p", "l", "e"]
//   return (
//     <>
//       <ol>
//
//         {/* <li>a</li>
//         <li>p</li>
//         <li>p</li>
//         <li>l</li>
//         <li>e</li> */}
//         {/* {alphabet.map((vlaue) => {
//           return <li>{vlaue}</li>;
//         })} */}
//         {/* 아래 코드 자주 사용 */}
//         {/* {alphabet.map((vlaue, idx) => (
//           <li >{vlaue}</li>
//         ))} */}
//         {/* 위 코드의 에러: each child in a list should have a unique "key" prop.
//          키 지정해줘야함 이유는 react가 정확히 어떤 요소가 변화하는지 알고 싶어해서-  */}
//         {/* {alphabet.map((vlaue, idx) => (
//           <li key={idx}>{vlaue}</li>
//         ))} */}
//         {/* 그러나 위 방식을 권장하지는 않음 그냥 상태에서 고유 값 지정을 권장함, 왜냐면 state지정-> 배열의 요소가 5개로 고정되는 것이 아님
//          만약 3번이 삭제되면 4번->3번 , 한번 삭제되면 끝까지 인덱스가 4번이어야하는데 역할을 제대로 못함 */}

//       </ol>
//     </>
//   );
// };

// 버전2
const Alphabet = () => {
  // alphabet state: 리스트에 대한 상태
  const [alphabet, setAlphabet] = useState([
    { id: 1, alpha: "a" },
    { id: 2, alpha: "p" },
    { id: 3, alpha: "p" },
    { id: 4, alpha: "l" },
    { id: 5, alpha: "e" },
  ]);
  //inputAlpha state: input에 넣는 값에 대한 상태
  const [inputAlpha, setInputAlpha] = useState("");
  console.log(alphabet);

  const addAlpha = () => {
    // concat(): 인자로 주어진 값을 기존 배열에 합쳐서 새로운 배열을 반환
    if (inputAlpha.trim().length === 0) return; //8. 공백일 경우 추가 안되도록함

    const newAlphabet = alphabet.concat({
      id: alphabet.length + 1,
      alpha: inputAlpha,
    });

    // console.log(newAlphabet);
    setAlphabet(newAlphabet); //2.리스트 상태 업데이트
    setInputAlpha(""); //3.추가 클릭시 인풋창 초기화
  };

  //5. 삭제기능 구현 -> filter (배열 모든 원소 순회해서 삭제요소 빼고 모든 요소 반환)
  //filter(): 콜백함수의 테스트를 통과하는 모든 요소를 모아서 "세로운 배열" 반환
  //true 요소 유지, false 요소 버림
  //=> alphabet state에서 매개변수로 받아오는 id와 배열 각 원소의 id가 같은 경우 빼고
  //   나머지를 모두 새로운 배열에 저장
  const deleteAlpha = (id) => {
    const newAlpha = alphabet.filter((obj) => obj.id !== id); //다르면 반환
    setAlphabet(newAlpha); //상태 업데이트
  };
  const activeEnter = (e) => {
    console.log(e.key); //어떤 키를 눌렀는지 확인 가능
    if (e.key === "Enter")
      //7.엔터쳐도 추가되도록, 한문장일 경우 if문 중괄호 생략 가능
      addAlpha();
  };

  return (
    <>
      <input
        type="text"
        value={inputAlpha}
        onChange={(e) => {
          setInputAlpha(e.target.value); //1.입력한 값으로 inputAlpha 값 변화
        }}
        onKeyDown={(e) => activeEnter(e)} //6.엔터쳐도 추가되도록
      />
      <button onClick={addAlpha}>추가</button> {/*0. addAlpha함수 생성*/}
      <ol>
        {alphabet.map((obj) => (
          <li key={obj.id} onDoubleClick={() => deleteAlpha(obj.id)}>
            {obj.alpha}
          </li> //4. 더블클릭시 이벤트 생성
        ))}
      </ol>
    </>
  );
};

export default Alphabet;
