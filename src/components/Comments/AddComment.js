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
    }

    displayPosts() {
        console.log(this.props.postId);
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
            <form id="add-comment" onSubmit={ this.submitForm.bind(this) }>
                <div className="field">
                    <input type="text" onChange={ e => this.setState({ text: e.target.value }) }/>
                </div>

                <div className="field">
                    <select onChange={ e => this.setState({ postId: e.target.value }) }>
                        {this.displayPosts()}
                    </select>
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