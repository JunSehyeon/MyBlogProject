import {Link} from "react-router-dom";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

function Footer(){
    return(
        <footer className="footer">
            <div className="footer-inner">
                {/* logo */}
                <div className="footer-left">
                    <Link to="/" className="footer-logo">
                        DevBlog
                    </Link>
                    <p>
                        나만의 블로그
                    </p>
                </div>

                {/* icon */}
                <div className="footer-right">
                    <a href="https://github.com" target="_blank" rel="noreferrer">
                        <FaGithub/>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer">
                        <FaTwitter />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;