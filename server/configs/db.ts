import dotenv from 'dotenv'
import { Pool, Client } from 'pg'
dotenv.config()

interface DBConnect{
  user: string;
  host: string;
  database: string;
  password: string;
  port: number;
}
// const config = new Pool({
//     user: `${process.env.DB_USERNAME}`,
//     host: 'localhost',
//     database: 'graphql_learning',
//     password: `${process.env.DB_PASSWORD}`,
//     port: 5432,
// })
// config.query('SELECT * FROM books', (err, res) => {
//   console.log(err, res.rows)
//   config.end()
// })
////////////////////////



const client = new Client({
  host: 'ec2-54-145-188-92.compute-1.amazonaws.com',
  port: 5432,
  user: 'hntbdvitabvwsx',
  password: 'f27e06809b491b247c7dbf3d3d9f07f2d01e4350a8f79aedbc2a7fdb0d3f6cb4',
  database:'dd7iq9himunnd9'
})

export {client} 