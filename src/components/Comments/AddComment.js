import React, { useState } from "react";
import { graphql } from "react-apollo";
import flowright from "lodash.flowright";
import { getPostsQuery, getCommentsQuery, addCommentMutation } from "../../queries/queries";

export const AddComment = props => {
    const [postId, setPostId] = useState(0);
    const [commentTextFields, setCommentTextFields] = useState("");

    const displayComments = () => {
        const data = this.props;
        if (data.addCommentMutationResult.loading) {
            return (<option>Loading Comments...</option>)
        } else {
            return data.comments.map(comment => {
                return (<option key={comment.id} value={comment.id}>{comment.text}</option>)
            });
        }
    }

    const bindCommentToPost = id => {
        const posts = this.props.getPostsQuery.posts;
        return posts.filter(post => post.id === id);
    }

    const submitForm = e => {
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

    return (
        <form id="add-comment" onSubmit={submitForm}>
            <div className="field">
                <input type="text" placeholder="comment" onChange={e => {
                    this.setState({ text: e.target.value })
                    bindCommentToPost(this.setState({ postId: this.props.postId }))
                    displayComments()
                }}/>
            </div>

            <button>+</button>
        </form>
    );
}

export default flowright(
    graphql(getPostsQuery, { name: "getPostsQuery" }),
    graphql(addCommentMutation, { name: "addCommentMutation" })
)(AddComment);