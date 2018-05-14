import React from 'react';
import './Post.css';

const Post = (props) => {

    return (
        <article className="Post" onClick={props.clicked}>
            <h1>{props.title}</h1>
            <div className="Info">
                <div className="Author">Author</div>
            </div>
        </article>
    );
}

export default Post;