export default `

    type Book {
        _id: String!
        title: String!
        genre: String!
        author: String!
    }

    type Query {
        book(_id: String!): Book
        books: [Book]
    }

    type Mutation {
        createBook(title: String!, genre: String!, author: String!): Book
        deleteBook(_id: String!): Book
        editBook(_id: String!, title: String!, genre: String!, author: String!): Book
    }

`
