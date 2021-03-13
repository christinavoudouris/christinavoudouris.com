import React from 'react'
import Top from './Top'
import { NavHashLink as NavLink } from 'react-router-hash-link'

const Header = () => <>
    <Top />
    <header>
        <img className="me" width="90" height="90" src="https://projects.christinavoudouris.com/wp-content/uploads/2020/08/me-lg.jpg" alt="me" />
        <p className="title">Christina Voudouris</p>
        <p className="subtitle">MERN Stack Developer</p>
        <ul className="nav">
            <li>
                <NavLink to="/" alt="Home">HOME</NavLink>
            </li>
            <li>
                <NavLink to="/#services" alt="Services">SERVICES</NavLink>
            </li>
            <li>
                <NavLink to="/#services" alt="Projects">PROJECTS</NavLink>
            </li>
            <li>
                <NavLink to="/#contact" alt="Contact" rel="noopener noreferrer">
                    CONTACT
                </NavLink>
            </li>
        </ul>
    </header>
</>

export default Header
