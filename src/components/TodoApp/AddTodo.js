import React, { useState } from 'react';

function AddTodo({ onAdd }) {
    const [text, setText] = useState('');

    const handleAdd = () => {
        if (text.trim() !== '') {
            onAdd(text);
            setText('');
        }
    };

    return (
        <div className="add-todo">
            <input
                type="text"
                placeholder="Add new task..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
       <button onClick={handleAdd} className="btn btn-primary">
  <i className="bi bi-plus-lg"></i> Add
</button>


        </div>
    );
}



export default AddTodo;