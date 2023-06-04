import React from "react";
import ProductCards from "./ProductCards";
import './Products.css'

const Products = () => {
    return(
        <div className='products__container'>
            <h3>Take a look at</h3>
            <p className="p">our products</p>
            <div className="products__cards--container">
                <ProductCards/>
            </div>
        </div>
    )
}

export default Products;