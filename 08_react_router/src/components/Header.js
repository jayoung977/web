import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="Header">
      <span>Router Tutorial</span>
      <div>
        {/* 브라우저 라우터를 찾아가서 경로에 해당하는 파일 실행 */}
        <Link to="/" className="menu-item">
          Home
        </Link>
        <Link to="/products" className="menu-item">
          Product
        </Link>
      </div>
    </header>
  );
};

export default Header;
