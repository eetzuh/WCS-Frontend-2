import React from "react";
import Arrow from "../../images/Group 420 (2).svg";
import Map from "../../images/Group 391.svg";
import styles from "./Footer.module.scss";
import FooterContact from "./FooterContact";
import FooterMessage from "./FooterMessage";
import FooterSocials from "./FooterSocials";

import Facebook from "../../images/001-facebook (1).svg";
import Instagram from "../../images/Group 394.svg";
import LinkedIn from "../../images/Group 395.svg";
import Twitter from "../../images/twitter (1).svg";
import Behance from "../../images/Group 396.svg";

const socials= [{path: Facebook, name:'Facebook'}, {path:Instagram, name:'Instagram'}, {path: LinkedIn, name:'LinkedIn'}, {path:Twitter, name:'Twitter'}, {path:Behance, name:'Behance'}];

const Footer = () => {
    return(
        <footer>
            <p className={styles.services}>Interested in our services?</p>
            <div className={styles.arrow}>
                <img src={Arrow} alt="arrow" />
                <p>contact us</p>
            </div>
            <FooterMessage/>
            <div className={styles.dot}></div>
            <img className={styles.map} src={Map}/>
            <FooterContact/>
            <FooterSocials socials={socials}/>
            <p class={styles.copyright}>© All rights reserved 2019 Amplitudo Ltd.</p>
        </footer>
    )
}

export default Footer;