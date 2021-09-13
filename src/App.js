import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import PostList from "./components/PostList";
import AddPost from "./components/AddPost";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <h1>Chart Cart</h1>
          <PostList/>
          <AddPost/>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
