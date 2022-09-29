import React, { Component } from "react";
import Post from "./Post";

class PostCatalog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    };

    componentDidMount() {
        this.getPosts();
    };

    getPosts = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await res.json();
        this.setState({posts: posts});
    };

    render() {
        const { posts } = this.state;

        return  <ul className='posts__list'>
                    {posts.map(item => <Post key={item.id} post={item} />)}
                </ul>
    };
}

export default PostCatalog;