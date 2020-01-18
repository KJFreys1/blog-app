import React from "react"
import {Link} from 'react-router-dom'

export default function Header () {
    return (
        <header>
            <h1>Kyle's Blog</h1>
            <div className='link-container'>
                <Link to='/'>Blog Posts</Link>
                <Link to='/about'>About me</Link>
            </div>
        </header>
    )
}