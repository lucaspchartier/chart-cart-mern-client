import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getPostsQuery, getCommentsQuery, addCommentMutation } from "../../queries/queries";

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

    submitForm(e) {
        e.preventDefault();
        this.props.addCommentMutation({
            variables: {
                postId: this.state.postId,
                text: this.state.text
            },
            refetchQueries: [{ query: getCommentsQuery }]
        });
    }

    render() {
        return (
            <form id="add-comment">
                
            </form>
        );
    }
}