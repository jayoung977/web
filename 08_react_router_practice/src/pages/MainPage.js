import { useSearchParams } from "react-router-dom";
const MainPage = () => {
  // useSearchParams -> state와 사용 방법 유사
  // 하려는 것은 다크모드 변환
  const [searchParams, setSearchParams] = useSearchParams();
  // searchParams의 키값 중에 mode라는 키값이 있는지 확인
  console.log(searchParams.get("mode")); //출력 >> null
  return (
    //Dark모드 버튼 눌렀을 경우에만 클래스 Dark 추가되도록
    //Dark모드 아닐 때 MainPage null로 클래스 지정되버림(아래 코드))
    //<main className={`MainPage ${searchParams.get("mode")}`}>
    //join()사용 해서 MainPage null 안되게
    <main className={["MainPage", searchParams.get("mode")].join(" ")}>
      {/* <h1>여기는 홈!</h1> */}
      {/* http://localhost:3000/ ->  http://localhost:3000/?mode=Dark*/}
      {/* <button onClick={() => setSearchParams({ mode: "Dark" })}>
        다크모드
      </button> */}
    </main>
  );
};

export default MainPage;

//join() 배열 원소들은 ()안의 문자로 연결해서 문자열 출력
//const msg = ['dd','ss','aa']
//console.log(msg.join(' '))
//출력 >> dd ss aa
