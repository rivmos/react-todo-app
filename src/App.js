import React from 'react'
import Display from './components/Display'
import TodoForm from './components/TodoForm'
import Export from './components/Export'


const App = () => {

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <div className='p-10 rounded-xl bg-lightBlue'>
        <TodoForm />
        <Display />
        <Export />
      </div>
    </div>
  )
}

export default App