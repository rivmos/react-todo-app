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
        <>
            <h2 className='text-center font-medium mb-5'>Appricott App</h2>
            <form className='flex gap-2'>
                <input value={newTodo.text} onChange={(e) => setNewTodo({ ...newTodo, text: e.target.value })} className='p-1 rounded-md outline-none border-none'/>
                <button type='submit' onClick={handleAdd} className="cursor-pointer py-1 px-2 rounded-md border-none bg-darkPink hover:bg-lightPink transition-all duration-500 ">Add</button>
            </form>
        </>
    )
}

export default TodoForm