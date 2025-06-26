import { useState } from "react";
import { Link } from "react-router-dom";
import iconMoon from "../assets/images/icon-moon.svg";
import iconSun from "../assets/images/icon-sun.svg";
import avatar from "../assets/images/image-avatar.jpg";
import { useTheme } from "../utils/ThemeContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <Link to="/" className="header__avatar-link">
        <img
          src={avatar}
          alt="My photo"
          className="header__avatar"
          title="My personal blog"
        />
      </Link>

      <button id="hamburger-button" onClick={toggleMenu}>
        <img
          src={`/src/assets/images/${
            isMenuOpen ? "x-close.png" : "menu-01.png"
          }`}
          alt="Menu"
        />
      </button>

      <nav className={`header__navbar ${isMenuOpen ? "show" : ""}`}>
        <ul className="header__list">
          <li className="header__item">
            <Link to="/" className="header__item-link">
              Home
            </Link>
          </li>
          <li className="header__item">
            <Link to="/blog" className="header__item-link">
              Blog
            </Link>
          </li>
          <li className="header__item">
            <Link to="/about" className="header__item-link">
              About
            </Link>
          </li>
          <li className="header__item">
            <Link to="/newsletter" className="header__item-link">
              Newsletter
            </Link>
          </li>
        </ul>
      </nav>

      <button className="header__toggle" onClick={toggleTheme}>
        <img
          src={isDarkMode ? iconSun : iconMoon}
          alt="Change theme dark/light"
          title="Change theme dark/light"
          className="header__toggle-img"
        />
      </button>
    </header>
  );
};

export default Header;
