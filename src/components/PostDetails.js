import React, { Component } from "react";
import { graphql } from "react-apollo";

class PostDetails extends Component {
    displayBookDetails() {
        const { post } = this.props.data;
        if (post) {
            return (
                <div>
                    <h2>{post.text}</h2>
                    <h2>{post.comment.text}</h2>
                </div>
            )
        } else {
            <div>No post selected.</div>
        }
    }
}