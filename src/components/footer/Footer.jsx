import React from "react";
import "./Footer.css";
import FooterContact from "./FooterContact";

const Footer = () => {
    return(
        <footer>
            <div className="footer__contact_us--container">
                <p>Interested in our services?</p>
                <p className="footer__contact_us">contact us</p>
            </div>
            <div>
                <FooterContact/>
            </div>
            <div>
                <p>Follow us on social media</p>
            </div>
        </footer>
    )
}

export default Footer;