import { useState } from "react";

const UserInfo2 = () => {
  const [userInfo, setUserInfo] = useState([
    { id: 1, name: "코디", title: "하이루" },
    { id: 2, name: "윤소희", title: "방가방가" },
  ]);

  const [inputName, setInputName] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [inputSearch, setInputSearch] = useState("");
  const [searchInfo, setSearchInfo] = useState([]);

  const addInfo = () => {
    if (inputName.trim().length === 0 || inputTitle.trim().length === 0) return;

    const newUserInfo = userInfo.concat({
      id: userInfo.length + 1,
      name: inputName,
      title: inputTitle,
    });

    setUserInfo(newUserInfo);
    setInputName("");
    setInputTitle("");
  };
  const deleteUser = (id) => {
    const newUserInfo = userInfo.filter((obj) => obj.id !== id);
    setUserInfo(newUserInfo);
  };
  const activeEnter = (e) => {
    console.log(e.key);
    if (e.key === "Enter") addInfo();
  };

  const addSearch = () => {
    if (inputSearch.trim().length === 0) return;

    const searchUser = userInfo.filter((obj) =>
      obj.title.includes(inputSearch)
    ); //다르면 반환
    console.log("inputSearch>>", inputSearch);
    console.log("searchUser>>", searchUser);
    setSearchInfo(searchUser); //상태 업데이트
  };

  return (
    <>
      <fieldset>
        <label>작성자: </label>
        <input
          type="text"
          value={inputName}
          onChange={(e) => {
            setInputName(e.target.value);
          }}
          onKeyDown={(e) => activeEnter(e)}
        />
        <label> 제목: </label>
        <input
          type="text"
          value={inputTitle}
          onChange={(e) => {
            setInputTitle(e.target.value);
          }}
          onKeyDown={(e) => activeEnter(e)}
        />
        <button onClick={addInfo}>작성</button>
      </fieldset>
      <br />
      <select name="작성자">
        {
          <option value="none" selected disabled hidden>
            작성자
          </option>
        }
        {userInfo.map((obj) => (
          <option key={obj.id}>{obj.name}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="검색어"
        value={inputSearch}
        onChange={(e) => {
          setInputSearch(e.target.value);
        }}
        onKeyDown={(e) => activeEnter(e)}
      />
      <button onClick={addSearch}>검색</button>
      <br />
      <br />
      <table border={1} style={{ width: "500px" }}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>{/* TODO: comment state 반복 */}</tbody>

        <tbody>
          {userInfo.map((obj) => (
            <tr id={obj.id}>
              <td>{obj.id} </td>
              <td>{obj.title}</td>
              <td>{obj.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <br />
      {searchInfo.length > 0 && (
        <table border={1} style={{ width: "500px" }}>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>{/* TODO: comment state 반복 */}</tbody>

          <tbody>
            {searchInfo.map((obj) => (
              <tr id={obj.id}>
                <td>{obj.id} </td>
                <td>{obj.title}</td>
                <td>{obj.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default UserInfo2;
