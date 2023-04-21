import { useState } from "react";

const UserInfo = () => {
  const [userInfo, setUserInfo] = useState([
    { id: 1, name: "코디", email: "codi@gmail.com" },
    { id: 2, name: "윤소희", email: "yoonsohee@gmail.com" },
  ]);

  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");

  const addInfo = () => {
    if (inputName.trim().length === 0 || inputEmail.trim().length === 0) return;

    const newUserInfo = userInfo.concat({
      id: userInfo.length + 1,
      name: inputName,
      email: inputEmail,
    });

    setUserInfo(newUserInfo);
    setInputName("");
    setInputEmail("");
  };
  const deleteUser = (id) => {
    const newUserInfo = userInfo.filter((obj) => obj.id !== id);
    setUserInfo(newUserInfo);
  };
  const activeEnter = (e) => {
    console.log(e.key);
    if (e.key === "Enter") addInfo();
  };

  return (
    <>
      <input
        type="text"
        value={inputName}
        onChange={(e) => {
          setInputName(e.target.value);
        }}
        onKeyDown={(e) => activeEnter(e)}
      />
      <input
        type="text"
        value={inputEmail}
        onChange={(e) => {
          setInputEmail(e.target.value);
        }}
        onKeyDown={(e) => activeEnter(e)}
      />
      <button onClick={addInfo}>등록</button>
      <ol>
        {userInfo.map((obj) => (
          <li key={obj.id} onDoubleClick={() => deleteUser(obj.id)}>
            {obj.name}: {obj.email}
          </li>
        ))}
      </ol>
    </>
  );
};

export default UserInfo;
