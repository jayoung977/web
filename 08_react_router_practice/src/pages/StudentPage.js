import { useParams, useNavigate, useSearchParams } from "react-router-dom";
const StudentPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { name } = useParams();
  const navigate = useNavigate();

  if (name.indexOf("?") != -1) {
    setSearchParams({ name: "jisu" });
  }
  // new?name=jisu!
  return (
    <main className="StudentPage">
      <br />
      <h3>
        학생 이름은 <span style={{ color: "green" }}>{name}</span> 입니다
      </h3>
      <br />
      {searchParams.get("name") && (
        <h3>
          실제 이름은{" "}
          <span style={{ color: "red" }}> {searchParams.get("name")} </span>{" "}
          입니다
        </h3>
      )}

      <br />
      <button onClick={() => navigate(-1)}> 이전 페이지로 </button>
    </main>
  );
};

export default StudentPage;
