import { useState } from "react";
import { graphql } from "react-apollo";
import flowright from "lodash.flowright";
import { getPostsQuery, addPostMutation } from "../../queries/queries";

export const AddPost = props => {
    const [postTextFields, setPostTextFields] = useState("");

    const handlePostTextInput = e => setPostTextFields(e.target.value);

    const submitPost = e => {
        props.addPostMutation({
            variables: {
                text: postTextFields
            },
            refetchQueries: [{ query: getPostsQuery }]
        });
        setPostTextFields("");
        props.displayPosts();
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

            <button onClick={submitPost}>+</button>
        </form>
    );
}

export default flowright(
    graphql(getPostsQuery, { name: "getPostsQuery" }),
    graphql(addPostMutation, { name: "addPostMutation" })
)(AddPost);