// TODO: useState 불러오기
import { useState } from "react";

const Practice2Commentary = () => {
  const [inputWriter, setInputWriter] = useState(""); // 작성자 input state
  const [inputTitle, setInputTitle] = useState(""); // 제목 input state
  const [comment, setComment] = useState([
    { id: 1, writer: "민수", title: "안뇽" },
    { id: 2, writer: "지민", title: "하이하이" },
    { id: 3, writer: "희수", title: "멋쟁이" },
  ]); // 댓글 목록 배열 state

  // 검색 관련 state
  const [searchType, setSearchType] = useState("writer"); // 검색 타입 select 요소 value state
  const [inputSearch, setInputSearch] = useState(""); // 검색창 input state
  const [result, setResult] = useState([]); // 검색 결과 배열 state

  const addComment = () => {
    console.log("버튼 클릭");
    // TODO: comment state에 요소 추가
    const newData = {
      id: comment.length + 1,
      writer: inputWriter,
      title: inputTitle,
    }; //comment state 배열에 새로 추가할 요소
    //ver1. concat()
    // const newComment = comment.concat(newData); //input에 작성한 값을 추가한 새로운 배열

    //ver2. spread 연산자(...) 사용 - 보통 이걸 더 많이 사용
    // const newComment = [...comment, newData];
    // setComment(newComment);
    setComment([...comment, newData]);

    // TODO: input 초기화
    setInputWriter("");
    setInputTitle("");
  };
  //select - 검색어 [writer/title] 중 뭔지 searchType에 저장
  const selectSearchType = (e) => {
    console.log("select 태그의 옵션이 변경되었음!");
    console.log("선택한 option 태그의 value", e.target.value);
    // select option 상태 설정
    setSearchType(e.target.value);
  };

  //검색창에 입력한 검색어 filter 및 검색 결과 state 변경
  const searchComment = () => {
    console.log("ttt");
    // TODO: comment 배열 특정 조건에 맞는 것으로 filter
    const searchResult = comment.filter((cmt) => {
      // comment 배열 state에 대힌 각원소(객체)출력
      // console.log(cmt); //{id:1,title:xxx,writer:xxx},{id:2,...},{id:3,...}
      // [작성자/제목] 중 택 1시 해당 하는 것에 대한 내용 출력
      // 대괄호 표기법 - 변수에 키값이 저장되는 경우 점표기법 사용 불가시 사용됨
      // if (!cmt[searchType].includes(inputSearch)) {
      //   //false
      //   return null;
      // }
      //true
      // return cmt;
      return cmt[searchType].includes(inputSearch); // 엔터아니고 버튼 클릭해야함..
    });
    console.log("검색결과>> ", searchResult);
    // TODO: 검색 결과 state 설정
    setResult(searchResult);
    setInputSearch("");
  };

  return (
    // style={{ margin: "200px 0" }}
    <div>
      {/* 댓글 추가하는 폼 */}
      <form>
        <label htmlFor="wirter2">작성자:</label>{" "}
        {/*for 속성 대신 htmlFor를 써야 input의 id와 동일 시에 커서 올리면 작성되게 */}
        <input
          id="wirter2"
          type="text"
          name="writer"
          value={inputWriter}
          onChange={(e) => setInputWriter(e.target.value)}
        />
        <label htmlFor="title2">제목:</label>
        <input
          id="title2"
          type="text"
          name="title"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        />
        <button type="button" onClick={addComment}>
          작성
        </button>
      </form>

      {/* 검색하는 폼 */}
      <form>
        <select name="type" value={searchType} onChange={selectSearchType}>
          <option value="writer">작성자</option>
          <option value="title">제목</option>
        </select>

        <input
          type="text"
          name="search"
          placeholder="검색어 입력하세요"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <button type="button" onClick={searchComment}>
          검색
        </button>
      </form>

      <h3>전체 댓글 목록</h3>

      <table border={1} style={{ margin: "30px auto", width: "500px" }}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {/* TODO: comment state 반복 */}
          {comment.map((cmt) => {
            //cmt => {id:n, writer:xxx, title:xxx}
            return (
              <tr key={cmt.id}>
                <td>{cmt.id}</td>
                <td>{cmt.title}</td>
                <td>{cmt.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h3>댓글 검색 결과</h3>
      {/* TODO: result state 반복 */}
      {result.length > 0 ? (
        <table border={1} style={{ margin: "30px auto", width: "500px" }}>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {/* TODO: comment state 반복 */}
            {result.map((cmt) => {
              return (
                <tr key={cmt.id}>
                  <td>{cmt.id}</td>
                  <td>{cmt.title}</td>
                  <td>{cmt.writer}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <h5>검색 결과가 없습니다.</h5>
      )}
    </div>
  );
};

export default Practice2Commentary;
