import React from "react";
import MoreCards from "./MoreCards";
import styles from "./SeeMore.module.scss";

const cardText= ['Mobile apps development', 'Website development', 'SaaS'];
const SeeMore = ({className}) => {
    return(
        <>
        <div className={className}>
            <h2>You might be interested</h2>
            <div className={styles.see_more__container}> 
                <MoreCards text={cardText}/>
            </div>
        </div>
        </>
    )
}

export default SeeMore;