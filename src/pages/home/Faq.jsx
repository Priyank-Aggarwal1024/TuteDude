import React from 'react';
import '../../styles/faq.css'
function Faq(props) {
    return (
        <section className="section faq">
            <h2 className="faq-heading">
                Got Questions? <span className="faq-pink">Find your Answers Below!</span>
            </h2>
            <div className="faq-cards">
                <div className="faq-card">
                    <input type="checkbox" name="faq1" id="faq1" />
                    <label htmlFor="faq1" className="faq-label">
                        <p className="faq-ques">Intro to figma</p>
                        <p className="faq-plus">+</p>
                        <p className="faq-minus">-</p>
                    </label>
                    <p className="faq-ans">
                        Tutedude provides you the professional curated content by Indian  instructors along with live doubt solving and personal one to one  mentorship which you won't find anywhere else.

                        And amazingly, you learn for Free if you are enrolled  under 100% Refund offer.
                    </p>
                </div>
                <div className="faq-card">
                    <input type="checkbox" name="faq1" id="faq2" defaultChecked />
                    <label htmlFor="faq2" className="faq-label">
                        <p className="faq-ques">Intro to figma</p>
                        <p className="faq-plus">+</p>
                        <p className="faq-minus">-</p>
                    </label>
                    <p className="faq-ans">
                        Tutedude provides you the professional curated content by Indian  instructors along with live doubt solving and personal one to one  mentorship which you won't find anywhere else.

                        And amazingly, you learn for Free if you are enrolled  under 100% Refund offer.
                    </p>
                </div>
                <div className="faq-card">
                    <input type="checkbox" name="faq1" id="faq3" />
                    <label htmlFor="faq3" className="faq-label">
                        <p className="faq-ques">Intro to figma</p>
                        <p className="faq-plus">+</p>
                        <p className="faq-minus">-</p>
                    </label>
                    <p className="faq-ans">
                        Tutedude provides you the professional curated content by Indian  instructors along with live doubt solving and personal one to one  mentorship which you won't find anywhere else.

                        And amazingly, you learn for Free if you are enrolled  under 100% Refund offer.
                    </p>
                </div>
                <div className="faq-card">
                    <input type="checkbox" name="faq1" id="faq4" />
                    <label htmlFor="faq4" className="faq-label">
                        <p className="faq-ques">Intro to figma</p>
                        <p className="faq-plus">+</p>
                        <p className="faq-minus">-</p>
                    </label>
                    <p className="faq-ans">
                        Tutedude provides you the professional curated content by Indian  instructors along with live doubt solving and personal one to one  mentorship which you won't find anywhere else.

                        And amazingly, you learn for Free if you are enrolled  under 100% Refund offer.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Faq;