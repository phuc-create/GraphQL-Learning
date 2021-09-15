import Authors from "./models/Author.model"
import Books from "./models/Book.model"
import { books, authors } from "./static"
//default about resolvers accept optionally four paramater (parent, args, context, info)
//we can using _ for param don't actual need for you request
//return is required for any child field if you wanna get data from reference data

export const resolvers = {
  Query: {
    books: async (_: any, __: any, context: any, ____: any) => { return await context.mongoDataMethods.getAllBooks()
     },
    authors: async (_: any, __: any, context: any, ____: any) => { return await context.mongoDataMethods.getAllAuthors()
     },
    book: (_: any, args: { id: number }, ___: any, ____: any) =>
      books.find((book: { id: number }) => book.id === args.id),

    author: (_: any, args: { authorId: number }, ___: any, ____: any) => {
      return authors.find(
        (author: { id: number }) => author.id === args.authorId
      );
    },
  },
  Book: {
    author: (parent: { authorId: number }, __: any, ___: any, ____: any) => {
      return authors.find(
        (author: { id: number }) => author.id === parent.authorId
      );
    },
  },
  Author: {
    books: (parent: { id: number }, __: any, ___: any, ____: any) => {
      // console.log(parent);
      return books.filter(
        (book: { authorId: number }) => book.authorId === parent.id
      );
    },
  },
  //MUTATION FOR CREATE,UPDATE AND DELETE
  Mutation: {
    createAuthor: async (_: any, args: any, ___: any, ____: any) => {
      try {
        const newAuthor = new Authors(args)
        return await newAuthor.save()
        
      } catch (error) {
        console.log(error)
      }
      
    },
    createBook: async (_: any, args: any, ___: any, ____: any) => {
      try {
        const newBook = new Books(args)
        return await newBook.save()
        
      } catch (error) {
        console.log(error)
      }
    }
      }
}

