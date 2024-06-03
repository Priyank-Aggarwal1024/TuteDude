import React, { useEffect, useState } from 'react';
import '../../styles/company.css'
import Comp2 from '../../assets/download 2.png'
import Comp3 from '../../assets/download 3.png'
import Comp4 from '../../assets/download 4.png'
import Comp5 from '../../assets/download 5.png'
import Comp6 from '../../assets/download 6.png'
import Comp7 from '../../assets/download 7.png'
import Comp8 from '../../assets/download 8.png'
import Comp9 from '../../assets/download 9.png'
import Marquee from 'react-fast-marquee'
function Company(props) {

    return (
        <section className="companies-hiring bg-light-yellow">
            <Marquee>
                <div className="company-hiring-box">
                    <img src={Comp2} alt="Intuit" />
                </div>
                <div className="company-hiring-box">
                    <img src={Comp3} alt="Google" />
                </div>
                <div className="company-hiring-box">
                    <img src={Comp4} alt="Amazon" />
                </div>
                <div className="company-hiring-box">
                    <img src={Comp5} alt="Flipkart" />
                </div>
                <div className="company-hiring-box">
                    <img src={Comp6} alt="Myntra" />
                </div>
                <div className="company-hiring-box">
                    <img src={Comp7} alt="Microsoft" />
                </div>
                <div className="company-hiring-box">
                    <img src={Comp8} alt="Ola" />
                </div>
                <div className="company-hiring-box">
                    <img src={Comp9} alt="Virtusa" />
                </div>
            </Marquee>
            <h3 className="section-heading company-hiring-heading">Top Companier Hiring <span className="gradient">Data Scientists</span></h3>

        </section>
    );
}

export default Company;