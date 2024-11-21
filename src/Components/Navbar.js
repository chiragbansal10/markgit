import React from 'react';
import "../Styles/Navbar.css";
import yeal from '../yael.jpg';
import Capture from '../Capture.jpg';
import logo from '../logo.jpg';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Company Logo" className="company-logo" />
        <span className="vertical-line"></span>
        <button className="nav-button"> <span className="vertical-line"></span> My Apps <i className="fas fa-caret-down"></i></button>
        <span className="vertical-line"></span>
        <button className="nav-button">Home</button>
        <span className="vertical-line"></span>
        <button className="nav-button">Explore</button>
        <span className="vertical-line"></span>
        <input type="text" placeholder="Search for contacts" className="search-bar" />
      </div>
      <div className="navbar-right">
      <i className="fas fa-bell icon bell-icon" />
        <i className="fas fa-envelope icon bell-icon"></i>
        {/* <i className="fas fa-user-friends icon"></i> */}
        <img src={Capture} alt="User Avatar" className="bell-icon" />
        <img src={yeal} alt="User Avatar" className="user-avatar" />
        <span className="username">Test Addison-Brown</span>
        <button className="action-button create">Create</button>
        <button className="action-button upgrade">Upgrade</button>
        <button className="action-button more">More</button>
      </div>
    </div>
  );
};

export default Navbar;
