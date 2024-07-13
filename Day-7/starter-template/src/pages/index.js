import { useEffect, useState } from 'react';

export default function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchTodos() {
      const res = await fetch("/api/todo");
      const data = await res.json();
      setTodos(data);
    }
    fetchTodos();
  },
   []);

  return (
    <div>
      <h1>My Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}