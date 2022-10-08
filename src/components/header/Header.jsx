import { useState, useEffect } from "react";
import { Outlet, useNavigate, Link } from "react-router-dom";
import { NavLink } from "./NavLink";

import Ratepunk from "../../assests/Group 12.svg";
import { navLink } from "../../constant/constant";
import "./header.scss";

export const Header = () => {
  const navigate = useNavigate();
  const [showNavBar, setShowNavBar] = useState(0);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0 && window.innerWidth <= 768) {
        setScroll(1);
      } else {
        setScroll(0);
      }
    });
  }, []);
  const clickHandler = () => {
    setShowNavBar(0);
  };

  return (
    <>
      <header>
        <nav className={scroll === 0 ? "navBar" : "navBar sticky"}>
          <Link onClick={() => navigate("/")}>
            <img src={Ratepunk} alt="logo" />
          </Link>
          <ul className={showNavBar === 0 ? "navMenu" : "navMenu active"}>
            {navLink.map((link, i) => (
              <li key={i} className="navItem">
                <NavLink clickHandler={clickHandler} title={link.title} />
              </li>
            ))}
          </ul>
          <div
            className={showNavBar === 0 ? "hamburger" : "hamburger active"}
            onClick={() => setShowNavBar((old) => (old === 0 ? 1 : 0))}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </header>
      {/* <div className="header">
        <div className="container">
          <div className="row">
            <img
              className="logo"
              src={Ratepunk}
              alt="Ratepunk"
              onClick={() => navigate("/")}
            />
          </div>
          <div className="row">
            <ul className="links">
              <li>Chrome Extension</li>
              <li>Price Comparison</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
      </div> */}

      <Outlet />
    </>
  );
};
