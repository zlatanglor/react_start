import React, { Component} from "react";

class Post extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        const { userId, title, body } = this.props.post;

        return  <li className="posts_single-post" data-post-id={userId}>
                    <h3 className="posts__post-title">{title}</h3>
                    <p className="posts__post-description">{body}</p>
                </li>
    };
}

export default Post;