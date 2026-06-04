import React from 'react'

export default function TodoList() {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState("");
    const [filter, setFilter] = useState("all");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!task.trim()) return;

        const newTodo = { ,
            id: Date.now(),
            text: task,
            completed: false,
        };

        setTodos((prev) => [...prev, newTodo]);
        setTask("");
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const toggleComplete = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id == id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        );
    };

    const filteredTodos = todos.filter((todo) => {
        if (filter === "completed") return todo.completed;
        if (filter === "pending") return !todo.completed;
        return true;
    })


    return (
        <div>
            <h2>Todo List App</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter Task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)} />
                <button type="submit">Add</button>
            </form>


            <div>
                <button onClick={() => setFilter("all")}>
                    All
                </button>

                <button onClick={() => setFilter("completed")}>
                    Completed
                </button>

                <button onClick={() => setFilter("pending")}>
                    Pending
                </button>
            </div>

            {filteredTodos.map((todo) => (
                <div key={todo.id}>
                    {todo.text}
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


