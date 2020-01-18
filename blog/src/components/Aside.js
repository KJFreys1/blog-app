import React from 'react'
import { Link } from "react-router-dom";

export default class Aside extends React.Component {
    render() {
        const posts = this.props.data.map(arr => {
            return (
                <Link to={'/blog/' + arr.title} className='link link-aside'>
                    <div>{arr.title}</div>
                </Link>
            )
        })
        return (
            <aside>
                <div className='aside-header'>
                    <h1>Blog Posts</h1>
                </div>
                <div className='aside-content'>
                    {posts}
                </div>
            </aside>
        )
    }
}