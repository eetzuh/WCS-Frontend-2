import React from "react";
import Links from "./Links";
import "./Navigation.css";
import amplitudoLogo from '../../images/Group 1 (1).svg'

const Navigation = () => {
    return(
        <div className='navigation__container'>
            <img src={amplitudoLogo}></img>
            <Links/>
        </div>
    )
}

export default Navigation;