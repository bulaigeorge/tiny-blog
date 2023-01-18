import { BlogPost } from '../types/types'

interface IBlogPostProps {
    blog: BlogPost
}

const Post = ({blog}: IBlogPostProps) => {
  return (
    <div>
        <h3> {blog.title} </h3>
        <p> {blog.body} </p>
        <div>
            {blog.tags.map((tag, index) => <label key={index}>#{tag}</label>)}
            <p> Reactions: {blog.reactions} </p>
        </div>
    </div>
  )
}

export default Post