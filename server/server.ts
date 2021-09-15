import express from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";
import {connectDB} from './configs/db'
import  mongoDataMethods  from "./data/mongodb.data";

const app = express();
app.use(express.json());
let apoloServer: any = null;
connectDB();
const startServer = async () => {
  try {
    apoloServer = new ApolloServer({
      typeDefs, resolvers, context: () =>({
      mongoDataMethods  
    }) });
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
