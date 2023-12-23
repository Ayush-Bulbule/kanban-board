import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import './App.css'
import TaskBoard from './components/TaskBoard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Board */}
      <div className='min-h-screen px-8 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 bg-gray-100 dark:bg-gray-950 dark:text-gray-50'>
        <TaskBoard />
        <TaskBoard />
        <TaskBoard />
        <TaskBoard />
        <TaskBoard />
      </div>
    </>
  )
}

export default App
