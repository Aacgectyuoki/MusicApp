import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import App from './App';
import './index.css';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);


// require('dotenv').config();
// const express = require('express');
// // @ts-ignore
// const { graphqlHTTP } = require('express-graphql');
// const { buildSchema } = require('graphql');
// const mongoose = require('mongoose');
// const axios = require('axios').default; // Ensure correct import for TypeScript

// // Ensure MONGODB_URI is defined
// const mongoUri = process.env.MONGODB_URI;
// if (!mongoUri) {
//   throw new Error('MONGODB_URI is not defined in the environment variables');
// }

// // MongoDB connection
// mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected successfully'))
//   .catch(err => console.error('MongoDB connection error:', err));

// // Define Mongoose User schema and model
// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
// });
// const User = mongoose.model('User', userSchema);

// // Define GraphQL schema
// const schema = buildSchema(`
//   type User {
//     id: ID!
//     name: String!
//     email: String!
//   }

//   type Track {
//     id: ID!
//     title: String!
//     artist: Artist!
//     preview: String!
//   }

//   type Artist {
//     name: String!
//   }

//   type Query {
//     users: [User]
//     tracks: [Track]
//   }
// `);

// // Define resolvers
// const root = {
//   users: async () => {
//     return await User.find();
//   },
//   tracks: async () => {
//     const response = await axios.get('https://api.deezer.com/chart');
//     return response.data.tracks.data;
//   }
// };

// // Set up Express server with GraphQL endpoint
// const app = express();
// app.use('/graphql', graphqlHTTP({
//   schema: schema,
//   rootValue: root,
//   graphiql: true,
// }));

// // Start server
// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}/graphql`);
// });
