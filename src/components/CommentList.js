import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const getCommentsQuery = gql`
    comments {
        id
        text
    }
`

class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null
        }
    }
}