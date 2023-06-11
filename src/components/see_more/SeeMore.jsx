import React from "react";
import MoreCards from "./MoreCards";
import styles from "./SeeMore.module.scss";

const cardText= ['Mobile apps development', 'Website development', 'SaaS'];
const SeeMore = () => {
    return(
        <>
            <h2>You might be interested</h2>
            <div className={styles.see_more__container}> 
                <MoreCards text={cardText}/>
            </div>
        </>
    )
}

export default SeeMore;