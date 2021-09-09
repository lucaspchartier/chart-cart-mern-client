import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getPostsQuery, addPostMutation } from "../queries/queries";

class AddPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ""
        }
    }
}