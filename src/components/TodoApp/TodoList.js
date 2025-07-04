import React from 'react';
function TodoList({ todos, onToggle, onDelete }) {
    if (todos.length === 0) {
        return (
            <div className="no-tasks">
                <p>🚫 No tasks found!</p>
            </div>
        );
    }

    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                    <span>{todo.todo}</span>
                    <div className="todo-item-actions">
                        <button
                            className="toggle text-success"
                            onClick={() => onToggle(todo.id)}
                            title="Mark as done"
                        >
                            ✅
                        </button>
                        <button
                            className="delete text-danger"
                            onClick={() => onDelete(todo.id)}
                            title="Delete"
                        >
                            <i className="bi bi-trash-fill"></i>
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
}





export default TodoList;