import React, { useState } from "react";
import './style.css';
import menuIcon from "../../assets/img/menu.png";

const NavBar = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  const handleToggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div className="navbar">
      <img
        src={menuIcon}
        alt="Menu"
        className={`menu-icon ${isSidebarExpanded ? 'expanded' : ''}`}
        onClick={handleToggleSidebar}
      />
      {/* Resto do conteúdo do NavBar */}
    </div>
  );
};

export default NavBar;
