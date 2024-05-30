import React from 'react';
import '../../styles/navbar.css'
import { NavLink, useLocation, useParams } from 'react-router-dom';
import Logo from '../../assets/logo.png'
function Navbar(props) {

    return (
        <>
            <section className="navbar">
                <div className="nav-top">
                    <img src={Logo} alt="Brand Logo" />
                    <div className="nav-top-right">
                        <NavLink className="text-pink login" to="/login">Login</NavLink>
                        <NavLink className="bg-pink signup" to="/signup">Signup</NavLink>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Navbar;