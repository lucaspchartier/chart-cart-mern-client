import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getPostsQuery } from "../../queries/queries";

class AddComment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            postId: "",
            text: ""
        }
    }
}