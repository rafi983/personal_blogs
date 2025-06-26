import React from "react";
import logoGitHub from "../assets/images/logo-github.svg";
import logoLinkedin from "../assets/images/logo-linkedin.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__copy">
          © 2025 Personal Blog - All rights reserved
        </p>

        <ul className="footer__list">
          <li className="footer__item">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              <img src={logoGitHub} alt="GitHub" />
            </a>
          </li>
          <li className="footer__item">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              <img src={logoLinkedin} alt="LinkedIn" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
