import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

export default function Navbar(){
    return(
        <nav className="navbar">
            <div className="logo">EuEuKota</div>
            <ul className="nav-links">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/About.js'>About</Link></li>
                <li><Link to='/Order'>Order</Link></li>
                <li><Link to='/Menu'>Menu</Link></li>
            </ul>    
        </nav>
    )
}