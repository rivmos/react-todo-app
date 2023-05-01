import { createContext, useState } from "react";

export const TodoContext = createContext()

export const TodoProvider = ({children}) => {
    const [todos, setTodos] = useState([{ text: 'this is the first todo', completed: true }, { text: 'this is the second todo', completed: false },{ text: 'todo', completed: false }])
    
    const addTodo = (newTodo) => {
        setTodos(todos.concat(newTodo))
    }

    const updateTodo = (index, newText) => {
        const newTodos = [...todos]
        newTodos[index] = {...newTodos[index], text:newText}
        setTodos(newTodos)
    }

    const deleteTodo = (index) => {
        const newTodos = [...todos]
        newTodos.splice(index,1)
        setTodos(newTodos)
    }

    const toggleTodo = (index) => {
        const newTodos = [...todos]
        newTodos[index] = {...newTodos[index], completed:!newTodos[index].completed}
        setTodos(newTodos)
    }

    return(
        <TodoContext.Provider value={{todos, addTodo, updateTodo, deleteTodo, toggleTodo}}>
            {children}
        </TodoContext.Provider>
    )
}