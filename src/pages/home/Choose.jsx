import React from 'react';
import '../../styles/choose.css'
import Vector from '../../assets/Vector.png'

function Choose(props) {
    return (
        <section className="section choose">
            <h2 className="section-heading choose-heading">
                Why choose us ?
            </h2>
            <div className="choose-cards">
                <div className="choose-card choose-card-1">
                    <div className="choose-card-bg">1
                    </div>
                    <div>
                        <div className="choose-card-heading">100% Free
                            Learning
                        </div>
                        <div className="choose-card-about">On the courses enrolled within the 100% FeesBack offer through which you earn your enrollment fee back as reward
                        </div>
                    </div>
                </div>
                <div className="choose-card choose-card-6">
                    <div className="choose-card-bg">2
                    </div>
                    <div>
                        <div className="choose-card-heading">Lifetime Course
                            Access
                        </div>
                        <div className="choose-card-about">Get liftetime course access on each course that you enroll, and enjoy the benefit of mentoring wheneve you want
                        </div>
                    </div>
                </div>
                <div className="choose-card choose-card-2">
                    <div className="choose-card-bg">3
                    </div>
                    <div>
                        <div className="choose-card-heading">Structured
                            Course
                        </div>
                        <div className="choose-card-about">Learn from our structured pre recorded courses made by experts to meet industry needs
                        </div>
                    </div>
                </div>
                <div className="choose-card choose-card-3">
                    <div className="choose-card-bg">4
                    </div>
                    <div>
                        <div className="choose-card-heading">Instant Mentor
                            Support
                        </div>
                        <div className="choose-card-about">Personal mentors to guide and help you throughout your journey as a friend through chat, calls & screen sharing
                        </div>
                    </div>
                </div>
                <div className="choose-card choose-card-4">
                    <div className="choose-card-bg">5
                    </div>
                    <div>
                        <div className="choose-card-heading">Projects &
                            Certifications
                        </div>
                        <div className="choose-card-about">Build major projects which makes your resume stand apart alongwith  course completion certifications
                        </div>
                    </div>
                </div>
                <div className="choose-card choose-card-5">
                    <div className="choose-card-bg">6
                    </div>
                    <div>
                        <div className="choose-card-heading">Internship
                            Opportunities
                        </div>
                        <div className="choose-card-about">Get remote internship opportunities after the completion of the course along with dedicated assignments
                        </div>
                    </div>
                </div>

            </div>
            <div className="choose-enroll-div enroll-large-screen">
                <p className="text-white bg-pink enroll-now choose-enroll ">Enroll Now for ₹2,999 <img className="va-middle" src={Vector} alt="Vector" /></p>
            </div>
        </section >
    );
}

export default Choose;