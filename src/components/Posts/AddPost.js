import React, { useState } from "react";
import { graphql } from "react-apollo";
import flowright from "lodash.flowright";
import { getPostsQuery, addPostMutation } from "../../queries/queries";

export const AddPost = props => {
    const [postTextFields, setPostTextFields] = useState("");

    const submitForm = e => {
        e.preventDefault();
        props.addPostMutation({
            variables: {
                text: postTextFields
            },
            refetchQueries: [{ query: getPostsQuery }]
        });
    };

    const handlePostTextInput = e => {
        console.log(e.target.value);
        setPostTextFields(e.target.value);
    };

    return (
        <form id="add-post">
            <input
                type="text"
                label="Text"
                placeholder="post"
                value={postTextFields}
                onChange={handlePostTextInput}
            />

            <button onClick={submitForm}>+</button>
        </form>
    );
}

export default flowright(
    graphql(getPostsQuery, { name: "getPostsQuery" }),
    graphql(addPostMutation, { name: "addPostMutation" })
)(AddPost);