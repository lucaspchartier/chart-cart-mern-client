import React, { useState } from "react";

import AddComment from "./AddComment";
import './CommentList.css';

export const CommentList = props => {
    const [comments, setComments] = useState([]);
    const [selectedPost, setSelectedPost] = useState(0);

    const displayComments = () => {
        const comments = props.comments;
        return comments.map(comment => {
            return <ul key={comment.id} onClick={e => {
                setComments(props.comments);
                setSelectedPost(props.selectedPost);
            }}><li id="comment">{comment.text}</li></ul>
        });
    }

    return (
        <div className="comment-list">
            {displayComments()}
            <AddComment postId={selectedPost} comments={comments}/>
        </div>
    );
}

export default CommentList;