import React from 'react'
import { CSVLink } from 'react-csv'
import { TodoContext } from '../context/TodoContext'
import { useContext } from 'react'

const Export = () => {
    const {todos} = useContext(TodoContext)
    return (
        <div>
            <CSVLink data={todos} filename='todosData' className='no-underline py-1.5 px-2 rounded-md text-sm bg-darkPink hover:bg-darkBlue transition-colors duration-500'>Export</CSVLink>
        </div>
    )
}

export default Export   