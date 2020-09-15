import React from 'react';
import './style.css';
import './media.css';
import macOne from './img/macbook-1.png';
import macTwo from './img/macbook-2.png';
import macThree from './img/macbook-3.png';
import macFour from './img/macbook-4.png';




function Portfolio() {
    return (
        <div className="portfolio">
        <div className="container">
            <h2>Our portfolio</h2>
            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet<br />consectetur, adipisci velit, sed quia non numquam</p>
            <div className="portfolio-nav">
                <ul>
                    <li><a href="#">All</a></li>
                    <li><a href="#">Web</a></li>
                    <li><a href="#">Apps</a></li>
                    <li><a href="#">Icons</a></li>
                </ul>
            </div>
            <div className="portfolio-list">
                <div className="portfolio-row">
                    <div className="portfolio-item">
                        <div className="portfolio-img">
                            <img src={macOne} />
                        </div>
                        <div className="portfolio-text">
                            <p>Isometric Perspective Mock-Up</p>
                        </div>
                    </div>
                    <div className="portfolio-item">
                        <div className="portfolio-img">
                        <img src={macTwo} />
                        </div>
                        <div className="portfolio-text">
                            <p>Time Zone App UI</p>
                        </div>
                    </div>
                </div>
                <div className="portfolio-row">
                    <div className="portfolio-item">
                        <div className="portfolio-img">
                        <img src={macThree} />
                        </div>
                        <div className="portfolio-text">
                            <p>Viro Media Players UI</p>
                        </div>
                    </div>
                    <div className="portfolio-item">
                        <div className="portfolio-img">
                        <img src={macFour} />
                        </div>
                        <div className="portfolio-text">
                            <p>Blog / Magazine Flat UI Kit</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="button-por">
                <div className="portfolio-btn">
                    <a href="#">Load more projects</a>
                </div>
            </div>
        </div>
    </div>
    )
}


export default Portfolio;