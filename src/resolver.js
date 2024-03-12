// resolvers.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const resolvers = {
  Query: {
    users: () => prisma.users.findMany(),
    user: (_, { id }) => prisma.users.findUnique({ where: { id } }),
    articles: () => prisma.articles.findMany(),
    article: (_, { id }) => prisma.articles.findUnique({ where: { id } }),
  },
  Mutation: {
    createUser: (_, { name, email }) => prisma.users.create({ data: { name, email } }),
    updateUser: (_, { id, name }) => prisma.users.update({ where: { id }, data: { name } }),
    deleteUser: (_, { id }) => prisma.users.delete({ where: { id } }),
    createArticle: (_, { title, body, authorId }) => prisma.articles.create({ data: { title, body, authorId } }),
  },
  Users: {
    articles: (parent) => prisma.articles.findMany({ where: { authorId: parent.id } }),
  },
  Articles: {
    author: (parent) => prisma.users.findUnique({ where: { id: parent.authorId } }),
  },
};

export default resolvers;
