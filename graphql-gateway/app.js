const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const mongoose = require('mongoose');
const axios = require('axios').default;  // Ensure this import is correct
const cors = require('cors');  // Import the CORS package
require('dotenv').config(); // Load environment variables

// MongoDB connection
const mongoUri = process.env.MONGODB_URI;
if (!mongoUri) {
  throw new Error("MongoDB URI is not defined in environment variables");
}
console.log("Connecting to MongoDB with URI:", mongoUri);
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

// Define Mongoose User schema and model
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});
const User = mongoose.model('User', userSchema);

// Define GraphQL schema
const schema = buildSchema(`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Track {
    id: ID!
    title: String!
    artist: Artist!
    preview: String!
  }

  type Artist {
    name: String!
  }

  type Query {
    users: [User]
    tracks: [Track]
  }
`);

// Define resolvers
const root = {
  users: async () => {
    return await User.find();
  },
  tracks: async () => {
    const response = await axios.get('https://api.deezer.com/chart');
    return response.data.tracks.data;
  }
};

// Set up Express server with GraphQL endpoint
const app = express();
app.use(cors());  // Use the CORS middleware
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/graphql`);
});
