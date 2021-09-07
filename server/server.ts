import express from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";

const app = express();
app.use(express.json());
let apoloServer: any = null;
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
