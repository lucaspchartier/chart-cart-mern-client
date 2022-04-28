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

    const handleChangeInput = (e, index) => {
        const values = [...inputFields];
        values[index][e.target.text] = e.target.value;
        setInputFields(values);
    };

    return (
        <form id="add-post">
            {inputFields.map((inputField, index) => (
                <div key={index}>
                    <input
                        name="text"
                        label="Text"
                        value={inputField.text}
                        onChange={e => setInputFields(e.target.value)}
                    />
                </div>
            ))}

            <button onClick={submitForm}>+</button>
        </form>
    );
}

export default flowright(
    graphql(getPostsQuery, { name: "getPostsQuery" }),
    graphql(addPostMutation, { name: "addPostMutation" })
)(AddPost);