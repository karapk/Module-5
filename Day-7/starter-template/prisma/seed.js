const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const todos = [
    {id: 1,
      title: "Water the plants", description: "The plants are thirsty", completed: false},
    {id: 2,
      title: "Make Todo app", description: "Create a todo app using Prisma", completed: false},
    {id: 3,
      title: "Update Schema", description: "Add a new field to the schema", completed: false},
    {id: 4,
      title: "Create some seed data", description: "Seed the database with some data", completed: false},
    {id: 5,
      title: "Create a route", description: "Create a route to fetch all todos", completed: false},
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
