import React, { useEffect, useState } from 'react';
import '../../styles/refund.css'
import Photo from "../../assets/image 533.png"
import Clock from "../../assets/clock.png"
function Refund(props) {
    const [value, setValue] = useState(25)

    const slider = (event) => {
        setValue(event.target.value)
    }
    const [step, setStep] = useState(true)
    useEffect(() => {
        if (window.innerWidth < 780) {
            setStep(false)

        }
    })
    const resize1 = (event) => {
        // console.log(event.target)
        if (window.innerWidth < 780) {
            setStep(false);
        }
        else {
            setStep(true);
        }
    }

    window.addEventListener('resize', resize1)
    return (
        <>
            <section className="refund">
                <h3 className="section-heading refund-heading text-gray">Don't miss out on this <span className="text-pink">limited-time opportunity</span> to learn for <span className="text-pink">Free!</span></h3>
                <div className="refund-card">
                    <h4 className="refund-offer text-white">100% Refund Offer 😎<div className="refund-design"></div></h4>
                    <div className="input">
                        <p className="seats">{value} Seats Left</p>
                        <div className="range">
                            <input type="range" min={0} max={100} defaultValue={25} id="range2" onChange={slider} className="range-input" style={{ background: `linear-gradient(to right, #FFC41B ${value}%, #9849FF 0%)` }} />
                        </div>

                    </div>
                    <p className="offer-end text-white f-20"><img src={Clock} alt="Clock" style={{ verticalAlign: "middle", marginRight: "10px" }} />Offer ends in 10:00Mins</p>
                </div>
                <div className="refund-step">
                    <h3 className="text-dark-pink refund-step-heading">How does it work?</h3>
                    <div className="refund-steps-list">
                        <div className="step-card">
                            <div className="step-button"><div className="strip-1"></div><div className="step-shape bg-pink">{step == true ? "Step" : null} 1</div></div>
                            <div className="step-box b-dark-pink">
                                <h3 className="step-card-heading f-20">
                                    Step 1 : Enroll into your favorite course for only ₹2999
                                </h3>
                                <img src={Photo} alt="Courses" />
                                <p className="card-bottom-text">Start Learning with <b>Lifetime Course Access.</b></p>
                            </div>
                        </div>
                        <div className="step-card">
                            <div className="step-button"><div className="strip-2"></div><div className="step-shape bg-pink">{step == true ? "Step" : null} 2</div></div>
                            <div className="step-box b-dark-pink">
                                <h3 className="step-card-heading f-20">
                                    Step 2: Complete Course & Assignments within 18 Months!
                                </h3>
                                <p className="card-badge flex"><span className="card-badge-value f-40">18</span><span className="badge-text text-dark-gray">months time from the date of enrollment</span></p>
                                <p className="card-bottom-text">Finish within <b>18 Months</b> to Qualify for Refund.</p>
                            </div>
                        </div>
                        <div className="step-card">
                            <div className="step-button"><div className="strip-3"></div><div className="step-shape bg-pink">{step == true ? "Step" : null} 3</div></div>
                            <div className="step-box b-dark-pink">
                                <h3 className="step-card-heading f-20">
                                    Step 3: Receive 100% Refund upon completion
                                </h3>
                                <p className="card-badge flex"><span className="card-badge-value f-40">100%</span><span className="badge-text text-dark-gray">Enrollment Fee is refunded</span></p>
                                <p className="card-bottom-text">Upon Course Completion within 2 Years, Get Your <b>₹2,999 Back.</b></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="refund-bottom">
                    <p className="refund-bottom-para">Get <span className="fw-700">lifetime course</span> access, Even after getting <span className="fw-700">100% refund.</span></p>
                </div>
            </section>

        </>
    );
}

export default Refund;