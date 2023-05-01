import React from 'react'
import { CSVLink } from 'react-csv'
import { TodoContext } from '../context/TodoContext'
import { useContext } from 'react'

const Export = () => {
    const {todos} = useContext(TodoContext)
    return (
        <div>
            <CSVLink data={todos} filename='todosData' className='no-underline mt-4 p-2 rounded-md text-sm bg-darkPink hover:bg-darkBlue transition-colors duration-500'>Export</CSVLink>
        </div>
    )
}

export default Export   