import { useEffect, useState } from 'react';

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  useEffect(() => {
    async function fetchTodos() {
      const res = await fetch("/api/todo");
      const data = await res.json();
      setTodos(data);
    }
    fetchTodos();
  }, []);

  const filteredTodos = showCompleted ? todos : todos.filter(todo => !todo.completed);

  async function markAsComplete(id) {
    await fetch(`/api/todo/${id}`, {
      method: 'PUT',
    });

    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: true } : todo));
  }

  async function deleteTodo() {
    const res = await fetch(`/api/todo/${id}`, 
      {
        method: 'DELETE',
      });
    const data = await res.json();
    setTodos(todos.filter(todo => todo.id !== id));
    alert(`Todo with id ${id} has been deleted`);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div>
        <label>
          Show Completed Todos Only:
          <input
            type="checkbox"
            checked={showCompleted}
            onChange={(e) => setShowCompleted(e.target.checked)}
          />
        </label>
      </div>
      <h1>My Todos</h1>
      <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
        {filteredTodos.map((todo) => (
          <li key={todo.id} style={{ padding: '10px', margin: '5px', border: '1px solid #ddd', borderRadius: '5px' }}>
            {todo.title} 
            <button 
              type="button" 
              className="btn btn-success" 
              onClick={() => markAsComplete(todo.id)}
              disabled={todo.completed}
            >
              {todo.completed ? 'Completed' : 'Complete'}
            </button>
            <button 
              type="button" 
              className="btn btn-danger" 
              onClick={() => deleteTodo(todo.id)}></button>
          </li>
        ))}
      </ul>
    </div>
  );
}
