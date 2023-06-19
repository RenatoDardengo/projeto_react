import React, { useState } from "react";
import './style.css';
import menuIcon from "../../assets/img/menu.png";

const NavBar = ({ onMenuClick }: any) => {
  const handleMenuClick = () => {
    onMenuClick();
  };
 

  return (
    <div className="navbar">
      <img
        src={menuIcon}
        alt="Menu"
        onClick={handleMenuClick}
        
      />
     
    </div>
  );
};

export default NavBar;
