
// import { books, authors } from "./static"
// //default about resolvers accept optionally four paramater (parent, args, context, info)
// //we can using _ for param don't actual need for you request
// //return is required for any child field if you wanna get data from reference data



export const resolvers = {
  Query: {
    books:  () => {
    
    },
    authors:  () => {
     
     },
    book: (root: any) => {
     
    },

    author: (_: any, args: any, ___: any, ____: any) => {
    
    },
  },
  // Book: {
  //   author: (parent: { authorId: number }, __: any, ___: any, ____: any) => {
  //     return authors.find(
  //       (author: { id: number }) => author.id === parent.authorId
  //     );
  //   },
  // },
  // Author: {
  //   books: (parent: { id: number }, __: any, ___: any, ____: any) => {
  //     // console.log(parent);
  //     return books.filter(
  //       (book: { authorId: number }) => book.authorId === parent.id
  //     );
  //   },
  // },
  //MUTATION FOR CREATE,UPDATE AND DELETE
  Mutation: {
    createAuthor:  (_: any, args: any, ___: any, ____: any) => {
     
    },
    createBook:  (_: any, args: any, ___: any, ____: any) => {
       
    }
      }
}

