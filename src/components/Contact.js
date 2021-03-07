import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import LocalCafeIcon from '@material-ui/icons/LocalCafe'

const Contact = () => {
    const useStyles = makeStyles(theme => ({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '25ch'
            },
            '& label.Mui-focused': {
                color: 'black',
            },
            '& .MuiInput-underline:after': {
                borderBottomColor: 'black',
            },
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: 'black',
                },
                '&:hover fieldset': {
                    borderColor: 'black',
                },
                '&.Mui-focused fieldset': {
                    borderColor: 'black',
                },
            },
        },
    }))

    const classes = useStyles()

    return <Container width="sm" style={{ textAlign: 'center' }}>
        <h1 style={{ marginTop: '40px' }}>Let's talk!{' '}
            <LocalCafeIcon fontSize="large" style={{ verticalAlign: 'middle' }} /></h1>
        <form
            name="contact"
            method="post"
            id="contact"
            autoComplete="off"
            className={classes.root}
            action="/success"
        >
            <input type="hidden" name="form-name" value="contact" />
            <TextField
                id="Name"
                label="Name"
                aria-label="Name"
                variant="outlined"
                name="name"
                required
            />

            <TextField
                id="Email"
                label="Email"
                aria-label="Email"
                variant="outlined"
                type="email"
                name="email"
                required
            />

            <TextField
                id="Message"
                label="Message"
                aria-label="Message"
                multiline
                rows={4}
                variant="outlined"
                name="message"
                required
            />
            <br />
            <Button
                variant="contained"
                type="submit"
                style={{ backgroundColor: '#ffffff', margin: '5px 0 20px 0' }}>
                Send
            </Button>
        </form>
    </Container>
}

export default Contact
