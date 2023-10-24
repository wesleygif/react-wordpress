import React from 'react';
import './style.css';

function Banner() {
    return (
        <div className='bannerBox'>
            <img src='http://localhost/wordpress/wp-content/uploads/2023/10/Group-2126.png' alt="Banner Image" />
            <div className="centered-text">
                <h2>BLOG</h2>
                <p>Inovação e Tecnologia</p>
            </div>
        </div>
    )
}

export default Banner;
