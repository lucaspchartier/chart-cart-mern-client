import React, { Component } from "react";

import AddComment from "./AddComment";
import './CommentList.css';

class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          postId: null
        }
    }

    displayComments() {
        const comments = this.props.comments;
        return comments.map(comment => {
            return <ul key={comment.id} onClick={e => {this.setState({ postId: this.props.selected })}}>
                <li id="comment">{comment.text}</li>
            </ul>
        });
    }

    render() {
        return (
            <div className="comment-list">
                {this.displayComments()}
                <AddComment/>
            </div>
        );
    }
}

export default CommentList;