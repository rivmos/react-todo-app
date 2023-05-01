import React, { useState } from 'react'
import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

const TodoForm = () => {
    const { addTodo } = useContext(TodoContext)
    const [newTodo, setNewTodo] = useState({ text: '', completed: false })
    const handleAdd = (e) => {
        e.preventDefault()
        addTodo(newTodo)
        setNewTodo({ text: '', completed: false })
    }
    return (
        <form>
            <input value={newTodo.text} onChange={(e) => setNewTodo({ ...newTodo, text: e.target.value })} />
            <button type='submit' onClick={handleAdd}>Add</button>
        </form>
    )
}

export default TodoForm