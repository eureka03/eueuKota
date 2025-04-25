import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import {useState} from 'react';

export default function Navbar(){
    const [isOpen,setIsOpen] = useState(false);
    const toggleMenu = () =>setIsOpen(!isOpen);
    const exitMenu = () =>setIsOpen(false);

    return(
        <nav className="navbar">
            <div className="navbar-container">
                <h1 className="logo">
                    <Link to="/">EuEu <span>Kota</span></Link>
                </h1>
                <div className={`nav-links ${isOpen?'open':''}`}>
                    {isOpen?
                        <div><p className='exit' onClick={exitMenu}>X</p></div>:<></>
                    }                       
                    <Link to='/'>Home</Link>
                    <Link to='/About'>About</Link>
                    <Link to='/Contact'>Contact</Link>
                    <Link to='/Menu'>Menu</Link>
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    <div className={`bar ${isOpen?'open':''}`}></div>
                    <div className={`bar ${isOpen?'open':''}`}></div>
                    <div className={`bar ${isOpen?'open':''}`}></div>
                </div>
            </div>  
        </nav>
    )
}