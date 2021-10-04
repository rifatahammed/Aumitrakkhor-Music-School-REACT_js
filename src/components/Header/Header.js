import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.jpg";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="" />
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
