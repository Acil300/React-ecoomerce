import React, { useRef } from "react";
import { NavLink,Link, useNavigate } from "react-router-dom";
import "./headerScreen.css";

const HeaderScreen = () => {
  const navbar = useRef();
  const clickMenuBurger = () => {
    navbar.current.classList.toggle("navbar-open");
  };



  return (
    <header className="header">
      <Link to="/">
        <h1 className="header__title">e-coomerce</h1>
      </Link>
      <div className="header__menuBurger" onClick={clickMenuBurger}>
        <i className="fa-solid fa-bars"></i>
      </div>
      <nav className="navbar" ref={navbar}>
        <div className="navbar__container">
          <ul className="navbar__list ">
            <li className="navbar__items">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "navbar__link-active navbar__links"
                    : "navbar__links"
                }
              >
                <i className="fa-solid fa-house"></i>
                <p className="navbar__title">Home</p>
              </NavLink>
            </li>
            <li className="navbar__items">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "navbar__link-active navbar__links"
                    : "navbar__links"
                }
              >
                <i className="fa-solid fa-user"></i>
                <p className="navbar__title">Login</p>
              </NavLink>
            </li>
            <li className="navbar__items">
              <NavLink
                to="/purchases"
                className={({ isActive }) =>
                  isActive
                    ? "navbar__link-active navbar__links "
                    : "navbar__links"
                }
              >
                <i className="fa-solid fa-store"></i>
                <p className="navbar__title">Purchases</p>
              </NavLink>
            </li>
            <li className="navbar__items">
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive
                    ? "navbar__link-active navbar__links"
                    : "navbar__links"
                }
              >
                <i className="fa-solid fa-cart-shopping"></i>
                <p className="navbar__title">Cart</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default HeaderScreen;
