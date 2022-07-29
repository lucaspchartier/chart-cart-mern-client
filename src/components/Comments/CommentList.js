import React, { useState } from "react";

import AddComment from "./AddComment";
import './CommentList.css';

export const CommentList = props => {
    const [postId, setPostId] = useState(0);
    const [comments, setComments] = useState([]);

    const displayComments = () => {
        const comments = props.comments;
        return comments.map(comment => {
            return <ul key={comment.id} onClick={e => {
                setPostId(props.postId);
                setComments(props.comments);
            }}><li id="comment">{comment.text}</li></ul>
        });
    }

    return (
        <div className="comment-list">
            {displayComments()}
            <AddComment postId={postId} comments={comments}/>
        </div>
    );
}

export default CommentList;