import React from "react";
import todoLogo from '../images/logo.png';

import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header__logo">
        <img src={todoLogo} alt="Logo"/>
        <span>t</span>
        <span>o</span>
        <span>d</span>
        <span>o</span>
      </div>
    </header>
  );
};

export default Header;
