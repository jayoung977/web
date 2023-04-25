import { useState, useMemo } from "react";

//평균값 계산 함수
//숫자를 [등록] 버튼을 틀릭할 때 뿐만 아니라
//input내용을 수정할 때도 getAverage함수가 호출되고 있음
// ('평균값 계산중 ..!')이 input 내용 수정할 떄마다 콘솔에 출력됨
//=> useMemo를 사용해서 최적화할 수 있음 , 등록 버튼만 눌렀을 떄 실행 되도록

const getAverage = (numbers) => {
  //numbers: 숫자 저장하고 있는 배열
  console.log("평균값 계산중 ...!");

  //만약 numbers 배열에 원소가 없다면 평균값은0
  if (numbers.length === 0) return 0;
  // numbers 배열에 모든 원소 더함
  const sum = numbers.reduce((a, b) => a + b);
  // 평균값을 계산하여 반환
  return sum / numbers.length;
};
const useMemoTest = () => {
  const [number, setNumber] = useState("");
  const [list, setList] = useState([]);

  const onChange = (e) => {
    setNumber(e.target.value);
  };

  const onInsert = () => {
    const newList = list.concat(parseInt(number));
    setList(newList);
    setNumber("");
  };
  // [after] useMemo hook 적용
  // 랜더링 과정에서 list 값이 변경될 때만 callback 함수를 실행 =>  [list]
  // useMemo() 요약
  // '수행한 연산의 결과 값을 기억' 함으로써 계산을 최소화함
  const avg = useMemo(() => {
    return getAverage(list);
  }, [list]);

  return (
    <>
      <h1>useMemo hook</h1>

      <input type="number" value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>

      <ul>
        {list.map((li, idx) => {
          return <li key={idx}>{li}</li>;
        })}
      </ul>
      {/* useMemo 사용전: <h1>평균값 : {getAverage(list)}</h1> */}
      <h1>평균값 : {avg}</h1>
    </>
  );
};

export default useMemoTest;
