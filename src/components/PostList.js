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
      selected: null,
      comments: []
    }

    this.displayPosts = this.displayPosts.bind(this);
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
    // console.log(this.props.data.posts);
    return (
      <div>
        {this.displayPosts()}
        <CommentList comments={this.state.comments}/>
      </div>
    );
  }
}

export default graphql(getPostsQuery)(PostList);
