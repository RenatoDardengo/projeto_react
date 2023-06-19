
import React, { useState } from 'react';
import './style.css'
import SideBar from '../../components/SideBar';
import NavBar from '../../components/NavBar';
import MainPanel from '../../components/MainPanel';
import LogoPanel from '../../components/LogoPanel';


const Home=()=>{
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    const handleMenuClick = () => {
      setIsMenuClicked(!isMenuClicked);
    };

    return (
        <div className={`container ${isMenuClicked ? 'menu-clicked' : ''}`}>
      <LogoPanel />
      <NavBar onMenuClick={handleMenuClick} />
      <SideBar />
      <MainPanel />
    </div>
    );
}

export default Home;