import React from 'react'
import { NavLink,Link } from 'react-router-dom';
import "./FooterScreen.css";

const FooterScreen = () => {
  return (
    <div className="footer__container">
      <h1 id="footer__title">©Academlo 2022</h1>

      <div className="footer__iconsbox">
        <a href="https://www.instagram.com/">
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
      <div className="footer__iconsbox2">
        <a href="https://www.linkedin.com/">
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
      <div className="footer__iconsbox3">
        <a href="https://www.youtube.com">
          <i className="fa-brands fa-youtube"></i>
        </a>
      </div>
    </div>
  );
}

export default FooterScreen
