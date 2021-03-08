import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import businesscomp from '../images/businesscomp.jpg'
import jsdisplay from '../images/jsdisplay.jpg'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

const styles = theme => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  })

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props
    return <MuiDialogTitle disableTypography className={classes.root} {...other}>
          <Typography variant="h6">{children}</Typography>
          {onClose 
            ? <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                <CloseIcon />
            </IconButton>
            : null}
        </MuiDialogTitle>
    })
    
    const DialogContent = withStyles(theme => ({
      root: { padding: theme.spacing(2) },
    }))(MuiDialogContent)
    
    const DialogActions = withStyles(theme => ({
      root: { margin: 0, padding: theme.spacing(1) },
    }))(MuiDialogActions)
    

export default function Cards() {
    const [open, setOpen] = useState(false)
      const handleClickOpen = () => setOpen(true)
      const handleClose = () => setOpen(false)

return <>
    <Container width="lg" id="services" style={{ marginTop: '20px' }}>
        <Grid container spacing={3} style={{ leftMargin: 'auto', rightMargin: 'auto' }}>
            <Grid item xs={12} sm={6}>
                <Card>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="basic website or app"
                            height="140"
                            width="100%"
                            image={jsdisplay}
                            title="basic website or app"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Basic Site or React App
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Get a blazing fast, fully responsive website with up to five pages, or five sections on a single page. Level up with React when you need to.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" onClick={handleClickOpen}>Learn More</Button>
                    </CardActions>
                </Card>
            </Grid >

            <Grid item xs={12} sm={6}>
                <Card>
                    <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="full stack app"
                        width="100%"
                        height="140"
                        image={businesscomp}
                        title="full stack app"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Full Stack App / Site
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Need a database? Go MERN stack. Love WordPress? You can have the best of both worlds: WordPress content with the speed of React.
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" onClick={handleClickOpen}>Learn more</Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    </Container>
    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            Services
        </DialogTitle>
        <DialogContent dividers>
            <h2 style={{ margin: '0', padding: '0'}}>Why a Site or App?</h2>
            <p>
                  In today’s website market (Squarespace, Wix, Webflow, etc.) you may be thinking, “Why would I even need a developer?” Simple. A non-developer’s biggest hurdle is always that they don’t know how to code. These companies know that and how to lock you into an overpriced plan. The truth is, their templates: 1) lack customization and uniqueness, 2) suffer from poor performance, and 3) utilize tools and systems that are more frustrating and time-consuming than potentially coding it yourself.
            </p>
            <p>
                  I think business owners deserve better. Your website is everyone’s first impression of your business, not something you want to settle on. Just select from one of these four options:
            </p>
            <h2>Basic Website</h2>
            <p>
                Great for someone who may even want to update the site themselves. [ <a href="https://codepen.io/christinavoudouris/pen/ZEpMOqO" target="_blank" rel="noopener noreferrer" alt="Small Business Starter">View a sample site I created</a> ]
            </p>
            <h2>React App / Website</h2>
            <p>
                A site that's really an app built significantly with Javascript code, allowing for more advanced customizations. <em>This site is a React app!</em>
            </p>
            <h2>Full Stack: MERN Stack App / Website</h2>
            <p>
                Adds a MongoDB database and Node server to a React app, perfect if you need users to register/login or to store/display data. [ <a href="https://mealtracknfind.christinavoudouris.com" target="_blank" rel="noopener noreferrer" alt="Meal Track N Find">View a site I created</a> ]
            </p>
            <h2>Full Stack [Basic or React] + WordPress</h2>
            <p>
                If you already have a WordPress site you can still use it to write posts and pages! Connect to the WordPress API to feed content to your site, still reaping the benefits of a WordPress CMS.
            </p>
            <h2>Not sure what’s best for you?</h2>
            <p>
                I offer a free initial consultation so we can discuss your plan for a new site or redesign. The point is to pick the most efficient plan and not upsell you into more than you might need.
            </p>
            <h2>Beyond Development: Hosting &amp; Maintenance</h2>
            <p>
                I can either maintain your site for an ongoing fee, or conduct a training so you can manage it on your own. If you need hosting: basic sites &amp; apps are FREE to host on Netlify; the only small expense is buying a domain (usually $12-$15 per year). There are many choices available for full stack apps, which we can discuss.
            </p>
        </DialogContent>
        <DialogActions>
            <Button autoFocus onClick={handleClose}>
                Close
            </Button>
        </DialogActions>
    </Dialog>
    </>
}