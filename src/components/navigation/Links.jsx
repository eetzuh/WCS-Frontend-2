import React from "react";

const Links = () => {
    return(
        <>
        <div className="navigation__links">
            <a>Home</a>
            <a href="index.html">Services</a>
            <a>StartUp</a>
            <a>Career</a>
            <a>Company</a>
            <a>Blog</a>
            <div class="navigation__lang--container">
                <a className="navigation__lang"></a>
            </div>
        </div>
        </>
    )
}

export default Links;