import React from 'react'
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
import { HashLink as Link } from 'react-router-hash-link'

const Cards = () => <Container width="lg" id="services" style={{ marginTop: '20px' }}>
    <Grid
        container spacing={3}
        style={{ leftMargin: 'auto', rightMargin: 'auto' }}>
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
                    <Button size="small" color="inherit">
                        <Link to='/services#services' aria-label="Learn more about basic site and React app options" style={{ color: 'black' }}>Learn More</Link>
                    </Button>
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
                    <Button size="small" color="inherit">
                        <Link to='/services#services' aria-label="Learn more about full stack app options" style={{ color: 'black' }}>Learn More</Link>
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    </Grid>
</Container>

export default Cards