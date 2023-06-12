import React from "react";
import Parrot from "../../images/Group 1052.png";
import styles from "./ContactUs.module.scss";

const ContactUs = ({className}) => {
    return(
        <div className={className}>
            <div className={styles.contact_us}>
                    <h3>Like what you see?</h3>
                    <p>Let's talk about it.</p>
                    <button>contact us</button>
                <img src={Parrot} alt="Parrot"></img>
            </div>
        </div>
    )
}

export default ContactUs;