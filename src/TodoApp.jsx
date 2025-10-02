import { useState } from "react";
import "./TodoApp.css"; // CSS import

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="app-container">
      <div className="todo-card">
        <h1 className="title">Todo List</h1>

        <div className="input-container">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a new todo"
            className="todo-input"
          />
          <button onClick={addTodo} className="add-btn">
            Add
          </button>
        </div>

        <ul className="todo-list">
          {todos.map((todo, i) => (
            <li key={i} className="todo-item">
              <span>{todo}</span>
              <button onClick={() => removeTodo(i)} className="remove-btn">
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
