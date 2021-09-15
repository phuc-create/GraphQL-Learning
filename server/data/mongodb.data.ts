import Authors from "../models/Author.model"
import Books from "../models/Book.model"

 const mongoDataMethods = {
    getAllBooks: async () =>  await Books.find(),
    getAllAuthors: async () =>  await Authors.find()
    
}
export default mongoDataMethods