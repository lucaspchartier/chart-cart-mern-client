import React, { useState } from "react";
import { graphql } from "react-apollo";
import flowright from "lodash.flowright";
import { getPostsQuery, addPostMutation } from "../../queries/queries";

export const AddPost = props => {
    const [postTextFields, setPostTextFields] = useState([ { text: "" } ]);

    const submitForm = e => {
        e.preventDefault();
        props.addPostMutation({
            variables: {
                text: postTextFields
            },
            refetchQueries: [{ query: getPostsQuery }]
        });
    };

    const handleTextInput = e => setPostTextFields(e.target.value);

    return (
        <form id="add-post">
            <input
                name="text"
                label="Text"
                value={postTextFields.text}
                onChange={handleTextInput}
            />

            <button onClick={submitForm}>+</button>
        </form>
    );
}

export default flowright(
    graphql(getPostsQuery, { name: "getPostsQuery" }),
    graphql(addPostMutation, { name: "addPostMutation" })
)(AddPost);