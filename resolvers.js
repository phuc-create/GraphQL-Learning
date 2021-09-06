const { books, authors } = require("./static");

const resolver = {
  Query: {
    books: () => books,
    authors: () => authors,
    book: (parent, args) =>
      books.find((book) => book.id.toString() === args.id),

    author: (parent, args) => {
      return authors.find((author) => author.id === Number(args.authorId));
    },
  },
  Book: {
    author: (parent) => {
      return authors.find((author) => author.id === parent.authorId);
    },
  },
};
module.exports = resolver;
