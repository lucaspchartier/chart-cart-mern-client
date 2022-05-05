import React, { useState } from "react";
import { graphql } from "react-apollo";
import flowright from "lodash.flowright";
import { getPostsQuery, addPostMutation } from "../../queries/queries";

export const AddPost = props => {
    const state = {
        text: ""
    };

    const [postTextFields, setPostTextFields] = useState(state);

    const submitForm = e => {
        e.preventDefault();
        props.addPostMutation({
            variables: {
                text: postTextFields
            },
            refetchQueries: [{ query: getPostsQuery }]
        });
        console.log(setPostTextFields(), postTextFields);
    };

    const handlePostTextInput = e => setPostTextFields(e.target.value);

    return (
        <form id="add-post">
            <input
                name="text"
                label="Text"
                placeholder="post"
                value={postTextFields.text}
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