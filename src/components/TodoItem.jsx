function TodoItem({ todo, setTodos }) {
  const handleDelete = () => {
    setTodos((prev) => prev.filter((t) => t.id !== todo.id));
  };

  const handleToggle = () => {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === todo.id ? { ...t, completed: !t.completed } : t,
      ),
    );
  };

  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={todo.completed || false}
        onChange={handleToggle}
        className="todo-checkbox"
      />
      <span className="todo-text">{todo.title}</span>
      <button onClick={handleDelete} className="todo-delete-btn">
        X
      </button>
    </li>
  );
}

export default TodoItem;
