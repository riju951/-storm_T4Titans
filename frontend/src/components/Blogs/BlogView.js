import React from 'react'

export default function BlogView({ blog }) {
    return (
        <div className='relative'>
            <p>{blog.title}</p>
            <p>{blog.author}</p>
            <p>{blog.likes}</p>
            <p>{blog.createdAt}</p>
            <p>{blog.body}</p>

        </div>
    )
}
