import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import MusicList from './components/MusicList';
import UserList from './components/UserList';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',  // Ensure this points to your local server
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <h1>Music and User Service</h1>
        </header>
        <UserList />
        <MusicList />
      </div>
    </ApolloProvider>
  );
}

export default App;
