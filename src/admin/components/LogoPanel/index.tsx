import React from "react";
import './style.css';
import logo from "../../assets/img/logo.png";
const LogoPanel = ()=>{
    return (
        <div className="LogoPanel">
            <img
                src={logo}
                alt="logo"
                

            />
        </div>
    )
};

export default LogoPanel;