import React from "react";
import Logo from "../../images/Group 392 (1).svg";

import AngelEmoji from "../../images/sccpre.cat-angel-png-418236.png";
import styles from "./Footer.module.scss";

const FooterMessage = () => {
    return(
        <>
            <div className={styles.message}>
                <img className={styles.logo} src={Logo} alt="Logo" />
                <p>Hello from the center of the world!</p>
                <img className={styles.emoji} src={AngelEmoji} alt="Emoji" />
            </div>
            <div className={styles.point}></div>
            <div class={styles.dot}></div>
        </>
    )
}

export default FooterMessage;