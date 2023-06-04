import React from "react";
import CardImgLeft from "../../images/Group 1098@2x.png";
import CardImgRight from "../../images/Group 1911@2x.png";

const ProductCards = () => {
    return(
        <>
            <div className="products__card">
                <h5>Via</h5>
                <p>Business travel automatization software.</p>
                <img src={CardImgLeft}/>
            </div>
            <div className="products__card">
                <h5>Shift</h5>
                    <p>Central base of transfered mobile and fixed numbers.</p>
                    <img src={CardImgRight}/>
            </div>
        </>
    )
}

export default ProductCards;