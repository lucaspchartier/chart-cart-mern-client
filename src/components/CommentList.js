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
        const comments = this.props;
        console.log(comments);
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