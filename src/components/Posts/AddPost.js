import React, { useState } from "react";
import { graphql } from "react-apollo";
import flowright from "lodash.flowright";
import { getPostsQuery, addPostMutation } from "../../queries/queries";

export const AddPost = props => {
    const [inputFields, setInputFields] = useState([ { text: "" } ]);

    const submitForm = e => {
        e.preventDefault();
        props.addPostMutation({
            variables: {
                text: inputFields
            },
            refetchQueries: [{ query: getPostsQuery }]
        });
    };

    return (
        <form id="add-post">
            <input
                name="text"
                label="Text"
                value={inputFields.text}
                onChange={e => setInputFields(e.target.value)}
            />

            <button onClick={submitForm}>+</button>
        </form>
    );
}

export default flowright(
    graphql(getPostsQuery, { name: "getPostsQuery" }),
    graphql(addPostMutation, { name: "addPostMutation" })
)(AddPost);