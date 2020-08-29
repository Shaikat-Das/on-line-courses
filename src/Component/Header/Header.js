import React from 'react';
import headerImage from '../.././img/head.jpg'
import './Header.css';
const Header = () => {
    return (
        <div>
            <nav className="navigation bg-primary justify-content-between">  
                <a href="/courses">Courses</a>
                <a href="/pricing">Pricing</a>
                <a href="/instructor">Instructor</a>
                <a href="reviewCart"> Review Cart</a>
                <a href="contactUs">ContactUs</a>
            </nav>
            <div className="headerImage">
            <img src={headerImage} alt=""/>
            </div>
            
        </div>
    );
};

export default Header;