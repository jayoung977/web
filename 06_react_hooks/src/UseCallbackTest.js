import { useState, useCallback } from "react";

const useCallbackTest = () => {
  const [text, setText] = useState("");
  // 매번 전체 렌더링 ->onChangeText다시 만듦
  // useCallback 사용시 함수 저장해서 다시 만들지 않도록함
  // useCallback()
  // 반복해서 생성되는 이벤트 핸들러 함수를 useCallback으로 감싸주면
  // 함수를 메모이제이션(기억)해서 컴포넌트가 다시 랜더링되더라도
  // 기억하고 있는 기존 함수를 그대로 사용
  // 실행 결과가 같으나 내부적으로 성능은 향상됨

  // useCallback vs useMemo
  // const memoizedCallback  = useCallback(function,deps)
  // const memoizedValue  = useMemo(() => function,deps)

  // useCallback: useMemo를 기반으로 만든 hook
  // 단, "함수를 사용할 때" 편의성을 증진시킨 hook

  //공통점: 성능 최적화
  //차이점:
  // - useMemo: "값"을 재사용
  // => 값의 재사용을 위해 전달된 함수를 실행하고 "그 결과"를 메모이제이션
  // - useCallback: "함수"를 재사용
  // => "함수의 재사용"을 위해 전달된 "함수 자체"를 메모이제이션
  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);
  return (
    <>
      <h1>UseCallback hook</h1>
      <input onChange={onChangeText} />

      <h2>작성한값:{text || "없음"}</h2>
    </>
  );
};

export default useCallbackTest;
