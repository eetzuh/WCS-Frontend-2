import React from "react";
import styles from "./Navigation.module.scss";

const Links = () => {
        return(
            <>
            <div className={styles.links}>
                <a>Home</a>
                <a className={styles.link__services} href="index.html">Services</a>
                <a>StartUp</a>
                <a>Career</a>
                <a>Company</a>
                <a>Blog</a>
                <div className= {styles.lang__container}>
                    <a className={styles.lang}></a>
                </div>
            </div>
            </>
        )
}

export default Links;