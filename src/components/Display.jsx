import React, { useState } from 'react'
import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

const Display = () => {
    const { todos, deleteTodo, updateTodo, toggleComplete } = useContext(TodoContext)
    const [selectedIds, setSelectedIds] = useState([])
    const [showAll, setShowAll] = useState(false)
    const [editingId, setEditingId] = useState(null)
    const [editText, setEditText] = useState('')

    const enterEditMode = (todo) => {
        setEditingId(todo.id)
        setEditText(todo.text)
    }

    const saveAndExit = (id, e) => {
        e.preventDefault()
        updateTodo(id, editText)
        setEditingId(null)
    }

    const handleSelection = (id) => {
        if (selectedIds.includes(id)) {
            const newArray = selectedIds.filter(idOf => idOf !== id)
            setSelectedIds(newArray)
        }
        else {
            setSelectedIds(selectedIds.concat(id))
        }
    }

    const renderTodo = (todo) => {
        if (editingId === todo.id) {
            return (
                <form>
                    <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className='p-1 rounded-md outline-none border-none mb-2 w-60'
                    />
                    <br />
                    <button onClick={(e) => saveAndExit(todo.id, e)} className="cursor-pointer text-sm py-1 px-2 rounded-md border-none bg-darkPink hover:bg-lightPink transition-colors duration-500 mr-1.5">Save</button>
                    <button onClick={() => setEditingId(null)} className="cursor-pointer text-sm py-1 px-2 rounded-md border-none bg-darkPink hover:bg-lightPink transition-colors duration-500 ">Cancel</button>
                </form>
            );
        }

        return (
            <>
                {editingId === null ? <div className='flex items-center gap-2 justify-between'>
                    <div className='flex gap-2 items-center'>
                        <input type='checkbox' onChange={() => {handleSelection(todo.id)}} className="cursor-pointer w-4 h-4 text-purple" />
                        <p className='w-32' style={{ textDecoration: todo.completed ? "line-through" : "none" }} onDoubleClick={() => enterEditMode(todo)}>{todo.text}</p>
                    </div>

                    <button onClick={() => { deleteTodo(todo.id) }} className="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div> : null}
            </>
        );

    };

    const todosToShow = showAll ? todos : todos.filter(todo => todo.completed === false)


    return (
        <div className='flex flex-col gap-1 mt-5 mb-5 w-[100%]'>
            {
                todosToShow.map((todo) => {
                    return (
                        <div key={todo.id}>
                            {renderTodo(todo)}
                        </div>
                    )
                })
            }
            <div className='flex justify-center gap-2 text-sm mt-8'>
                <button onClick={() => { toggleComplete(selectedIds); setSelectedIds([]) }} className='p-1 rounded-md text-sm bg-darkPink hover:bg-darkBlue transition-colors duration-500'>Set Completed</button>
                <button onClick={() => { setShowAll(!showAll) }} className='py-1 px-2 rounded-md text-sm bg-darkPink hover:bg-darkBlue transition-colors duration-500'>{showAll ? "Show Incomplete" : "Show All"}</button>
            </div>
        </div>
    )
}

export default Display