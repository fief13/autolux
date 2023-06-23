import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

//images
import logo from "../assets/images/logo (1).svg";
import alfa from "../assets/images/alfa.png";
import abarth from "../assets/images/abarth.png";
import ferrari from "../assets/images/ferrari.png";
import landr from "../assets/images/landr.png";
import jaguar from "../assets/images/jaguar.png";
import aston from "../assets/images/aston.png";
import chrysler from "../assets/images/chrysler.png";
import fiat from "../assets/images/fiat.png";
import fiatp from "../assets/images/fiatp.png";
import dodge from "../assets/images/dodge.png";
import jeep from "../assets/images/jeep.jpg";
import phone from "../assets/images/phone-solid.svg";
import search from "../assets/images/magnifying-glass-solid.svg";

const Header = () => {
  const [autoBox, setAutoBox] = useState();

  const listenScrollEvent = (e) => {
    if (window.scrollY < 70) {
      return setAutoBox("autoBox");
    } else if (window.scrollY > 70) {
      return setAutoBox("autoBox2");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className={autoBox}>
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <nav className="navbar">
              <ul className="navList">
                <li className="navItem">
                  <NavLink className="itemLink" to="/about">HAQQIMIZDA</NavLink>
                </li>
                <li className="navItem dropdown-menu">
                  BRENDLƏR
                  <ul className="menu-content">
                    <li className="links">
                      <Link className="brand" to="/alfa">
                        <img src={alfa} alt="alfa" />
                      </Link>
                    </li>
                    <li className="links">
                      <Link className="brand" to="/abarth">
                        <img src={abarth} alt="abarth" />
                      </Link>
                    </li>
                    <li className="links">
                      <Link className="brand" to="/ferrari">
                        <img src={ferrari} alt="ferrari" />
                      </Link>
                    </li>
                    <li className="links">
                      <Link className="brand" to="/landr">
                        <img src={landr} alt="landr" />
                      </Link>
                    </li>
                    <li className="links">
                      <Link className="brand" to="/jaguar">
                        <img src={jaguar} alt="jaguar" />
                      </Link>
                    </li>
                    <li className="links">
                      <Link className="brand" to="/aston">
                        <img src={aston} alt="aston" />
                      </Link>
                    </li>
                    <li className="links">
                      <Link className="brand" to="/chrysler">
                        <img src={chrysler} alt="chrysler" />
                      </Link>
                    </li>
                    <li className="links">
                      <Link className="brand" to="/fiat">
                        <img src={fiat} alt="fiat" />
                      </Link>
                    </li>
                    <li className="links">
                      <Link className="brand" to="/fiatp">
                        <img src={fiatp} alt="fiatp" />
                      </Link>
                    </li>
                    <li className="links">
                      <Link className="brand" to="/dodge">
                        <img src={dodge} alt="dodge" />
                      </Link>
                    </li>
                    <li className="links">
                      <Link className="brand" to="/jeep">
                        <img src={jeep} alt="jeep" />
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="navItem">
                  <NavLink className="itemLink"to="/service">SERVİS</NavLink>
                </li>
                <li className="navItem">
                  <NavLink className="itemLink"to="/discount">KAMPANİYALAR</NavLink>
                </li>
                <li className="navItem">
                  <NavLink className="itemLink" to="/news">XƏBƏRLƏR</NavLink>
                </li>
                <li className="navItem">
                  <NavLink className="itemLink"to="/vakancies">VAKANSİYALAR</NavLink>
                </li>
                <li className="navItem">
                  <NavLink className="itemLink"to="/getInTouch">ƏLAQƏ</NavLink>
                </li>
                <li className="navItem">
                  <NavLink className="phoneItem" to="+994012983">
                    <span className="phone">
                      <img src={phone} alt="phone" />
                    </span>
                    (012) 983
                  </NavLink>
                </li>
                <li className="navItem">
                  <span className="search">
                    <img src={search} alt="search" fill="#fff" />
                  </span>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
