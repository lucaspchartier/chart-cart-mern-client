import React, { useState } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

import AddPost from "./AddPost";
import CommentList from "../Comments/CommentList";
import './PostList.css';

const getPostsQuery = gql`
    {
        posts {
            id
            text
            comments {
                id
                text
            }
        }
    }
`;

export const PostList = props => {
    const [comments, setComments] = useState([]);

    const displayPosts = () => {
        const data = props.data;
        if (data.loading) {
            return (<div>Loading...</div>);
        } else {
            return data.posts.map(post => {
                return <div key={post.id} onClick={e => {this.setState({
                    selectedPost: post.id,
                    comments: post.comments
                })}}>{post.text}</div>
            });
        }
    };

    return (
        <div className="post-list">
            {this.displayPosts()}
            <CommentList selectedPost={this.state.selectedPost} comments={this.state.comments}/>
            <AddPost/>
        </div>
    );
}

export default graphql(getPostsQuery)(PostList);
