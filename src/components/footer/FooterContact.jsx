import React from "react";
import Logo from "../../images/Group 386 (1).svg";
import styles from "./Footer.module.scss";

const FooterContact = () => {
    return(
          <>
            <img class={styles.logo__name} src={Logo} alt="logo"/>
            <div class={styles.info}>
                <p>Boulevard of St. Petar Cetinjski 56</p>
                <p>Podgorica, Montenegro</p>
                <hr/>
                <p>info@amplitudo.me</p>
                <p>+382 20 223 244</p>
            </div>
          </>
    )
}

export default FooterContact;