import React, { useState } from "react";
import './style.css';
import menuSale from "../../assets/img/cart.png";
import homeIcon from "../../assets/img/home.png";

const SideBar = () => {

  return (
    <div className="sidebar">
        <div className="sidebar_item">
        <img src={homeIcon} alt="home" />
        <span>Inicio</span>
      </div>
      <div className="sidebar_item">
        <img src={menuSale} alt="Vendas" />
        <span>Vendas</span>
      </div>
      <div className="sidebar_item">
        <img src={require("../../assets/img/list.png")} alt="Orçamentos" />
        <span>Orçamentos</span>
      </div>
    </div>
  );
};

export default SideBar;

