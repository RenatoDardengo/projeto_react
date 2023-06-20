import React, { useState } from "react";
import './style.css';
import menuSale from "../../assets/img/cart.png";
import homeIcon from "../../assets/img/home.png";

const MenuOptions=()=>{
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div>
            <div className="sidebar_item">
                <img src={homeIcon} alt="home" />
                <span>Inicio</span>
            </div>
            <div className="sidebar_item">
                <img src={menuSale} alt="Vendas" />
                <span onClick={toggleDropdown}>Vendas</span>
                {dropdownOpen && (
                    <div className="dropdown_menu">
                        <ul>
                            <li>Opção 1</li>
                            <li>Opção 2</li>
                            <li>Opção 3</li>
                        </ul>
                    </div>
                )}
            </div>
            {dropdownOpen ? (
                <>
                    <div className="sidebar_item empty_space"></div>
                    <div className="sidebar_item">
                        <img src={require("../../assets/img/list.png")} alt="Orçamentos" />
                        <span>Orçamentos</span>
                    </div>
                </>
            ) : (
                <div className="sidebar_item">
                    <img src={require("../../assets/img/list.png")} alt="Orçamentos" />
                    <span>Orçamentos</span>
                </div>
            )}
        </div>
    );

};

export default MenuOptions;