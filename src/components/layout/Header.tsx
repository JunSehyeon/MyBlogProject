import {Link,NavLink} from "react-router-dom";
import "./Header.css"

function Header() {
    return (
        <header className="header">
            <div className="header-inner">
                {/* Logo */}
                <Link to="/" className="logo">
                    DevBlog
                </Link>

                {/* Navigation */}
                <nav className="nav">
                    <NavLink to="/" className="nav-item">
                        Home
                    </NavLink>
                    <NavLink to="/feed" className="nav-item">
                        Blog
                    </NavLink>
                    <NavLink to="/projects" className="nav-item">
                        Projects
                    </NavLink>
                    <NavLink to="/about" className="nav-item">
                        About
                    </NavLink>
                    <NavLink to="/contact" className="nav-item">
                        Contact
                    </NavLink>
                </nav>

                {/* Actions */}
                <div className="actions">
                    <Link to="/login" className="login-btn">
                        Login
                    </Link>
                    <Link to="/signup" className="signup-btn">
                        Sign Up
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;