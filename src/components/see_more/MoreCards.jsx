import React from "react";
import CardImage from "../../images/Group 1045 (1).svg";

const MoreCards = ({text}) => {
    return(
        <>
           {
            text.map((text, index) => {
                return <div className="see_more__card"> 
                    <img src={CardImage} alt="" />
                    <h5 key={index}>{text}</h5>
                    </div>
            })
           }
        </>
    )
}

export default MoreCards;