import React from 'react';
import './style.css'
import SideBar from '../../components/SideBar';
import NavBar from '../../components/NavBar';
import MainPanel from '../../components/MainPanel';
import LogoPanel from '../../components/LogoPanel';


const Home=()=>{

    return (
        <div className='container'>
            <LogoPanel/>
            <NavBar/>
            <SideBar/>
            <MainPanel/>
        </div>
    );
}

export default Home;