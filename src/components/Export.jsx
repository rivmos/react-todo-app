import React from 'react'
import { CSVLink } from 'react-csv'
import { TodoContext } from '../context/TodoContext'
import { useContext } from 'react'

const Export = () => {
    const {todos} = useContext(TodoContext)
    return (
        <div>
            <CSVLink data={todos} filename='todosData' className='no-underline'>Export</CSVLink>
        </div>
    )
}

export default Export   