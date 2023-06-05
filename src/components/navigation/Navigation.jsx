import React from "react";
import Links from "./Links";
import "./Navigation.css";
import amplitudoLogo from '../../images/Group 1 (1).svg'
import HamburgerMenu from '../../images/burger-menu-svgrepo-com (1).svg';

const Navigation = () => {
    return(
        <div className='navigation__container'>
            <img src={amplitudoLogo}></img>
            <Links/>
            <img className="navigation__mobile" src={HamburgerMenu} alt="menu" />
        </div>
    )
}

export default Navigation;