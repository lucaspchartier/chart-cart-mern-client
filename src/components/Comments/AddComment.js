import React, { useState } from "react";
import { graphql } from "react-apollo";
import flowright from "lodash.flowright";
import { getPostsQuery, getCommentsQuery, addCommentMutation } from "../../queries/queries";

export const AddComment = props => {
    const commentValues = {
        postId: 0,
        commentTextFields: ""
    };

    const [allCommentValues, setAllCommentValues] = useState(commentValues);

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

    const handleChangedCommentValues = (e, id) => {
        setAllCommentValues({
            ...allCommentValues,
            postId: id,
            commentTextFields: e.target.value
        });
    }

    // const selectedPost = id => {
    //     const posts = props.getPostsQuery.posts;
    //     return posts.filter(post => post.id === id);
    // }

    const submitComment = e => {
        e.preventDefault();
        props.addCommentMutation({
            variables: {
                postId: allCommentValues.postId,
                text: allCommentValues.commentTextFields
            },
            refetchQueries: [{ query: getCommentsQuery }]
        });
        setAllCommentValues(commentValues);
    };

    return (
        <form id="add-comment">
            <div className="field">
                <input
                    type="text"
                    label="Text"
                    placeholder="comment"
                    onChange={event => handleChangedCommentValues(event, props.postId)}
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