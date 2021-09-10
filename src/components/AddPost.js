import React, { Component } from "react";
import { graphql } from "react-apollo";
import flowright from "lodash.flowright";
import { getPostsQuery, addPostMutation } from "../queries/queries";

class AddPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ""
        }
    }

    submitForm(e) {
        e.preventDefault();
        this.props.addPostMutation({
            variables: {
                text: this.state.text
            },
            refetchQueries: [{ query: getPostsQuery }]
        });
    }

    render() {
        return (
            <form id="add-post" onSubmit={ this.submitForm.bind(this) }>
                <div class="field">
                    <input type="text" onChange={ e => this.setState({ text: e.target.value }) }/>
                </div>
            </form>
        );
    }
}

export default flowright(
    graphql(getPostsQuery, { name: "getPostsQuery" }),
    graphql(addPostMutation, { name: "addPostMutation" })
)(AddPost);