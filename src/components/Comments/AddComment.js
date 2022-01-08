import React, { Component } from "react";
import { graphql } from "react-apollo";
import flowright from "lodash.flowright";
import { getPostsQuery, getCommentsQuery, addCommentMutation } from "../../queries/queries";

class AddComment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            postId: "",
            text: ""
        }

        // this.displayPosts = this.displayPosts.bind(this);
        this.displayComments = this.displayComments.bind(this);
        this.bindCommentToPost = this.bindCommentToPost.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    // displayPosts() {
    //     const data = this.props.getPostsQuery;
    //     if (data.loading) {
    //         return (<option>Loading Posts...</option>)
    //     } else {
    //         return data.posts.map(post => {
    //             return (<option key={post.id} value={post.id}>{post.text}</option>)
    //         });
    //     }
    // }

    displayComments() {
        const data = this.props;
        if (data.addCommentMutationResult.loading) {
            return (<option>Loading Comments...</option>)
        } else {
            return data.comments.map(comment => {
                return (<option key={comment.id} value={comment.id}>{comment.text}</option>)
            });
        }
    }

    bindCommentToPost(postId) {
        const posts = this.props.getPostsQuery.posts;
        return posts.filter(post => post.id === postId);
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
        e.target.reset();
    }

    render() {
        return (
            <form id="add-comment" onSubmit={this.submitForm.bind(this)}>
                <div className="field">
                    <input 
                        type="text"
                        placeholder="comment"
                        onChange={e => {
                            this.setState({ text: e.target.value })
                            this.bindCommentToPost(this.setState({ postId: this.props.postId }))
                            // this.displayPosts()
                            this.displayComments()
                        }}
                    />
                </div>

                <button>+</button>
            </form>
        );
    }
}

export default flowright(
    graphql(getPostsQuery, { name: "getPostsQuery" }),
    graphql(addCommentMutation, { name: "addCommentMutation" })
)(AddComment);