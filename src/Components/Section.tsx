import { BlogPost } from '../types/types'
import Post from './Post'

interface ISectionProps {
    blogPosts: BlogPost[]
    section: string
}

const Section = ({blogPosts, section}: ISectionProps) => {
  return (
    <details className={`blogs 
    ${section === 'magical' ? 'magical' : 
    section === 'love' ? 'love' : 
    section === 'crime' ? 'crime' :
    section === 'classic' ? 'classic' :
    'history' }`}>
        <summary className='sectionName'> {section} </summary>
        {blogPosts.map(b => <Post blog={b} key={b.id}/> )}
    </details>
  )
}

export default Section