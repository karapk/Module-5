import { prisma } from "@/server/prisma";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const todos = await prisma.todo.findMany();
    res.status(200).json(todos);
  } else {
    res.status(404).json({ message: "We only support GET requests" });
  }
}