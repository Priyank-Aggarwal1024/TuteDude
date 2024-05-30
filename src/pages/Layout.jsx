import React from 'react';
import './layout.css'
import Navbar from './home/Navbar';
import Hero from './home/Hero';
import Curriculum from './home/Curriculum';
import Refund from './home/Refund';
import Certificate from './home/Certificate';
import Company from './home/Company';
import Doubt from './home/Doubt';
import CareerOptions from './home/CareerOptions';
import Courses from './home/Courses';
import Choose from './home/Choose';
import Testimonials from './home/Testimonials';
import Faq from './home/Faq';
function Layout(props) {
    return (
        <div className="layout">
            <Navbar />
            <Hero />
            <Curriculum />
            <Certificate />
            <Refund />
            <Doubt />
            <CareerOptions />
            <Company />
            <Courses />
            <Choose />
            <Testimonials />
            <Faq />
        </div>
    );
}

export default Layout;