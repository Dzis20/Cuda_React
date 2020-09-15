import React from 'react';
import './style.css';
import './media.css';
import logo from './img/logo.png';
import script from './script';


function Header() {

    return (
        <div className="header">
        <div className="container">
            <div className="header-top">
                <div className="header-logo">
                    <img src={logo} alt="" class="logo" />
                </div>
                <div className="header-burger" id="header-burger">
                    <span></span>
                </div>
                <div className="header-menu" id="header-menu">
                    <ul className="header-list">
                        <li className="header-list-item"><a href="" className="item-link">Home</a></li>
                        <li className="header-list-item"><a href="" className="item-link">About</a></li>
                        <li className="header-list-item"><a href="" className="item-link">Work</a></li>
                        <li className="header-list-item"><a href="" className="item-link">Blog</a></li>
                        <li className="header-list-item"><a href="" className="item-link">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="header-middle">
                <p>Hi there! We are the new kids on the block<br />and we build awesome websites and mobile apps.</p>
                <div className="header-btn">
                    <a href="#">work with us!</a>
                </div>
            </div>
        </div>
        <script src={script}></script>
    </div>
    
    )
}


export default Header;