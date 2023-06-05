import React from "react";
import Logo from "../../images/Group 392 (1).svg";

import AngelEmoji from "../../images/sccpre.cat-angel-png-418236.png";
import "./Footer.css";

const FooterMessage = () => {
    return(
        <>
            <div className="footer__message">
                <img className="message__logo" src={Logo} alt="Logo" />
                <p>Hello from the center of the world!</p>
                <img className="message__emoji" src={AngelEmoji} alt="Emoji" />
            </div>
            <div className="footer__message--point"></div>
            <div class="footer__map--dot"></div>
        </>
    )
}

export default FooterMessage;