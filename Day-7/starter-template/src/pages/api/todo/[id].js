import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'PUT') {
    try {
      const updatedTodo = await prisma.todo.update({
        where: { id: parseInt(id, 10) },
        data: { completed: true },
      });
      res.status(200).json(updatedTodo);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update todo' });
    }
  } else {
    res.setHeader('Allow', ['PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
