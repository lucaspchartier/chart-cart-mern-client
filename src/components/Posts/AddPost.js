import React, { useState } from "react";
import { graphql } from "react-apollo";
import flowright from "lodash.flowright";
import { getPostsQuery, addPostMutation } from "../../queries/queries";

export const AddPost = () => {
    const [inputFields, setInputField] = useState([
        { text: '' }
    ]);

    const submitForm = e => {
        e.preventDefault();
        this.props.addPostMutation({
            variables: {
                text: this.state.text
            },
            refetchQueries: [{ query: getPostsQuery }]
        });
        e.target.reset();
    }

    return (
        <form id="add-post" onSubmit={submitForm}>
            { inputFields.map((inputField, index) => (
                <div key={index}>
                    <input type="text"/>
                </div>
            )) }

            <button>+</button>
        </form>
    );
}

export default flowright(
    graphql(getPostsQuery, { name: "getPostsQuery" }),
    graphql(addPostMutation, { name: "addPostMutation" })
)(AddPost);