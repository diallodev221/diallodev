import { Link } from "react-router-dom";
import { useTheme } from "../theme/useTheme";

import data from '../data.json';
import { Moon, Sun } from "lucide-react";
const { logo} = data;

type NavLink = {
  href: string;
  label: string;
};

const navLinks: NavLink[] = [
  { href: "#services", label: "Services" },
  { href: "#works", label: "Works" },
  { href: "#resume", label: "Resume" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const Header = ({
  isSticky = false,
  isDarkMode,
  toggleTheme,
}: {
  isSticky?: boolean;
  isDarkMode: boolean;
  toggleTheme: () => void;
}) => (
  <header
    className={`tj-header-area ${
      isSticky ? "header-2 header-sticky sticky-out" : "header-absolute"
    }`}
  >
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex flex-wrap align-items-center">
          {/* Logo Section */}
          <div className="logo-box">
            <Link to="/" aria-label="Go to homepage">
              <img src={logo} alt="Diallo Dev Logo" width={60}  />
            </Link>
          </div>

          {/* Contact Info */}
          <div className="header-info-list d-none d-md-inline-block">
            <ul className="ul-reset">
              <li>
                <Link
                  to="mailto:saifoulaye.diallo0512@gmail.com"
                  aria-label="Send email to Diallo Dev"
                >
                  saifoulaye.diallo0512@gmail.com
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Menu */}
          <div className="header-menu">
            <nav>
              <ul>
                {navLinks.map((navLink) => (
                  <li key={navLink.href}>
                    <Link
                      className="font-medium"
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

          {/* Call-to-Action Button */}
          <div className="header-button">
            <Link
              to="#contact"
              className="tj-btn-primary"
              aria-label="Contact Diallo Dev for hiring"
            >
              Hire me!
            </Link>
          </div>
          {/* Theme Toggle Button */}
          <div className="theme-toggle ml-auto">
            {isDarkMode ? (
              <Sun
                onClick={toggleTheme}
                aria-hidden="true"
                aria-label={`Switch to ${isDarkMode ? "dark" : "light"} mode`}
              />
            ) : (
              <Moon
                onClick={toggleTheme}
                aria-hidden="true"
                aria-label={`Switch to ${isDarkMode ? "dark" : "light"} mode`}
              />
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="menu-bar d-lg-none">
            <button aria-label="Toggle menu">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
);

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Header
        isSticky={true}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />
    </>
  );
};

export default Navbar;
