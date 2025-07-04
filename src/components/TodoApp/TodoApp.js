import React, { useState, useEffect } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Filter from './Filter';

function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('all');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const savedTodos = localStorage.getItem('todos');
        if (savedTodos) {
            setTodos(JSON.parse(savedTodos));
        } else {
            fetchInitialTodos();
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const fetchInitialTodos = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://dummyjson.com/todos');
            const data = await response.json();
            setTodos(data.todos.slice(0, 5));
        } catch (error) {
            console.error('Error fetching todos:', error);
        } finally {
            setLoading(false);
        }
    };

    const addTodo = (text) => {
        const newTodo = {
            id: Date.now(),
            todo: text,
            completed: false
        };
        setTodos([...todos, newTodo]);
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const filteredTodos = todos.filter(todo => {
        if (filter === 'completed') return todo.completed;
        if (filter === 'pending') return !todo.completed;
        return true;
    });

    return (
        <section className="todo-app-container">
            <div className="todo-card">
                <h2>📝 Manage Your Tasks</h2>
                <AddTodo onAdd={addTodo} />
                <Filter filter={filter} setFilter={setFilter} />
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <TodoList
                        todos={filteredTodos}
                        onToggle={toggleTodo}
                        onDelete={deleteTodo}
                    />
                )}
            </div>
        </section>
    );
}

export default TodoApp;
