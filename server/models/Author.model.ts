import mongoose from 'mongoose'


interface Author{
    nameAuthor:string
}

const Schema = mongoose.Schema

const AuthorSchema = new Schema<Author>({
    nameAuthor: { type: String, required: true}
})

const Authors = mongoose.model<Author>('authors', AuthorSchema)
export default Authors