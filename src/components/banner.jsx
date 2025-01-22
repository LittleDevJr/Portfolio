import React from 'react';
import "../style/banner.scss";

function Banner({ img, title, bannerClassName }) {
    return (
        <div className={`banner ${bannerClassName}`}>
            <img src={ img } alt='banner'></img>
            
        </div>
    );
}

export default Banner;