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
  dispayPosts() {
    const data = this.props.data;
    if (data.loading) {
      return (<div>Loading...</div>)
    }
  }

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
