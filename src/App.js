import React from 'react'
import Display from './components/Display'
import TodoForm from './components/TodoForm'


const App = () => {

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <div className='flex flex-col items-center px-16 rounded-xl bg-lightBlue py-4'>
        <TodoForm />
        <Display />
      </div>
    </div>
  )
}

export default App