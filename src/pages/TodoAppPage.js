import React from 'react';
import TodoApp from '../components/TodoApp/TodoApp';

function TodoAppPage() {
    return (
        <div className="todo-app-page">
            <header className="app-header">
                <h1>✅ My Todo Application</h1>
                <p>Stay on top of your tasks in style.</p>
            </header>
            <main>
                <TodoApp />
            </main>
        </div>
    );
}

export default TodoAppPage;
