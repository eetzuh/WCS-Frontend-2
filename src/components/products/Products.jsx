import React from "react";
import ProductCards from "./ProductCards";
import styles from './Products.module.scss'

const Products = () => {
    return(
        <div className={styles.products__container}>
            <h3>Take a look at</h3>
            <p className={styles.p}>our products</p>
            <div className={styles.cards__container}>
                <ProductCards/>
            </div>
        </div>
    )
}

export default Products;