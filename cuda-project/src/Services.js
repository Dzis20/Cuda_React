import React from 'react';
import './style.css';
import './media.css';
import flag from './img/Flag.png';
import pen from './img/pen.png';
import gear from './img/gear.png';
import rocket from './img/rocket.png';


function Services() {
    return (
<div className="services">
        <div className="container">
            <h2>Meet our beautiful team</h2>
            <p>We are a small team of designers and developers, who help brands with big ideas.</p>
            <div className="services-list">
                <div className="services-item">
                    <div className="services-item-img">
                        <img className="" src={flag} alt="Card image" />
                    </div>
                    <div className="services-item-text">
                        <h3><b>Branding</b></h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adi piscingelit qui blanditi praesentium.</p>
                    </div>
                </div>
                <div className="services-item">
                    <div className="services-item-img">
                        <img className="" src={pen} alt="Card image" />
                    </div>
                    <div className="services-item-text">
                        <h3><b>Design</b></h3>
                        <p>Sed ut perspiciatis undeomnis iste natus error sit voluptatem </p>
                    </div>
                </div>
                <div className="services-item">
                    <div className="services-item-img">
                        <img className="" src={gear} alt="Card image" />
                    </div>
                    <div className="services-item-text">
                        <h3><b>Development</b></h3>
                        <p>At vero eos et accusamus et iusto odio dignissimos qui blanditi praesentium.</p>
                    </div>
                </div>
                <div class="services-item">
                    <div className="services-item-img">
                        <img className="" src={rocket} alt="Card image" />
                    </div>
                    <div className="services-item-text">
                        <h3><b>Rocket science</b></h3>
                        <p>Et harum quidem rerum est et expedita distinctio. Nam libero tempore.</p>               
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}


export default Services;