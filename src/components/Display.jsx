import React, { useState } from 'react'
import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

const Display = () => {
    const { todos, deleteTodo, toggleTodo, updateTodo } = useContext(TodoContext)

    const [selectedTodosIndexes, setSelectedTodosIndexes] = useState([])
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
            console.log(index, editingId)
            return (
                <div>
                    <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className='p-1 rounded-md outline-none border-none mb-2 w-60'
                    />
                    <br />
                    <button onClick={() => saveAndExit(index)} className="cursor-pointer text-sm py-1 px-2 rounded-md border-none bg-darkPink hover:bg-lightPink transition-colors duration-500 mr-1.5">Save</button>
                    <button onClick={() => setEditingId(null)} className="cursor-pointer text-sm py-1 px-2 rounded-md border-none bg-darkPink hover:bg-lightPink transition-colors duration-500 ">Cancel</button>
                </div>
            );
        }

        return (
            <>
                {editingId === null ? <div className='flex items-center gap-2 justify-between'>
                    <div className='flex gap-2 items-center'>
                        <input type='checkbox' checked={todo.completed} onChange={() => toggleTodo(index)} className="cursor-pointer w-4 h-4 text-purple" />
                        <p className='w-32' style={{width:'100px',overflow:'scroll'}} onDoubleClick={() => enterEditMode(todo, index)}>{todo.text}</p>
                    </div>
                    {/* <button onClick={() => {  }} className="cursor-pointer">Edit</button> */}

                    <button onClick={() => { deleteTodo(index) }} className="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div> : null}
            </>
        );

    };


    return (
        <div className='flex flex-col gap-1 mt-5 mb-5 w-60'>
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