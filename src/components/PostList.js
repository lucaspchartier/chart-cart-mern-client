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
  displayPosts() {
    const data = this.props.data;
    if (data.loading) {
      return (<div>Loading...</div>);
    } else {
      return data.posts.map(post => {
        return (
          <div>{post.text}</div>
        )
      })
    }
  };

  render() {
    return (
      <div>
        {this.displayPosts()}
      </div>
    );
  }
}

export default graphql(getPostsQuery)(PostList);
