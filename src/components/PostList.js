import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

import CommentList from "./CommentList";

const getPostsQuery = gql`
  {
    posts {
      id
      text
      comments {
        id
        text
      }
    }
  }
`;

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    }
  }

  displayPosts() {
    const data = this.props.data;
    if (data.loading) {
      return (<div>Loading...</div>);
    } else {
      return data.posts.map(post => {
        return <div key={post.id} onClick={e => {this.setState({ selected: post.id })}}>{post.text}</div>
      });
    }
  };

  render() {
    return (
      <div>
        {this.displayPosts()}
        <CommentList/>
      </div>
    );
  }
}

export default graphql(getPostsQuery)(PostList);
