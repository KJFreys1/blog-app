import React from "react"
import {Link} from 'react-router-dom'

export default function Header () {
    return (
        <header>
            <h1>Kyle's Blog</h1>
            <div className='link-container'>
                <Link to='/blog/Introduction' className='link header-link'>Blog Posts</Link>
                <Link to='/about' className='link header-link'>About me</Link>
            </div>
        </header>
    )
}