import React from "react";
import CardImage from "../../images/Group 1045 (1).svg";
import styles from "./SeeMore.module.scss";

const MoreCards = ({text}) => {
    return(
        <>
           {
            text.map((text, index) => {
                return <div className={styles.card}> 
                    <img src={CardImage}/>
                    <div className={styles.card__title}>
                        <h5 key={index}>{text}</h5>
                    </div>
                    </div>
            })
           }
        </>
    )
}

export default MoreCards;