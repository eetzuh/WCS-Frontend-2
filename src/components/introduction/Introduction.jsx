import React from "react";
import IntroductionImage from "../../images/Group 1045 (1).svg"
import './Introduction.css';

const Introduction = () => {
    return(
        <>
        <div className="introduction__container">
            <h1>Software development</h1>
            <img src={IntroductionImage} alt='introduction'/>
            <div className="introduction__text">
                <p>We are one of the few companies which create their own products, and we are proud to mention SHIFT and eTenderi. </p>
                <p>We make software according to your wishes and needs. Our team of dedicated programmers and IT professionals will create an easy-to-use solution for you, with unique user experience and attractive design.</p>
                <p>So far we have met the requirements of the following clients: Agency for electronical communications and postal services, Societe Generale bank, Ministry of Economy, Ministry of Justice, Volcano and others.</p>
            </div>
        </div>
        </>
    )
}

export default Introduction;