import React from "react";
import Links from "./Links";
import styles from "./Navigation.module.scss";
import amplitudoLogo from '../../images/Group 1 (1).svg'
import HamburgerMenu from '../../images/burger-menu-svgrepo-com (1).svg';

const Navigation = () => {
    return(
        <div className={styles.navigation__container}>
            <img src={amplitudoLogo} alt='logo'></img>
            <Links/>
            <img className={styles.mobile} src={HamburgerMenu} alt="menu" />
        </div>
    )
}

export default Navigation;