import React from 'react'
import Display from './components/Display'
import TodoForm from './components/TodoForm'
import Export from './components/Export'


const App = () => {

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <div className='flex flex-col items-center w-1/5 rounded-xl bg-lightBlue py-10 '>
        <TodoForm />
        <Display />
        <Export />
      </div>
    </div>
  )
}

export default App