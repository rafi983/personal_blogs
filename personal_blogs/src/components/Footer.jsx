import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__copy">© 2025 Personal Blog - All rights reserved</p>

        <ul className="footer__list">
          <li className="footer__item">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              <img src="/src/assets/images/logo-github.svg" alt="GitHub" />
            </a>
          </li>
          <li className="footer__item">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              <img src="/src/assets/images/logo-linkedin.svg" alt="LinkedIn" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
