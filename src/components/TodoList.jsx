import TodoItem from "./TodoItem";

function TodoList({ todos, setTodos }) {
  return (
    <div className="todo-list">
      <h2>Danh sách công việc ({todos.length})</h2>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
