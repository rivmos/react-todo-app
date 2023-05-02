import { createContext, useState } from "react";

export const TodoContext = createContext()

export const TodoProvider = ({children}) => {
    const [todos, setTodos] = useState([{ id:1, text: 'first todo', completed: true }, {id:2, text: 'second todo', completed: false },{id:3, text: 'todo', completed: false }])
    
    const addTodo = (newTodo) => {
        setTodos(todos.concat(newTodo))
    }

    const updateTodo = (id, newText) => {
        const newTodos = todos.map(todo => todo.id === id ? {...todo, text:newText} : todo)
        setTodos(newTodos)
    }

    const deleteTodo = (id) => {
        const newTodos = todos.filter(todo => todo.id !== id)
        setTodos(newTodos)
    }

    const toggleTodo = (id) => {
        const newTodos = todos.map(todo => todo.id === id ? {...todo, completed:!todo.completed} : todo)
        setTodos(newTodos)
    }

    const toggleComplete = (ids) => {
        const newTodos = todos.map(todo => ids.includes(todo.id) ? {...todo, completed:true} : todo)
        setTodos(newTodos)
    }

    // const sortArray = () => {
    //     const newTodos = [...todos]
    //     newTodos.sort((a,b) => a.completed - b.completed)
    //     setTodos(newTodos)
    // }

    return(
        <TodoContext.Provider value={{todos, addTodo, updateTodo, deleteTodo, toggleTodo, toggleComplete}}>
            {children}
        </TodoContext.Provider>
    )
}