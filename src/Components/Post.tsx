import { BlogPost } from '../types/types'

interface IBlogPostProps {
    blog: BlogPost
}

const Post = ({blog}: IBlogPostProps) => {
  return (
    <div className='post'>
        <h3 className='post__title'> {blog.title} </h3>
        <p className='post__body'> {blog.body} </p>
        <div>
            {blog.tags.map((tag, index) => <label key={index}>#{tag}</label>)}
            <p className='reactions'> Reactions: {blog.reactions} </p>
        </div>
    </div>
  )
}

export default Post