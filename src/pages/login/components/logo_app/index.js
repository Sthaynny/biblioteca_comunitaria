import './style.css';

import React from "react";
import bannerLogin from '../../../../imgs/banner.png';

export const LogoApp = () =>{
    

    return <div id='div-banner'>
        <img id="banner" src={bannerLogin} />
    </div>
}