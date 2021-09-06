const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const app = express();
app.use(express.json());
let apoloServer = null;
const startServer = async () => {
  try {
    apoloServer = new ApolloServer({ typeDefs, resolvers });
    await apoloServer.start();
    apoloServer.applyMiddleware({ app });
  } catch (error) {
    console.log(error);
  }
};
startServer();
app.listen({ port: 4000 }, () => {
  console.log(`🚀 localhost:4000${apoloServer.graphqlPath}`);
});
