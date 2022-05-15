import {mergeTypeDefs} from "@graphql-tools/merge"
import User from "./types/User"
import Book from "./types/Book"

export default mergeTypeDefs([
    User,
    Book,
])