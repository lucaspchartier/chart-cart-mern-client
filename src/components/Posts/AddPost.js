import React, { useState } from "react";
import { graphql } from "react-apollo";
import flowright from "lodash.flowright";
import { getPostsQuery, addPostMutation } from "../../queries/queries";

export const AddPost = () => {
    const [inputFields, setInputFields] = useState([ { text: "" } ]);

    const submitForm = e => {
        e.preventDefault();
        this.props.addPostMutation({
            variables: {
                text: this.state.text
            },
            refetchQueries: [{ query: getPostsQuery }]
        });
        e.target.reset();
    };

    const handleTextInput = e => {
        e.persist();
        setInputFields(inputFields => ({
            ...inputFields,
            text: e.target.value
        }));
        console.log(inputFields.text);
    };

    return (
        <form id="add-post">
            <input
                name="text"
                label="Text"
                value={inputFields.text}
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