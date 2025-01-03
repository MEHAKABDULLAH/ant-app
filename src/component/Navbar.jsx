// src/component/Navbar.jsx
import './Navbar.css';
import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">Jad<span>oo</span> </div>
            <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                <a href="#home">Destinations</a>
                <a href="#about">Hotels</a>
                <a href="#services">Flights</a>
                <a href="#portfolio">Bookings</a>
                <a href="#blog">Login</a>
                
                <button className="signup-button">Sign Up</button>
                <div className="dropdown">
                    <button className="dropbtn">Eng</button>
                    <div className="dropdown-content">
                        <a href="#">English</a>
                        <a href="#">Urdu</a>
                    </div>
                </div>
            </div>
            <button className="toggler" onClick={toggleMenu}>
                ☰
            </button>
        </nav>
    );
};

export default Navbar;