import React from 'react';
import './style.css';
import './media.css';



function Comment() {
    return (
        <div className="comment">
                <div className="container">
                    <h2>Get in touch</h2>
                    <p>1600 Pennsylvania Ave NW, Washington, DC 20500, United States of America. Tel: (202) 456-1111</p>
                    <form action="" className="comment">
                        <div class="comment-row-first">
                            <label for="name">
                                <input type="text" name="name" id="name" placeholder="Your Name:" required />
                            </label>
                            <label for="mail">
                                <input type="text" name="mail" id="mail" placeholder="Your Email:" required />
                            </label>
                        </div>
                        <div className="comment-row-second">
                            <label for="message">
                                <textarea name="message" id="message" cols="30" rows="10" placeholder="Your Message:"></textarea>
                            </label>
                        </div>
                        <div className="submit-btn">
                        <input type="submit" value="Send message" />
                        </div>
                    </form>
                </div>
            </div>
    )
}


export default Comment;