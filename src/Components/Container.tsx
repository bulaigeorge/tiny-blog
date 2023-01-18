import { BlogPost } from '../types/types'
import Section from './Section'


const sections = ['magical', 'love', 'crime', 'classic', 'history']

interface IBlogsProps {
    blogs: BlogPost[]
}

const Container = ({blogs}: IBlogsProps) => {
  return (
    <div>
        {sections.map((s, index) => {
            const sectionBlogs = blogs.filter(b => b.tags.includes(s))
            return <Section blogPosts={sectionBlogs} section={s} key={index}/>
        })}
    </div>
  )
}

export default Container