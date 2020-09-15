import React from 'react';
import './style.css';
import './media.css';
import team from './img/photo-team.png';
import facebook from './img/facebook.png';
import twitter from './img/twitter.png';
import mail from './img/mail.png';
import link from './img/link.png';

function Team() {
    return (
        <div className="team">
        <div className="container">
            <h2>Meet our beautiful team</h2>
            <p>We are a small team of designers and developers, who help brands with big ideas.</p>
            <div className="team-list">
                <div className="team-item">
                    <div className="team-item-img">
                        <img src={team} />
                    </div>
                    <div className="team-item-text">
                        <h3>Anne Hathaway</h3>
                        <p className="job">CEO / Marketing Guru</p>
                        <p>Lorem ipsum dolor sit amet,<br />consectetuer adipiscing elit,<br />sed diam nonummy nibh euismod tincidunt ut laoreet<br />dolore magna.</p>
                    </div>
                    <div class="team-item-social">
                        <a className="social social-fb" href="#"><img src={facebook} /></a>
                        <a className="social social-tw" href="#"><img src={twitter} /></a>
                        <a className="social social-in" href="#"><img src={link} /></a>
                        <a className="social social-ml" href="#"><img src={mail} /></a>
                    </div>
                    
                </div>
                <div className="team-item">
                    <div className="team-item-img">
                        <img src={team} />
                    </div>
                    <div className="team-item-text">
                        <h3>Kate Upton</h3>
                        <p className="job">Creative Director</p>
                        <p>Duis aute irure dolor in<br />in voluptate velit esse cillum<br />dolore fugiat nulla pariatur.<br />Excepteur sint occaecat non<br />diam proident.</p>    
                    </div>
                    <div className="team-item-social">
                    <a className="social social-fb" href="#"><img src={facebook} /></a>
                        <a className="social social-tw" href="#"><img src={twitter} /></a>
                        <a className="social social-in" href="#"><img src={link} /></a>
                    </div>
                    
                </div>
                <div className="team-item">
                    <div className="team-item-img">
                        <img src={team} />
                    </div>
                    <div className="team-item-text">
                        <h3>Olivia Wilde</h3>
                        <p className="job">Lead Designer</p>
                        <p>Nemo enim ipsam voluptas<br />sit aspernatur aut odit aut<br />fugit, sed quia consequuntur<br />magni dolores eos qui ratio-<br />ne voluptatem nesciunt.</p>    
                    </div>
                    <div className="team-item-social">
                    <a className="social social-fb" href="#"><img src={facebook} /></a>
                        <a className="social social-tw" href="#"><img src={twitter} /></a>
                        <a className="social social-in" href="#"><img src={link} /></a>
                        <a className="social social-ml" href="#"><img src={mail} /></a>
                    </div>
                    
                </div>
                <div className="team-item">
                    <div className="team-item-img">
                        <img src={team} />
                    </div>
                    <div className="team-item-text">
                        <h3>Ashley Greene</h3>
                        <p className="job">SEO / Developer</p>
                        <p>Sed ut perspiciatis unde<br />omnis iste natus error sit<br />voluptatem accusantium<br />doloremque laudantium,<br />totam rem aperiam.</p>    
                    </div>
                    <div className="team-item-social">
                    <a className="social social-fb" href="#"><img src={facebook} /></a>
                        <a className="social social-tw" href="#"><img src={twitter} /></a>
                        <a className="social social-ml" href="#"><img src={mail} /></a>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    )
}

export default Team;