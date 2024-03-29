import "./styles/Larva.scss";
import grass from "./img/grass.png";
function Larva() {
  return (
    <div className="larvar">
      <div className="body body1">
        <div className="eye eye-white">
          <div className="eye eye-black"></div>
        </div>
      </div>
      <div className="body body2"></div>
      <div className="body body3"></div>
      <div className="body body4"></div>
      <div className="body body5"></div>
      <div className="body body6"></div>
      <div>
        <img className="grass" src={grass} alt="풀" />
      </div>
    </div>
  );
}

export default Larva;
