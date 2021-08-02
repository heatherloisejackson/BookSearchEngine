const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [bookSchema]!
  }

  type Book {
    bookID: String
    authors: String
    description: String
    title: String
    image: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    savedBooks(username: String): [Book]
    books(bookId: String!): Book
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(bookId: ID!): User
    deleteBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
