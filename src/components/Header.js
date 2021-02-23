import React from 'react'
import { Link } from 'react-router-dom'
import TempDrawer from './TempDrawer'
import { NavHashLink as NavLink } from 'react-router-hash-link'

const Header = () => <>
    <Link to="/" name="top" aria-label="Top of page"> </Link>
    <TempDrawer />
    <div className="header">
        <Link to="/">
            <img className="me" width="90" height="90" src="https://projects.christinavoudouris.com/wp-content/uploads/2020/08/me-lg.jpg" alt="me" />
            <p className="title">Christina Voudouris</p>
            <p className="subtitle">MERN Stack Developer</p>
        </Link>
        <ul className="nav">
            <li>
                <NavLink to="/" alt="Home">HOME</NavLink>
            </li>
            <li>
                <NavLink to="/#services" alt="Services">SERVICES</NavLink>
            </li>
            <li>
                <Link to="/projects" alt="Projects">PROJECTS</Link>
            </li>
            <li>
                <NavLink to="/#contact" alt="Contact" rel="noopener noreferrer">
                    CONTACT
                </NavLink>
            </li>
        </ul>
    </div>
</>

export default Header
