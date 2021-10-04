import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

import AddPost from "./AddPost";
import CommentList from "./CommentList";
import './PostList.css';

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
        return <div key={post.id} onClick={e => {this.setState({
          selected: post.id,
          comments: post.comments
        })}}>{post.text}</div>
      });
    }
  };

  render() {
    return (
      <div id="posts">
        {this.displayPosts()}
        <h3><CommentList comments={this.state.comments}/></h3>
        <AddPost/>
      </div>
    );
  }
}

export default graphql(getPostsQuery)(PostList);
