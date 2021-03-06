import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.jpg";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="top-banner">
        <h1> Aumitrakkhor Music School</h1>
        <img className="logo banner-image" src={logo} alt="" />
        <br />

        {/* <h3>Melody of your heart</h3> */}
      </div>

      <nav>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/billboard">Billboard</NavLink>
      </nav>
    </div>
  );
};

export default Header;
