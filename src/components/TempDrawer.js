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

export default function TempDrawer() {
    const classes = useStyles()
    const [state, setState] = useState({
        left: false
    })

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
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

    return <div style={{ backgroundColor: 'white' }}>
        {['left'].map((anchor) => (<Fragment key={anchor}>
            <Button
                style={{ padding: '0', backgroundColor: 'white' }}
                aria-label="open menu"
                onClick={toggleDrawer(anchor, true)}
            >
                {<MenuIcon
                    fontSize="large"
                    style={{
                        color: "#666666",
                        marginTop: '7px',
                        padding: '0'
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
        </Fragment>))}
    </div>
}