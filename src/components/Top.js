import React, { useState, Fragment } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import HomeIcon from '@material-ui/icons/Home'
import WebIcon from '@material-ui/icons/Web'
import FavoriteIcon from '@material-ui/icons/Favorite'
import MailIcon from '@material-ui/icons/Mail'
import MenuIcon from '@material-ui/icons/Menu'
import { NavHashLink as NavLink } from 'react-router-hash-link'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    a: {
        cursor: 'pointer'
    }
})

export default function Top() {
    const classes = useStyles()
    const [state, setState] = useState({ left: false })

    let toggledClass = 'toggled'
    let body = document.body
    const lightMode = 'light'
    const darkMode = 'dark'
    let mode

    if (localStorage) {
        mode = localStorage.getItem('mode')
      }
    
    mode === lightMode || mode === darkMode
        ? body.classList.add(mode)
        : body.classList.add(lightMode)
    
    const switchMode = e => {
        if (mode === darkMode) {
            body.classList.replace(darkMode, lightMode)
            e.target.classList.remove(toggledClass)
            body.classList.toggle(toggledClass)
            localStorage.setItem('mode', 'light')
            mode = lightMode
        } else {
            body.classList.replace(lightMode, darkMode)
            e.target.classList.add(toggledClass)
            localStorage.setItem('mode', 'dark')
            mode = darkMode
        }
    }

    const toggleDrawer = (anchor, open) => e => {
        if (e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) {
            return
        }

        setState({ ...state, [anchor]: open })
    }

    const list = anchor => <div
        className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
        id="top"
    >
        <List>
            <ListItem>
                <NavLink className="drawer" to="/">
                    <ListItemIcon style={{ verticalAlign: 'middle' }}>
                        <HomeIcon />
                    </ListItemIcon>
                    Home
                </NavLink>
            </ListItem>
            <ListItem>
                <NavLink className="drawer" to="/#services">
                    <ListItemIcon style={{ verticalAlign: 'middle' }} >
                        <WebIcon />
                    </ListItemIcon>
                        Services
                </NavLink>
            </ListItem>
            <ListItem>
                <NavLink className="drawer" to="/#services">
                    <ListItemIcon style={{ verticalAlign: 'middle' }}>
                        <FavoriteIcon />
                    </ListItemIcon>
                    Projects
                </NavLink>
            </ListItem>
            <ListItem>
                <NavLink className="drawer" to="/#contact">
                    <ListItemIcon style={{ verticalAlign: 'middle' }}>
                        <MailIcon />
                    </ListItemIcon>
                        Contact
                </NavLink>
            </ListItem>
        </List>
    </div>

    return <>
        {['left'].map(anchor => <Fragment key={anchor}>
            <Button
                style={{ padding: '0' }}
                aria-label="open menu"
                onClick={toggleDrawer(anchor, true)}
            >
                {<MenuIcon
                    fontSize="large"
                    style={{
                        color: "#666666",
                        marginTop: '7px',
                        padding: '0', 
                        backgroundColor: 'transparent'
                    }}
                />}
            </Button>
            <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
            >
                {list(anchor)}
            </Drawer>
        </Fragment>)}
        <FormControlLabel
        control={
          <Checkbox
            className={mode === "dark" ? toggledClass : ""}
            id="darkMode"
            onClick={e => switchMode(e)}
            color="default"
          />
        }
        label="Dim mode?"
        style={{ float: 'right' }}
      />
    </>
}