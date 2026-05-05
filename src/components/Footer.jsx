import { Link } from "react-router-dom";
import insta from "../assets/images/insta-logo.png";
import facebook from "../assets/images/fb-logo.png";
import '../styles/Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-left">
                <p>Kristine's Crystalline Treasures</p>

                <div className="socials">
                    <img src={insta} alt="instagram" />
                    <img src={facebook} alt="facebook" />
                </div>
            </div>
            <div className="footer-right">
                <ul className="footer-navs">
                    <li><Link to="/" className="footer-link">home</Link></li>
                    <li><Link to="/about" className="footer-link">about</Link></li>
                    <li><Link to="/contact" className="footer-link">contact</Link></li>
                </ul>
            </div>  
        </div>
    );
};

export default Footer;