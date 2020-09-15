import React from 'react';
import './style.css';
import './media.css';
import team from './img/photo-team.png';
import facebook from './img/facebook.png';
import twitter from './img/twitter.png';
import mail from './img/mail.png';
import link from './img/link.png';

function Skills() {
    return (
        <div class="skills">
        <div class="container">
            <h2>We got skills!</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod<br />tempor incididunt ut labore et dolore magna aliqua.</p>
            <div class="skills-list">
                <div class="skills-item">
                    <p class="blue-border border">90<span>%</span></p><br />
                    <p class="port-item">Web design</p>
                </div>
                <div class="skills-item">
                    <p class="red-border border">75<span>%</span></p><br />
                    <p class="port-item">HTML / CSS</p>
                </div>
                <div class="skills-item">
                    <p class="green-border border">70<span>%</span></p><br />
                    <p class="port-item">Graphic design</p>
                </div>
                <div class="skills-item">
                    <p class="orange-border border">85<span>%</span></p><br />
                    <p class="port-item">UI / UX</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Skills;