import { gql } from "apollo-server-express";
export const typeDefs = gql`
  type Book {
    id: ID
    name: String
    authorId: ID
    author: Author
  }
  type Author {
    id: ID!
    nameAuthor: String
    books: [Book]
  }
  #BELOW IS ROOT QUERY
  type Query {
    books: [Book]
    book(id: ID!): Book
    authors: [Author]
    author(authorId: ID!): Author
  }
`;
