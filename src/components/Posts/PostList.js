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
    const [selectedPost, setSelectedPost] = useState(0);
    const [comments, setComments] = useState([]);

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

    return (
        <div className="post-list">
            {displayPosts()}
            <AddPost/>
            <CommentList selectedPost={selectedPost} comments={comments}/>
        </div>
    );
}

export default graphql(getPostsQuery)(PostList);
