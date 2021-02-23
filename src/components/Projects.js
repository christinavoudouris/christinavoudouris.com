import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Post from './Post'

function Blog() {
    const [state, setState] = useState({})
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        axios.get('https://projects.christinavoudouris.com/wp-json/wp/v2/posts?categories=19')
            .then(res => {
                let posts = res.data
                setState({ posts })
                setIsLoaded(true)
            })
            .catch(err => console.log(err))
    }, [])

    const { posts } = state
    return isLoaded ? posts.map(post => <Post key={post.id} post={post} />) : null
}

export default Blog