import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import PostList from "./components/PostList";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Chart Cart</h1>
        <PostList/>
      </div>
    );
  }
}

export default App;
