import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { getTodos } from "./services/api";
import "./TodoApp.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTodos()
      .then((res) => {
        console.log(res);
        setTodos(res.data.slice(0, 10));
      })
      .catch((err) => {
        console.error("API error:", err);
        setError("Lỗi khi gọi API: " + (err.message || err));
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">Đang tải...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="todo-app">
      <h1>📝 Todo App</h1>
      <TodoForm setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
