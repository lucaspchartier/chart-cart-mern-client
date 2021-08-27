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
      return (<div>Loading...</div>);
    } else {
      return data.posts.map(post => {
        return (
          <li>{post.text}</li>
        )
      })
    }
  };

  render() {
    return (
      <div>
        <ul id="post-list">
          <li>Post</li>
        </ul>
      </div>
    );
  }
}

export default graphql(getPostsQuery)(PostList);
