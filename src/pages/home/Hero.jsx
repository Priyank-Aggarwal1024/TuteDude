import React from 'react';
import Hat from '../../assets/Graduation hat.png'
import Star from '../../assets/award_star.png'
import Interrogation from '../../assets/fi-br-interrogation.png'
import Vector from '../../assets/Vector.png'
import '../../styles/hero.css'
function Hero(props) {
    return (
        <section className="hero section">
            <div className="overview-hero">
                <div className="hero-iit b-dark-yellow f-20"><img className="va-middle" src={Hat} alt="Graduate Hat" />An <b>IIT Delhi</b> Alumni Initiative</div>
                <h1 className='hero-heading'>Become an Expert in the field of <span className="text-pink">Data Science with 6 courses</span></h1>
                <p className='f-20'>A specially crafted Tech Kickstarter, with <b className='hero-bold'>5+ extensive online courses.</b></p>
                <div className="hero-button flex">
                    <p className="b-light-yellow bg-light-yellow hero-para-button"><img className="va-middle" src={Star} alt="Star" /> <span>Personal Mentorship</span></p>
                    <p className="b-light-yellow bg-light-yellow hero-para-button"><img className="va-middle" src={Star} alt="Star" /> <span>Internship Assistance</span></p>
                    <p className="b-light-yellow bg-light-yellow hero-para-button"><img className="va-middle" src={Star} alt="Star" /> <span>Industry Certified Courses</span></p>
                </div>
                <div className="hero-button-bottom flex">
                    <p className="text-white bg-pink enroll-now">Enroll Now for ₹2,999 <img className="va-middle" src={Vector} alt="Vector" /></p>
                    <p className="text-pink know-more">Know More <img className="va-middle" src={Interrogation} alt="Question mark" /></p>
                </div>
            </div>
            <div className="hero-right">
                <div className="hero-right-div-1">
                    <p className="f-20 c-f20">Professional Certificate - 6 Courses</p>
                    <p className="f-12 c-f12">Earn a career credential that demonstrates your expertise</p>
                </div>
                <div className="hero-card-horizontalline"></div>
                <div className="hero-right-div-2">
                    <p className="f-20 c-f20">4.8
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
                            <path d="M10.9223 11.1844L4.77633 11.8657C4.55467 11.8925 4.35867 12.0407 4.28517 12.2659C4.21167 12.491 4.28517 12.7255 4.4485 12.8737C6.2755 14.5409 9.02067 17.0375 9.02067 17.0375C9.01833 17.0375 8.267 20.6694 7.76767 23.0925C7.74386 23.2022 7.75247 23.3164 7.79243 23.4213C7.83239 23.5262 7.90198 23.6172 7.99274 23.6832C8.08349 23.7492 8.19148 23.7874 8.30356 23.7932C8.41564 23.7989 8.52698 23.7719 8.624 23.7155C10.7753 22.4929 13.9977 20.6542 13.9977 20.6542L19.369 23.7167C19.565 23.824 19.81 23.8217 20.0002 23.6829C20.0906 23.6169 20.1602 23.5262 20.2005 23.4217C20.2409 23.3173 20.2503 23.2034 20.2277 23.0937L18.9782 17.0375L23.5503 12.8772C23.6331 12.8019 23.6925 12.7043 23.7212 12.5961C23.75 12.4879 23.7469 12.3738 23.7125 12.2673C23.678 12.1608 23.6135 12.0665 23.5269 11.9957C23.4402 11.9249 23.3349 11.8805 23.2237 11.868C20.7643 11.5927 17.0765 11.1844 17.0765 11.1844L14.5297 5.54937C14.4835 5.44746 14.4089 5.36102 14.3149 5.30039C14.2208 5.23976 14.1113 5.20752 13.9994 5.20752C13.8875 5.20752 13.778 5.23976 13.684 5.30039C13.5899 5.36102 13.5154 5.44746 13.4692 5.54937L10.9223 11.1844Z" fill="#B73BBE" />
                        </svg>
                        <span className="f-12 c-f12">(124,32 reviews)</span>
                    </p>
                </div>
                <div className="hero-right-div-3">
                    <p className="f-20 c-f20">Anyone can Learn (IT/Non-IT)</p>
                    <p className="f-12 c-12">Pre-Requisites</p>
                </div>
                <div className="hero-right-div-4">
                    <p className="f-20 c-f20">18 Months</p>
                    <p className="f-12 c-12">Fees Back Validity </p>
                </div>
                <div className="hero-right-div-5">
                    <p className="f-20 c-f20">1350+ Students</p>
                    <p className="f-12 c-12">Already applied</p>
                </div>
                <div className="hero-card-horizontalline"></div>
                <div className="hero-right-div-6 w-100">
                    <p className="f-16 text-center text-pink">View all courses</p>
                </div>
            </div>
            <div className="hero-footer">
                <div className="hero-footer-card-2">
                    <p className="f-36 fw-600 gradient text-center">40K+</p>
                    <p className="f-20 text-center hero-footer-f500">Students Enrolled</p>
                </div>
                <div className="hero-footer-card-3">
                    <p className="f-36 fw-600 gradient text-center">20K+</p>
                    <p className="f-20 text-center hero-footer-f500">Student Projects</p>
                </div>
                <div className="hero-footer-card-4">
                    <p className="f-36 fw-600 gradient text-center">100%</p>
                    <p className="f-20 text-center hero-footer-f500">Internship Assistance</p>
                </div>
                <div className="hero-footer-card-5">
                    <p className="f-36 fw-600 gradient text-center">250K+</p>
                    <p className="f-20 text-center hero-footer-f500">Doubts Solved</p>
                </div>
            </div>
        </section>
    );
}

export default Hero;