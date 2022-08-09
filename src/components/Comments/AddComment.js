import { useState } from "react";
import { graphql } from "react-apollo";
import flowright from "lodash.flowright";
import { getPostsQuery, getCommentsQuery, addCommentMutation } from "../../queries/queries";

export const AddComment = props => {
    const [allCommentValues, setAllCommentValues] = useState({
        postId: 0,
        commentTextFields: ""
    });

    const handleChangedCommentValues = (e, id) => {
        setAllCommentValues({
            ...allCommentValues,
            postId: id,
            commentTextFields: e.target.value
        });
    };

    const submitComment = e => {
        props.addCommentMutation({
            variables: {
                postId: allCommentValues.postId,
                text: allCommentValues.commentTextFields
            },
            refetchQueries: [{ query: getCommentsQuery }]
        });
        setAllCommentValues({
            ...allCommentValues,
            postId: 0,
            commentTextFields: ""
        });
    };

    return (
        <form id="add-comment">
            <input
                type="text"
                label="Text"
                placeholder="comment"
                value={allCommentValues.commentTextFields}
                onChange={event => handleChangedCommentValues(event, props.postId)}
            />

            <button onClick={submitComment}>+</button>
        </form>
    );
}

export default flowright(
    graphql(getPostsQuery, { name: "getPostsQuery" }),
    graphql(addCommentMutation, { name: "addCommentMutation" })
)(AddComment);