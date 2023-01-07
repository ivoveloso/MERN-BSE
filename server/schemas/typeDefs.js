const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Book {
    _id: ID!
    bookId: String
    authors: String
    description: Int
    title: String
    image: String
    link: String

  }

  type User {
    _id: ID!
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: savedBook!): User
    removeBook(bookId: ID!): User
}
`;

module.exports = typeDefs;
