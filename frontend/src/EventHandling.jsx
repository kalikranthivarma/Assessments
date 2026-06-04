import React, { useState } from "react";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [filter, setFilter] = useState("all");

  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTodos([...todos, newTodo]); 
    setTask("");
  };

  
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  
  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
    );

    setTodos(updatedTodos);
  };

  
  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });

  return (
    <div style={{ padding: "20px" }}>
      <h2>Todo List App</h2>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button type="submit">Add</button>
      </form>

      <br />

      {/* Filters */}
      <button onClick={() => setFilter("all")}>
        All
      </button>

      <button onClick={() => setFilter("completed")}>
        Completed
      </button>

      <button onClick={() => setFilter("pending")}>
        Pending
      </button>

      <hr />

      
      {filteredTodos.map((todo) => (
        <div key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(todo.id)}
          />

          <span
            style={{
              textDecoration: todo.completed
                ? "line-through"
                : "none",
              marginRight: "10px",
            }}
          >
            {todo.text}
          </span>

          <button
            onClick={() => deleteTodo(todo.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}