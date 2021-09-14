import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const getCommentsQuery = gql`
    comments {
        id
        text
    }
`