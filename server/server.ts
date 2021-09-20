import express from "express"
import { ApolloServer } from "apollo-server-express"
import { typeDefs } from "./schema"
import { resolvers } from "./resolvers"
// import  mongoDataMethods  from "./data/mongodb.data"
import {client} from "./configs/db"

const app = express()
app.use(express.json())
client
  .connect()
  .then(() => {
    
    client.query('SELECT * FROM authors;', (err, res) => {
      if (err) throw err;
      for (let row of res.rows) {
        console.log(JSON.stringify(row));
      }
      client.end();
    })
  }
  )
  .catch(err => console.error('connection error', err.stack))
  
let apoloServer: any = null
const startServer = async () => {
  try {
    apoloServer = new ApolloServer({
      typeDefs, resolvers  
    })
    await apoloServer.start();
    apoloServer.applyMiddleware({ app })
  } catch (error) {
    console.log(error)
  }
};
startServer();
app.listen({ port: 4000 }, () => {
  
// console.log(` $$$$$$$\  $$\                              `);
// console.log(` $$  __$$\ $$ |                             `);
// console.log(` $$ |  $$ |$$$$$$$\  $$\   $$\  $$$$$$$\    `);
// console.log(` $$$$$$$  |$$  __$$\ $$ |  $$ |$$  _____|   `);
// console.log(` $$  ____/ $$ |  $$ |$$ |  $$ |$$ /         `);
// console.log(` $$ |      $$ |  $$ |$$ |  $$ |$$ |         `);
// console.log(` $$ |      $$ |  $$ |\$$$$$$  |\$$$$$$$\    `);
// console.log(` \__|      \__|  \__| \______/  \_______|$$$`);
// console.log(`                                        \___`);
                                                            
  console.log(`🚀 localhost:4000${apoloServer.graphqlPath}`)
});
