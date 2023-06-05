import React from "react";

const FooterSocials = ({socials}) => {
    return(
          <>
             <div class="footer__socials">
                <p>Follow us on social media</p>
                <div class="footer__icons">
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