import '../styles/Header.css';
import { Link } from "react-router-dom";

const Header = ( {openMenu, setOpenMenu} ) => {

    return (
        <div className="main-header">
            {openMenu && (
                <div className="backdrop" onClick={() => setOpenMenu(false)}></div>
            )}

            <div className="business-name">
                <Link to="/"><p>Kristine's Crystalline Treasures</p></Link>
            </div>
        
            <div className="nav-container">
                <div className="menu" onClick={() => setOpenMenu(!openMenu)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                
                <ul className={`navigation-items ${openMenu ? "open" : ""}`}>
                        <li>
                        <Link to="/" className="nav-item">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="nav-item">About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="nav-item">Contact</Link>
                    </li>
                </ul>  
            </div>
        </div>
    );
};

export default Header;