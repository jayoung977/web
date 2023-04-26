import "./styles/Practice4.scss";
function Practice4() {
  const arr = [1, 2, 3, 4, 5];

  return (
    <div className="Images">
      {arr.map((value) => {
        return (
          <img
            src={process.env.PUBLIC_URL + `/images/${value}.jpeg`}
            alt={value}
          />
        );
      })}
    </div>
  );
}

export default Practice4;
