import React from "react";
import MoreCards from "./MoreCards";
import "./SeeMore.css";

const cardText= ['Mobile apps development', 'Website development', 'SaaS'];
const SeeMore = () => {
    return(
        <>
            <h2>You might be interested</h2>
            <div className="see_more__cards--container"> 
                <MoreCards text={cardText}/>
            </div>
        </>
    )
}

export default SeeMore;