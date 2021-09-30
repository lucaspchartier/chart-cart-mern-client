import React, { Component } from "react";
// import { gql } from "apollo-boost";
// import { graphql } from "react-apollo";

// const getCommentsQuery = gql`
//     comments {
//         id
//         text
//     }
// `

class CommentList extends Component {
    displayComments() {
        const comments = this.props.comments;
        return comments.map(comment => {
            return <div key={comment.id}>{comment.text}</div>
        });
    }

    render() {
        return (
            <div>
                {this.displayComments()}
            </div>
        );
    }
}

export default CommentList;