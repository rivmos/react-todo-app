import React from 'react'
import Display from './components/Display'
import TodoForm from './components/TodoForm'
import Export from './components/Export'


const App = () => {

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <div className='flex flex-col items-center px-16 rounded-xl bg-lightBlue py-4'>
        <TodoForm />
        <Display />
      </div>
      <div className='mt-3 ml-[-370px]'>
        <Export />
      </div>
    </div>
  )
}

export default App