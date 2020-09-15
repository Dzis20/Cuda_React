import React from 'react';
import './style.css';
import './media.css';
import team from './img/photo-team.png';


function Aboutus() {
    return(
<div className="about-us">
        <div className="container">
            <h2>What people say about us</h2>
            <p className="par">Our clients love us!</p>
            <div className="about-us-list">
                <div className="about-us-row">
                    <div className="about-us-item">
                        <div className="about-us-img">
                        <img src={team} />
                        </div>
                        <div className="about-us-text">
                            <p><i>“Nullam dapibus blandit orci, viverra<br />gravida dui lobortis eget. Maecenas<br />fringilla urna eu nisl scelerisque.”</i></p>
                            <site>Chanel Iman</site><br />
                            <span>CEO of Pinterest</span>
                        </div>
                    </div>
                    <div className="about-us-item">
                        <div className="about-us-img">
                        <img src={team} />
                        </div>
                        <div className="about-us-text">
                            <p><i>“Vivamus luctus urna sed urna ultricies<br />ac tempor dui sagittis. In condimentum<br />facilisis porta.”</i></p>
                            <site>Adriana Lima</site><br />
                            <span>Founder of Instagram</span>
                        </div>
                    </div>
                </div>
                <div className="about-us-row">
                    <div className="about-us-item">
                        <div className="about-us-img">
                        <img src={team} />
                        </div>
                        <div className="about-us-text">
                            <p><i>“Vivamus luctus urna sed urna ultricies<br />actempor dui sagittis. In condimentum<br />facilisis porta.”</i></p>
                            <site>Anne Hathaway</site><br />
                            <span>Lead Designer at Behance</span>
                        </div>
                    </div>
                    <div className="about-us-item">
                        <div className="about-us-img">
                        <img src={team} />
                        </div>
                        <div className="about-us-text">
                            <p><i>“Phasellus non purus vel arcu tempor<br />commodo. Fusce semper, purus vel luctus<br />molestie, risus sem cursus“</i></p>
                            <site>Emma Stone</site><br />
                            <span>Co-Founder of Shazam</span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    )
}

export default Aboutus;