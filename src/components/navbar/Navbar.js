import React, { useState } from 'react'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { FaRegTimesCircle } from 'react-icons/fa'
import { BsFillHouseFill } from 'react-icons/bs'
import { Link } from "react-router-dom"
import './Navbar.css'
import { FaRecycle } from 'react-icons/fa';
import { NavLink } from "react-router-dom";


const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className='navbar'>
            <div className='container'>
                <h1><span><FaRecycle /> De-Rabacon</span> Plastics</h1>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/Aboutus" activeclassname="active-link">About Us</NavLink></li>
                    <li><NavLink to="/products" activeclassname="active-link">Products</NavLink></li>
                    <li><NavLink to="/projects" activeclassname="active-link">Projects</NavLink></li>
                    <li><NavLink to="/teams" activeclassnamee="active-link">Team</NavLink></li>
                    <li><NavLink to="/awards" activeclassname="active-link">Awards</NavLink></li>
                    <li><NavLink to="/news" activeclassname="active-link">News</NavLink></li>
                    <li><NavLink to="/contact" activeclassname="active-link">Contact</NavLink></li>
                </ul>

                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenuAlt4 className='icon' />)}

                </div>
            </div>
        </div>
    )
}

export default Navbar
