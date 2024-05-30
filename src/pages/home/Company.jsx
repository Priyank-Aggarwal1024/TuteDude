import React, { useEffect, useState } from 'react';
import '../../styles/company.css'
function Company(props) {
    const [string2, setString2] = useState("Data Scientist")

    useEffect(() => {
        if (window.innerWidth < 480) {
            setString2("Full Stack Developers")
        }
    })
    const resize1 = (event) => {

        if (window.innerWidth < 480) {
            setString2("Full Stack Developers")

        }
        else {
            setString2("Data Scientist")
        }
    }

    window.addEventListener('resize', resize1)
    return (
        <section className="companies-hiring bg-light-yellow">
            <h3 className="section-heading">Top Companier Hiring <span className="gradient">{string2}</span></h3>
            <div className="company-hiring-grid">
                <div className="company-hiring-box">Logo</div>
                <div className="company-hiring-box">Logo</div>
                <div className="company-hiring-box">Logo</div>
                <div className="company-hiring-box">Logo</div>
                <div className="company-hiring-box">Logo</div>
            </div>
        </section>
    );
}

export default Company;