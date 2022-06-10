import React, { useState } from "react";
import { graphql } from "react-apollo";
import flowright from "lodash.flowright";
import { getPostsQuery, getCommentsQuery, addCommentMutation } from "../../queries/queries";

export const AddComment = props => {
    const [postId, setPostId] = useState(0);
    const [commentTextFields, setCommentTextFields] = useState("");

    // const displayComments = () => {
    //     const data = props;
    //     if (data.addCommentMutationResult.loading) {
    //         return (<option>Loading Comments...</option>)
    //     } else {
    //         return data.comments.map(comment => {
    //             return (<option key={comment.id} value={comment.id}>{comment.text}</option>)
    //         });
    //     }
    // }

    // const bindCommentToPost = id => {
    //     const posts = props.getPostsQuery.posts;
    //     return posts.filter(post => post.id === id);
    // }

    const handleCommentTextInput = e => setCommentTextFields(e.target.value);

    const submitComment = e => {
        e.preventDefault();
        props.addCommentMutation({
            variables: {
                postId: postId,
                text: commentTextFields
            },
            refetchQueries: [{ query: getCommentsQuery }]
        });
        setPostId(0);
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
                    onChange={handleCommentTextInput}
                />
            </div>

            <button onClick={submitComment}>+</button>
        </form>
    );
}

export default flowright(
    graphql(getPostsQuery, { name: "getPostsQuery" }),
    graphql(addCommentMutation, { name: "addCommentMutation" })
)(AddComment);