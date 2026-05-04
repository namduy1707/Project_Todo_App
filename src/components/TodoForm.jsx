import { useState } from "react";

function TodoForm({ setTodos }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (!text.trim()) return;

    setTodos((prev) => [
      ...prev,
      {
        id: Date.now(),
        title: text.trim(),
        completed: false,
      },
    ]);

    setText("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div className="todo-form">
      <div className="todo-form-container">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Nhập công việc mới..."
          className="todo-input"
        />
        <button onClick={handleAdd} className="todo-add-btn">
          Thêm
        </button>
      </div>
    </div>
  );
}

export default TodoForm;
