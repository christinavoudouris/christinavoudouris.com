import React from 'react'
import Fab from '@material-ui/core/Fab'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import IconButton from '@material-ui/core/IconButton'
import GitHubIcon from '@material-ui/icons/GitHub'
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'

const Footer = () => <footer>
    <ul className="social">
        <li>
            <IconButton
                aria-label="Github"
                size="medium"
                style={{ color: 'white' }}
                href="https://github.com/christinavoudouris"
                target="_blank"
                rel="noopener noreferrer"
            >
                <GitHubIcon fontSize="inherit" />
            </IconButton>
        </li>
        <li>
            <IconButton
                aria-label="Instagram"
                size="medium"
                style={{ color: 'white' }}
                href="https://instagram.com/phillywebdeveloper"
                target="_blank"
                rel="noopener noreferrer"
            >
                <InstagramIcon fontSize="inherit" />
            </IconButton>
        </li>
        <li>
            <IconButton
                aria-label="Facebook"
                size="medium"
                style={{ color: 'white' }}
                href="https://www.facebook.com/PhillyWebDeveloper"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FacebookIcon fontSize="inherit" />
            </IconButton>
        </li>
    </ul>
    <p>
        &copy; {new Date().getFullYear()} Christina Voudouris. All rights reserved.
    </p>
    <a href="#top" alt="top">
        <Fab style={fabStyle} aria-label="arrowupward">
            <KeyboardArrowUpIcon fontSize="large" />
        </Fab>
    </a>
</footer>

const fabStyle = {
    position: 'fixed',
    right: '23px',
    bottom: '23px',
    marginBottom: '0',
    zIndex: '997',
    backgroundColor: "#616161",
    color: 'white',
    opacity: '0.8'
}

export default Footer
