import { gql } from "apollo-server-express";
export const typeDefs = gql`
scalar Date
  type Book {
    id: ID!
    name_book: String
    id_author: ID
    author: Author
  }
  type Author {
    id: ID!
    name_author: String
    age:Int
    books: [Book]
  }
  type Hello {
    hello:String
  }
  #BELOW IS ROOT QUERY
  type Query {
    hello:[Hello]
    books: [Book]
    book(id: ID!): Book
    authors: [Author]
    author(id_author: ID!): Author
  }
  type Mutation{
    createAuthor(name_author:String,age:Int):Author,  
    createBook(
    book_name: String,
    date_release: Date,
    id_author: ID!):Book
  }
`;
