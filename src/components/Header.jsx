import '../styles/Header.css';
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <div className="main-header">
      <div className="section-one">
        <div className="nav">
            <li>
                <Link to="/" className="nav-item">home</Link>
            </li>
            <li>
                <Link to="/about" className="nav-item">about</Link>
            </li>
            <li>
                <Link to="/contact" className="nav-item">contact</Link>
            </li>
        </div>
      </div>
    </div>
  );
};

export default Header;