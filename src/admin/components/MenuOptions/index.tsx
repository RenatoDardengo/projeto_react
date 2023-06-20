import React, { useState } from "react";
import './style.css';
import menuSale from "../../assets/img/cart.png";
import homeIcon from "../../assets/img/home.png";



const MenuOptions = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState<string | null>(null);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleMenuClick = (menu: string) => {
        if (menu === 'Vendas') {
            setDropdownOpen(!dropdownOpen);
        } else {
            setDropdownOpen(false);
        }
        setSelectedMenu(menu);
    };

    const handleMenuCollapse = () => {
        setDropdownOpen(false);
    };

    return (
        <div>
            <div className={`sidebar_item ${selectedMenu === 'Inicio' ? 'selected' : ''}`}>
                <img src={homeIcon} alt="home" />
                <span onClick={() => { handleMenuCollapse(); handleMenuClick('Inicio') }}>Inicio</span>
            </div>
            <div className={`sidebar_item ${selectedMenu === 'Vendas' ? 'selected' : ''}`}>
                <img src={menuSale} alt="Vendas" />
                <span onClick={() => { handleMenuCollapse(); handleMenuClick('Vendas') }}>Vendas</span>
                {dropdownOpen && selectedMenu === 'Vendas' && (
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
                    <div className=" empty_space"></div>
                    <div className={`sidebar_item ${selectedMenu === 'Orçamentos' ? 'selected' : ''}`}>
                        <img src={require("../../assets/img/list.png")} alt="Orçamentos" />
                        <span onClick={() => { handleMenuCollapse(); handleMenuClick('Orçamentos') }}>Orçamentos</span>
                    </div>
                </>
            ) : (
                <div className={`sidebar_item ${selectedMenu === 'Orçamentos' ? 'selected' : ''}`}>
                    <img src={require("../../assets/img/list.png")} alt="Orçamentos" />
                    <span onClick={() => { handleMenuCollapse(); handleMenuClick('Orçamentos') }}>Orçamentos</span>
                </div>
            )}
        </div>
    );
};

export default MenuOptions;


