// src/components/Header.js
import React from 'react';
import '../Styles/Header.css'; // Import custom CSS for Header

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-left">
        <i className="fas fa-home header-icon"></i>
        <i className="fas fa-bell header-icon"></i>
        <i className="fas fa-envelope header-icon"></i>
      </div>
      <div className="header-right">
        <input type="text" placeholder="Search for contacts" className="header-input" />
        <i className="fas fa-user-circle header-user-icon"></i>
        <button className="header-button create-btn">Create</button>
        <button className="header-button upgrades-btn">Upgrades</button>
        <button className="header-button home-btn">Home</button>
      </div>
    </header>
  );
};

export default Header;
