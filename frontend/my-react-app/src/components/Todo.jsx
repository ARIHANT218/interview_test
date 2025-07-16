
import React from 'react';
import axios from 'axios';
import { useState } from 'react';

function Todo() {
    
    const [todos, setTodos] = useState([]);
    
    const [newTodo, setNewTodo] = useState('');

    const handleAddTodo = (e) => {
        e.preventDefault();
        if (newTodo.trim() === '') return;

        axios.post('/api/todos', { text: newTodo })
            .then(response => {
                setTodos([...todos, response.data]);
                setNewTodo('');
            })
            .catch(error => {
                console.error('Error adding todo:', error);
            });
    };
    return (
        <div>
            <h1>Todo List</h1>
            <form onSubmit={handleAddTodo}>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Add a new todo"
                    required
                />
                <button type="submit">Add Todo</button>
            </form>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;
