import { useState } from "react";
import { graphql } from "react-apollo";

import AddPost from "./AddPost";
import PostDetails from "./PostDetails";
import CommentList from "../Comments/CommentList";
import './PostList.css';
import { getPostsQuery } from "../../queries/queries";

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
            <PostDetails selectedPost={selectedPost}/>
            <CommentList selectedPost={selectedPost} comments={comments}/>
        </div>
    );
}

export default graphql(getPostsQuery)(PostList);
