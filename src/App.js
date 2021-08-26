import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import PostList from "./components/PostList";

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
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
