import Book from "../../models/Book"

export default {
    Query: {
        book: async (root, { _id }) => {
            const book = await Book.findById(_id).exec();
            return book;
        },
        books: async () => {
            const books = await Book.find({});
            return books;
        }
    },
    Mutation: {
        createBook: async (root, {title, genre, author}) => {
            const newBook = new Book({
                title,
                genre,
                author,
            })
            await newBook.save();
            return newBook;
        },
        deleteBook: async(root, {_id}) => {
            const book = Book.findByIdAndRemove(_id);
            return book;
        },
        editBook: async(root, {_id, title, genre, author}) => {
            const book = await Book.findOneAndUpdate(_id, {
                title,
                genre,
                author, 
            });
            return book;
        },
    }
}

