import React, { useState } from "react";
import { graphql } from "react-apollo";
import flowright from "lodash.flowright";
import { getPostsQuery, getCommentsQuery, addCommentMutation } from "../../queries/queries";

export const AddComment = props => {
    const values = {
        postId: "",
        commentTextFields: ""
    }

    const [allValues, setAllValues] = useState(values);

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

    const handleChangedValues = e => {
        setAllValues({
            ...allValues,
            [e.target.name]: e.target.value
        });
        console.log(handleChangedValues(e))
    }

    // const selectedPost = id => {
    //     const posts = props.getPostsQuery.posts;
    //     return posts.filter(post => post.id === id);
    // }

    const submitComment = e => {
        e.preventDefault();
        props.addCommentMutation({
            variables: {
                postId: allValues.postId,
                text: allValues.commentTextFields
            },
            refetchQueries: [{ query: getCommentsQuery }]
        });
        setAllValues({
            postId: "",
            commentTextFields: "",
        })
    }

    return (
        <form id="add-comment">
            <div className="field">
                <input
                    type="text"
                    label="Text"
                    placeholder="comment"
                    value={allValues.commentTextFields}
                    onChange={handleChangedValues}
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