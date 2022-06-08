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

    const submitComment = e => {
        e.preventDefault();
        props.addCommentMutation({
            variables: {
                postId: postId,
                text: commentTextFields
            },
            refetchQueries: [{ query: getCommentsQuery }]
        });
        setCommentTextFields("");
    }

    return (
        <form id="add-comment">
            <div className="field">
                <input
                    type="text"
                    label="Text"
                    placeholder="comment"
                    value={commentTextFields}
                    onChange={e => {
                        this.setState({ text: e.target.value })
                        bindCommentToPost(this.setState({ postId: this.props.postId }))
                        displayComments()
                    }}/>
            </div>

            <button onClick={submitComment}>+</button>
        </form>
    );
}

export default flowright(
    graphql(getPostsQuery, { name: "getPostsQuery" }),
    graphql(addCommentMutation, { name: "addCommentMutation" })
)(AddComment);