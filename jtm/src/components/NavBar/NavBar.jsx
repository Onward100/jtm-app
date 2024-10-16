import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/jtm-logo.png";
import { FaChevronDown } from "react-icons/fa";
import Hamburger from "hamburger-react";

export default function NavBar() {
  const [show, setShow] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [isClose, setIsClose] = useState(false);

  function handleClose() {
    setToggle(!toggle);
  }
  function handleChange() {
    setShow(!show);
  }

  function handleToggle() {
    setToggle((prevToggle) => !prevToggle);
  }

  return (
    <div>
      <div className="nav">
        <div className="navbar">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="hamburger-menu">
            <Hamburger toggled={toggle} toggle={handleToggle} />
          </div>
          {toggle && (
            <div className="nav-link mobile">
              <ul className="nav--links">
                <li onClick={handleClose}>
                  <Link className="links" to="/">
                    Home
                  </Link>
                </li>
                <li className="services-link" onClick={handleChange}>
                  Services <FaChevronDown />
                </li>
                {show && (
                  <ul id="dropdown-services" className="dropdown">
                    <li onClick={handleClose}>
                      <Link className="links" to="">
                        Podcast
                      </Link>
                    </li>
                    <li onClick={handleClose}>
                      <Link className="links" to="">
                        Meeting
                      </Link>
                    </li>
                    <li onClick={handleClose}>
                      <Link className="links" to="">
                        Bible debates
                      </Link>
                    </li>
                    <li onClick={handleClose}>
                      <Link className="links" to="">
                        Prayers
                      </Link>
                    </li>
                  </ul>
                )}
                <li onClick={handleClose}>
                  <Link className="links" to="/about">
                    About Us
                  </Link>
                </li>
                <li onClick={handleClose}>
                  <Link className="links" to="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          )}
          { /* Desktop Nav Links */}
          <div className="desktop">
              <ul className="nav--links">
                <li>
                  <Link className="links" to="/">
                    Home
                  </Link>
                </li>
                <li className="services-link" onClick={handleChange}>
                  Services <FaChevronDown />
                </li>
                {show && (
                  <ul className="dropdown">
                    <li>
                      <Link onClick={handleChange} className="links" to="">
                        Podcast
                      </Link>
                    </li>
                    <li>
                      <Link onClick={handleChange} className="links" to="">
                        Meeting
                      </Link>
                    </li>
                    <li>
                      <Link onClick={handleChange} className="links" to="">
                        Bible debates
                      </Link>
                    </li>
                    <li>
                      <Link onClick={handleChange} className="links" to="">
                        Prayers
                      </Link>
                    </li>
                  </ul>
                )}
                <li>
                  <Link className="links" to="/about">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="links" to="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          <div className="get-featured">
            <Link to="/featured" className="get-featured-link">
              Get featured
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
