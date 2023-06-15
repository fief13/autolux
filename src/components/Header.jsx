import React from "react";
import { Link, NavLink } from "react-router-dom";


//images
import logo from "../assets/images/logo (1).svg"

const Header = () => {
  return (
    <section className="header">
      <div className="container">
        <div className="row">
          <div className="autoBox">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <nav className="navBar">
              <ul className="navList">
                <li className="navItem">
                  <NavLink to="/about">HAQQIMIZDA</NavLink>
                </li>
                <li className="navItem">
                  <NavLink to="/brends">BRENDLƏR</NavLink>
                </li>
                <li className="navItem">
                  <NavLink to="/service">SERVİS</NavLink>
                </li>
                <li className="navItem">
                  <NavLink to="/discount">KAMPANİYALAR</NavLink>
                </li>
                <li className="navItem">
                  <NavLink to="/news">XƏBƏRLƏR</NavLink>
                </li>
                <li className="navItem">
                  <NavLink to="/vakancies">VAKANSİYALAR</NavLink>
                </li>
                <li className="navItem">
                  <NavLink to="/getInTouch">ƏLAQƏ</NavLink>
                </li>
                <li className="navItem">
                  <NavLink to="+994012983">
                    <span></span>(012) 983
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
