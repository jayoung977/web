import "./styles/Practice4Solution.scss";
function Practice4Solution() {
  return (
    <div className="Prob4">
      {/* 퍼블릭 폴더 내에서 이미지 불러오는 방법 */}
      <div>
        <img src={process.env.PUBLIC_URL + `/images/1.jpeg`} alt="1" />
      </div>
      <div>
        <img src={process.env.PUBLIC_URL + `/images/2.jpeg`} alt="2" />
      </div>
      <div>
        <img src={process.env.PUBLIC_URL + `/images/3.jpeg`} alt="3" />
      </div>
      <div>
        <img src={process.env.PUBLIC_URL + `/images/4.jpeg`} alt="4" />
      </div>
      <div>
        <img src={process.env.PUBLIC_URL + `/images/5.jpeg`} alt="5" />
      </div>
    </div>
  );
}

export default Practice4Solution;
