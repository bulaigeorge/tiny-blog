import React from 'react'
import { BlogPost } from '../types/types'

interface IBlogPostProps {
    blog: BlogPost
}

const Post = ({blog}: IBlogPostProps) => {
  return (
    <div>
        <h3> {blog.title} </h3>
        <p> {blog.body} </p>
    </div>
  )
}

export default Post