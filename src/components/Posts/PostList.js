import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

import AddPost from "./AddPost";
import AddComment from "../Comments/AddComment";
import CommentList from "../Comments/CommentList";
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
      selectedPost: null,
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
          selectedPost: post.id,
          comments: post.comments
        })}}>{post.text}</div>
      });
    }
  };

  render() {
    return (
      <div className="post-list">
        {this.displayPosts()}
        <CommentList selectedPost={this.state.selectedPost} comments={this.state.comments}/>
        <AddComment/>
        <AddPost/>
      </div>
    );
  }
}

export default graphql(getPostsQuery)(PostList);
