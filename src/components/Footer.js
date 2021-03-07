import React from 'react'
import Fab from '@material-ui/core/Fab'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import IconButton from '@material-ui/core/IconButton'
import GitHubIcon from '@material-ui/icons/GitHub'
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWordpress } from '@fortawesome/free-brands-svg-icons'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { faCodepen } from '@fortawesome/free-brands-svg-icons'*/

const Footer = () => <footer>
    <ul className="social">
        <li>
            <IconButton
                aria-label="Github"
                size="medium"
                style={iconStyle}
                href="https://github.com/christinavoudouris"
                target="_blank"
                rel="noopener noreferrer"
            >
                <GitHubIcon fontSize="inherit" />
            </IconButton>
        </li>
        {/*<li>
            <IconButton
                aria-label="Codepen"
                size="medium"
                style={iconStyle}
                href="https://codepen.io/christinavoudouris/pens/popular"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={faCodepen} fontSize="inherit" />
            </IconButton>
        </li>
        <li>
            <IconButton
                aria-label="WordPress"
                size="medium"
                style={iconStyle}
                href="https://projects.christinavoudouris.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={faWordpress} fontSize="inherit" />
            </IconButton>
        </li>*/}
        <li>
            <IconButton
                aria-label="Instagram"
                size="medium"
                style={iconStyle}
                href="https://instagram.com/phillywebdeveloper"
                target="_blank"
                rel="noopener noreferrer"
            >
                <InstagramIcon fontSize="inherit" />
            </IconButton>
        </li>
        {/*<li>
            <IconButton
                aria-label="Twitter"
                size="medium"
                style={iconStyle}
                href="https://twitter.com/christinavcodes"
                target="_blank"
                rel="noopener noreferrer"
            >
                <TwitterIcon fontSize="inherit" />
            </IconButton>
        </li>*/}
        <li>
            <IconButton
                aria-label="Facebook"
                size="medium"
                style={iconStyle}
                href="https://www.facebook.com/PhillyWebDeveloper"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FacebookIcon fontSize="inherit" />
            </IconButton>
        </li>
        {/*<li>
            <IconButton
                aria-label="LinkedIn"
                size="medium"
                style={iconStyle}
                href="https://linkedin.com/in/christinavoudouris"
                target="_blank"
                rel="noopener noreferrer"
            >
                <LinkedInIcon fontSize="inherit" />
            </IconButton>
        </li>*/}
    </ul>
    <p>
        Copyright &copy; {new Date().getFullYear()}
        {' '}Christina Voudouris. All rights reserved.
    </p>
    <a href="#top" alt="top">
        <Fab style={fabStyle} aria-label="arrowupward">
            <KeyboardArrowUpIcon fontSize="large" />
        </Fab>
    </a>
</footer>

const iconStyle = {
    color: 'white',
    backgroundColor: 'black'
}

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
