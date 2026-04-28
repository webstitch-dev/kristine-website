import { Link } from "react-router-dom";
import '../styles/Footer.css';

const Footer = () => {
    return (
        <div className="footer-page">
            <div className="footer-top-container">
                <div className="footer-left">
                    <div className="footer-left-top">
                        {/* <img 
                            src={logoFooter}
                            id="footer-pic" 
                            alt="webstitch">
                        </img> */}
                        <p>Kristine's Crystalline Treasures</p>
                        {/* <p id="tag-line">tagline</p> */}
                    </div>
                  
                </div>
                <div className="footer-right">
                    <li><Link to="/" className="footer-link">home</Link></li>
                    <li><Link to="/about" className="footer-link">about</Link></li>
                    <li><Link to="/contact" className="footer-link">contact</Link></li>
                </div>  
            </div>
        </div>
    );
};

export default Footer;