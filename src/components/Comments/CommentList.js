import React, { Component } from "react";

import AddComment from "./AddComment";
import './CommentList.css';

class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          postId: null,
          comments: []
        }

        // this.handleChange = this.handleChange.bind(this);
        this.displayComments = this.displayComments.bind(this);
    }

    // handleChange(e) {
    //     this.setState({
    //         postId: this.props.selectedPost,
    //         comments: this.props.comments
    //     });
    // }

    displayComments() {
        const comments = this.props.comments;
        return comments.map(comment => {
            return <ul key={comment.id}>
                <li id="comment">{comment.text}</li>
            </ul>
        });
    }

    render() {
        return (
            <div className="comment-list" /* onChange={this.handleChange} */ >
                {this.displayComments()}
                <AddComment postId={this.state.postId}/>
            </div>
        );
    }
}

export default CommentList;