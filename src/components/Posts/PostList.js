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
    const [selectedPost, setSelectedPost] = useState(0);

    const displayPosts = () => {
        const data = props.data;
        if (data.loading) {
            return (<div>Loading...</div>);
        } else {
            return data.posts.map(post => {
                return <div key={post.id} onClick={e => {
                    setSelectedPost(post.id)
                    setComments(post.comments)
                }}>{post.text}</div>
            });
        }
    };

    // <CommentList selectedPost={this.state.selectedPost} comments={this.state.comments}/>

    return (
        <div className="post-list">
            {displayPosts()}
            <AddPost/>
        </div>
    );
}

export default graphql(getPostsQuery)(PostList);
