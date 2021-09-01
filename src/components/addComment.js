import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getPostsQuery } from "../../queries/queries";

class AddComment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            postId: "",
            text: ""
        }
    }

    displayPosts() {
        const data = this.props.getPostsQuery;
        if (data.loading) {
            return (<option>Loading Posts...</option>)
        } else {
            return data.posts.map(post => {
                return (<option key={post.id} value={post.id}>{post.text}</option>)
            });
        }
    }
}