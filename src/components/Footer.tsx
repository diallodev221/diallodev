import { Link } from "react-router-dom";

import data from '../data.json';

const {links, name} = data;

const Footer = () => {
  return (
    <footer className="tj-footer-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="footer-logo-box">
              <Link to="/">
                <img src="src/assets/img/logo/logo-me.png" alt="" />
              </Link>
            </div>
            <div className="footer-menu">
              <nav>
                <ul>
                  {links.map((navLink) => (
                    <li key={navLink.href}>
                      <Link
                        to={navLink.href}
                        aria-label={`Navigate to ${navLink.label}`}
                        aria-current={
                          window.location.hash === navLink.href
                            ? "page"
                            : undefined
                        }
                      >
                        {navLink.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="copy-text">
              <p>
                &copy; 2024 All rights reserved by{" "}
                <Link to="/" target="_blank">
                  {name}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
