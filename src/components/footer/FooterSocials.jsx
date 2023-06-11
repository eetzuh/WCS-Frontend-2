import React from "react";
import styles from "./Footer.module.scss";

const FooterSocials = ({socials}) => {
    return(
          <>
             <div class={styles.socials}>
                <p>Follow us on social media</p>
                <div class={styles.icons}>
                    {
                    socials.map((icon, index)=>{
                        return (
                            <img key={index} src={icon.path} alt={icon.name}></img>
                        )})
                    }
                </div>
            </div>
          </>
    )
}

export default FooterSocials;