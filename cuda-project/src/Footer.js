import React from 'react';
import './style.css';
import './media.css';


function Footer() {
    return(
        <div className="footer">
        <div className="container">
            <div className="footer-nav">
                <ul className="footer-list">
                    <li className="footer-item"><a href="#" class="footer-link">Facebook</a></li>
                    <li className="footer-item"><a href="#" class="footer-link">Twitter</a></li>
                    <li className="footer-item"><a href="#" class="footer-link">Google+</a></li>
                    <li className="footer-item"><a href="#" class="footer-link">LinkedIn</a></li>
                    <li className="footer-item"><a href="#" class="footer-link">Behance</a></li>
                    <li className="footer-item"><a href="#" class="footer-link">Dribble</a></li>
                    <li className="footer-item"><a href="#" class="footer-link">GitHub</a></li>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default Footer;