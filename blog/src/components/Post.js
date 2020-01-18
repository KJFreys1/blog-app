import React from 'react'

export default class Post extends React.Component {
    render() {
        let title, data
        if (this.props.match.params.title) {
            title = this.props.match.params.title
            data = this.props.data.filter(arr => arr.title === title)
        }
        return (
            <div className='post-container'>
                <h1>{data[0].title}</h1>
                <p>{data[0].content}</p>
                <a href={data[0].link}>Link to {data[0].linkDesc}</a>
            </div>
        )
    }
}