import React, { useState } from 'react'
import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

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
                        className='p-1 rounded-md outline-none border-none'
                    />
                    <br />
                    <button onClick={() => saveAndExit(index)} className="cursor-pointer py-1 px-2 rounded-md border-none bg-darkPink hover:bg-lightPink transition-all duration-500 ">Save</button>
                    <button onClick={() => setEditingId(null)} className="cursor-pointer py-1 px-2 rounded-md border-none bg-darkPink hover:bg-lightPink transition-all duration-500 ">Cancel</button>
                </div>
            );
        } else {
            return (
                <div className='flex items-center gap-2'>
                    <input type='checkbox' checked={todo.completed} onChange={() => toggleTodo(index)} className="cursor-pointer" />
                    <span className='w-40'>{todo.text} {todo.completed ? 'C' : 'NC'}</span>
                    <button onClick={() => { enterEditMode(todo, index) }} className="cursor-pointer">Edit</button>
                    <button onClick={() => { deleteTodo(index) }} className="cursor-pointer">Delete</button>
                </div>
            );
        }
    };


    return (
        <div className='flex flex-col gap-1 mt-5 mb-5'>
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
    )
}

export default Display