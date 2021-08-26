import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const getPostsQuery = gql`
  {
    posts {
      text
      comments {
        text
      }
    }
  }
`;

class PostList extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>Post</li>
        </ul>
      </div>
    );
  }
}

export default graphql(getPostsQuery)(PostList);
