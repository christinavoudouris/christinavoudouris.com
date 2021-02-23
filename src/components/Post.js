import React, { useState, useEffect } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import EventNoteIcon from '@material-ui/icons/EventNote'
import axios from 'axios'
import Moment from 'react-moment'
import Button from '@material-ui/core/Button'
import PersonIcon from '@material-ui/icons/Person'

const Post = props => {
    const [state, setState] = useState({})

    useEffect(() => {
        const { author } = props.post
        const getAuthor = axios.get(`https://projects.christinavoudouris.com/wp-json/wp/v2/users/${author}`)

        Promise.all([getAuthor]).then(res => {
            setState({
                author: res[0].data.name,
                isLoaded: true
            })
        })
    }, [props.post])

    const { date, title, content } = props.post
    const { author, isLoaded } = state

    return isLoaded ?
        <Card className="postCard">
            <CardContent style={{ padding: '30px' }}>
                <h1 className="postTitle">
                    {title.rendered}
                </h1>
                <p className="time"><EventNoteIcon size="small" style={{ verticalAlign: 'middle' }} /> on <Moment format='MM/DD/YY'>{date}</Moment></p>
                <Button startIcon={<PersonIcon />} style={authorStyle}>by {author}</Button>
                <div dangerouslySetInnerHTML={{ __html: content.rendered }} />
            </CardContent>
        </Card > : null
}

const authorStyle = {
    color: '#989898',
    borderRadius: '0',
    backgroundColor: '#f5f5f5',
    fontSize: '12px',
    margin: '0'
}

export default Post