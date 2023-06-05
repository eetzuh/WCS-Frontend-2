import React from "react";
import Arrow from "../../images/Group 420 (2).svg";
import Map from "../../images/Group 391.svg";
import "./Footer.css";
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
            <p className="footer__services">Interested in our services?</p>
            <div className="footer__contact_us--container">
                <img src={Arrow} alt="arrow" />
                <p className="footer__contact_us">contact us</p>
            </div>
            <FooterMessage/>
            <div className="footer__dot"></div>
            <img className="footer__map" src={Map}/>
            <FooterContact/>
            <FooterSocials socials={socials}/>
            <p class="footer__copyright">© All rights reserved 2019 Amplitudo Ltd.</p>
        </footer>
    )
}

export default Footer;