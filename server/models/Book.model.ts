import mongoose from 'mongoose'

interface Book{
    name: string;
    authorId: any;
}
const Schema = mongoose.Schema

 const BookSchema = new Schema<Book>({
    name: { type: String, required: true },
    authorId: Schema.Types.ObjectId,
})

const Books = mongoose.model<Book>('books', BookSchema)
export default Books