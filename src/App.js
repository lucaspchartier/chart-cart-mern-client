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
          <h2 className="posts"><PostList/></h2>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
