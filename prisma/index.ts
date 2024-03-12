import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Prisma Queries

  const user = await prisma.users.create({
    data: {
      name: 'John Doe',
      email: 'john@gmail.com',
    },
  });
  console.log(user);

// Get all users
const users = await prisma.users.findMany();
console.log(users);

// Get particular user data
  const user = await prisma.users.findUnique({
    where: {
      id:2,
    },
  });
  console.log(user);


// Update user data
const user = await prisma.users.update({
  where: {
    id:2,
  },
  data: {
    name: 'Arun King',
  }
});
console.log(user); 


// Delete User Data
const article = await prisma.articles.delete({
  where: {
    id: 2,
  },
});
console.log(article); 

const article = await prisma.articles.create({
    data: {
      title: 'Johns First Article',
      body: 'This is Johns first article',
      author: {
        connect: {
          id: 1,
        },
      },
    },
  });
  console.log(article);




// Get all articles

const article = await prisma.articles.findMany();
console.log(article);

// Create user and article and associate them

const user = await prisma.users.create({
    data: {
      name: 'Arun S',
      email: 'arunsekar071@gmail.com',
      articles: {
        create: {
          title: 'Web developer',
          body: 'This is my first development',
        },
      },
    },
  });
  console.log(user);


// // Create another article

const article = await prisma.articles.create({
    data: {
        title:'Sample Article',
        body: 'This is a sample article',
        author: {
            connect:{
                id:2,
            },
        },
    },
});
console.log(article);




}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });