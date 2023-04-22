import { useState, useRef } from "react";

const Practice1 = () => {
  const [inputWriter, setInputWriter] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [comment, setComment] = useState([
    { id: 1, writer: "민수", title: "안뇽" },
    { id: 2, writer: "지민", title: "하이하이" },
    { id: 3, writer: "희수", title: "멋쟁이" },
  ]);

  const [searchType, setSearchType] = useState("writer");
  const [inputSearch, setInputSearch] = useState("");
  const [result, setResult] = useState([]);

  const writerInputElem = useRef();
  const titleInputElem = useRef();

  //input 빈값 체크 [true/false] 반환
  const checkInputValue = () => {
    if (inputWriter.trim().length === 0) {
      writerInputElem.current.focus();
      return false; // 아래 행 실행 안되도록함!
    }
    if (inputTitle.trim().length === 0) {
      titleInputElem.current.focus();
      return false;
    }
    return true;
  };
  const addComment = () => {
    // ====== ref 실습: writer, title input애서 빈값 있으면 focus ======
    if (!checkInputValue()) return; //false면 return

    console.log("버튼 클릭");

    const newData = {
      id: comment.length + 1,
      writer: inputWriter,
      title: inputTitle,
    };
    setComment([...comment, newData]);
    setInputWriter("");
    setInputTitle("");
  };

  const selectSearchType = (e) => {
    console.log("select 태그의 옵션이 변경되었음!");
    console.log("선택한 option 태그의 value", e.target.value);
    setSearchType(e.target.value);
  };

  const searchComment = () => {
    console.log("ttt");

    const searchResult = comment.filter((cmt) => {
      return cmt[searchType].includes(inputSearch);
    });
    console.log("검색결과>> ", searchResult);
    setResult(searchResult);
    setInputSearch("");
  };

  return (
    <div>
      <form>
        <label htmlFor="writer2">작성자:</label>
        <input
          ref={writerInputElem}
          autoFocus //처음부터 입력할 수 있도록 하는 요소
          id="writer2"
          type="text"
          name="writer"
          value={inputWriter}
          onChange={(e) => setInputWriter(e.target.value)}
        />
        <label htmlFor="title2">제목:</label>
        <input
          ref={titleInputElem}
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
      {/* ======= select 및 검색 =======*/}
      <br />
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

      {/* ======= 전체 댓글 목록 =======*/}

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
          {comment.map((cmt) => {
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

      {/* ======= 댓글 검색 결과 =======*/}
      <h3>댓글 검색 결과</h3>
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

export default Practice1;
