import { useState } from "react";
import { graphql } from "react-apollo";

import AddPost from "./AddPost";
import PostDetails from "./PostDetails";
import CommentList from "../Comments/CommentList";
import './PostList.css';
import { getPostsQuery } from "../../queries/queries";

export const PostList = props => {
    const [post, setPost] = useState({
        id: 0,
        text: "",
        comments: []
    });

    const displayPosts = () => {
        const data = props.data;
        if (data.loading) {
            return (<div>Loading...</div>);
        } else {
            return data.posts.map(post => {
                return <div key={post.id} onClick={e => setPost({
                    id: post.id,
                    text: post.text,
                    comments: post.comments
                })}>{post.text}</div>
            });
        }
    };

    return (
        <div className="post-list">
            {displayPosts()}
            <AddPost/>
            <PostDetails post={post}/>
            <CommentList post={post}/>
        </div>
    );
}

export default graphql(getPostsQuery)(PostList);
