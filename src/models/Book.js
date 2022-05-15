import mongoose from "mongoose";
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
})

const Book = mongoose.model("Book", BookSchema);
export default Book;
