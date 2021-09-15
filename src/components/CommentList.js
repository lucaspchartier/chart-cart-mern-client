import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const getCommentsQuery = gql`
    comments {
        id
        text
    }
`

class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null
        }
    }

    displayComments() {
        const data = this.props.data;
        if (data.loading) {
            return (<div>Loading...</div>);
        } else {
            return data.comments.map(comment => {
                return <div key={comment.id} onClick={e => {this.setState({ selected: comment.id })}}>{comment.text}</div>
            });
        }
    };

    render() {
        return (
            <div>
                {this.displayComments()}
            </div>
        );
    }
}

export default graphql(getCommentsQuery)(CommentList);