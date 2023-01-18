import React from 'react'
import { BlogPost } from '../types/types'
import Post from './Post'

interface ISectionProps {
    blogPosts: BlogPost[]
    section: string
}

const Section = ({blogPosts, section}: ISectionProps) => {
  return (
    <details className='blogs'>
        <summary className='sectionName'> {section} </summary>
        {blogPosts.map(b => <Post blog={b} key={b.id}/> )}
    </details>
  )
}

export default Section