import React from "react";
import Parrot from "../../images/Group 1052.png";
import "./ContactUs.css";

const ContactUs = () => {
    return(
        <div className='contact_us'>
            <h3>Like what you see?</h3>
            <p>Let's talk about it.</p>
            <button>contact us</button>
            <img src={Parrot}></img>
        </div>
    )
}

export default ContactUs;