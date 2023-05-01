import React, { useState } from 'react'
import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import { CSVLink } from 'react-csv'

const Display = () => {
    const { todos, deleteTodo, toggleTodo, updateTodo } = useContext(TodoContext)

    const [editingId, setEditingId] = useState(null)
    const [editText, setEditText] = useState('')

    const enterEditMode = (todo, index) => {
        setEditingId(index)
        setEditText(todo.text)
    }

    const saveAndExit = (index) => {
        updateTodo(index, editText)
        setEditingId(null)
    }

    const renderTodo = (todo, index) => {
        if (editingId === index) {
            return (
                <div>
                    <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                    />
                    <button onClick={() => saveAndExit(index)}>Save</button>
                    <button onClick={() => setEditingId(null)}>Cancel</button>
                </div>
            );
        } else {
            return (
                <div>
                    <input type='checkbox' checked={todo.completed} onChange={() => toggleTodo(index)} />
                    <li>{todo.text} {todo.completed ? 'C' : 'NC'}</li>
                    <button onClick={() => { enterEditMode(todo, index) }}>Edit</button>
                    <button onClick={() => { deleteTodo(index) }}>Delete</button>
                </div>
            );
        }
    };


    return (
        <div>
            <h3>ToDos</h3>
            <div>
                {
                    todos.map((todo, index) => {
                        return (
                            <div key={index}>
                                {renderTodo(todo, index)}
                            </div>
                        )
                    })
                }
            </div>
            <CSVLink data={todos} filename='todosData'>Export</CSVLink>
        </div>
    )
}

export default Display