const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const todos = [
    {id: 1,
      title: "Water the plants", description: "The plants are thirsty"},
    {id: 2,
      title: "Make todo app", description: "Create a todo app using Prisma"},
    {id: 3,
      title: "Update schema", description: "Add a new field to the schema"},
    {id: 4,
      title: "Create some seed data", description: "Seed the database with some data"},
    {id: 5,
      title: "create a route", description: "Create a route to fetch all todos"},
  ];
  for (const todo of todos) {
    await prisma.todo.create({
      data: todo,
    });
  }
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
