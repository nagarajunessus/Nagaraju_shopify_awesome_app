// schema.js

import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    users: [Users]
    user(id: Int!): Users
    articles: [Articles]
    article(id: Int!): Articles
  }

  type Mutation {
    createUser(name: String!, email: String!): Users
    updateUser(id: Int!, name: String!): Users
    deleteUser(id: Int!): Users
    createArticle(title: String!, body: String!, authorId: Int!): Articles
  }

  type Users {
    id: Int
    name: String
    email: String
    articles: [Articles]
  }

  type Articles {
    id: Int
    title: String
    body: String
    author: Users
  }
`;

export default typeDefs;