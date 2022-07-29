import React, { useState } from "react";

import AddComment from "./AddComment";
import './CommentList.css';

export const CommentList = props => {
    const [comments, setComments] = useState([]);
    const [selectedPost, setSelectedPost] = useState(0);

    // handleChange(e) {
    //     this.setState({
    //         postId: this.props.selectedPost,
    //         comments: this.props.comments
    //     });
    // }

    const displayComments = () => {
        const comments = this.props.comments;
        return comments.map(comment => {
            return <ul key={comment.id} onClick={e => {this.setState({
                postId: this.props.selectedPost,
                comments: this.props.comments
            })}}><li id="comment">{comment.text}</li></ul>
        });
    }

    return (
        <div className="comment-list" /* onChange={this.handleChange} */ >
            {displayComments()}
            <AddComment postId={this.state.postId} comments={this.state.comments}/>
        </div>
    );
}

export default CommentList;