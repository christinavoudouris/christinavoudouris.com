import React from 'react'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import PanToolIcon from '@material-ui/icons/PanTool'
import { HashLink as Link } from 'react-router-hash-link'

const Home = () => <div className="wrapper">
    <Container maxWidth="sm">
        <h1 className="headline"><PanToolIcon fontSize="large" /> I'm an experienced, Philly-based full stack web developer.</h1>
        <h2 className="desc">
            I create flexible, modern, responsive websites for businesses large and small. See how I can help you reach more customers.
            </h2>
        <Grid style={gridStyle} container spacing={2} justify="center">
            <Grid item>
                <Link to="/#services" href="/" rel="noopener noreferrer">
                    <Button
                        style={buttonStyle}
                        variant="contained"
                        size="large"
                    >
                        &nbsp;view the work&nbsp;
                    </Button>
                </Link>
            </Grid>
        </Grid>
    </Container>
</div>

const buttonStyle = {
    borderRadius: '5px',
    color: 'white',
    backgroundColor: '#E53935',
    padding: '14px 28px',
    fontFamily: 'Helvetica", sans-serif',
    fontWeight: '400',
    fontSize: '14px',
}

const gridStyle = {
    margin: '20px auto 50px 0'
}

export default Home