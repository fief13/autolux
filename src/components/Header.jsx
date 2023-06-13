import React from "react";
import { Link, NavLink } from "react-router-dom";

//icons
import {FaPhoneAlt} from "react-icons/fa";

const Header = () => {
  return (
    <section className="header">
      <div className="container">
        <div className="row">
          <div className="autoBox">
            <div className="logo">
              <Link to="/"></Link>
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
                  <NavLink to="+994012983"><span>{FaPhoneAlt}</span>(012) 983</NavLink>
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
