import React from 'react';

function TodoItem({ todo, onToggle, onDelete }) {
    return (
        <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <span onClick={() => onToggle(todo.id)} className="todo-text">
                {todo.todo}
            </span>
            <button onClick={() => onDelete(todo.id)} className="delete-btn">
                Delete
            </button>
        </div>
    );
}

export default TodoItem;