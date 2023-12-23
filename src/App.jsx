import { useEffect, useState } from 'react'
import axios from 'axios'

import Navbar from './components/Navbar'
import './App.css'
import TaskBoard from './components/TaskBoard'
import useTaskStore from './store/taskStore'
import MainBoard from './components/MainBoard'


function App() {
  const [loading, setLoading] = useState(true);

  //Store to save tasks
  const { setTasks, setUsers } = useTaskStore();

  //Fetch all the tasks and set store
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await axios.get('https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers');
        console.log(data);
        if (data) {
          const { tickets, users } = data.data;
          setTasks(tickets);
          setUsers(users);
          setLoading(false);
          if (tickets && users) setLoading(false);
        } else {
          console.log('No data found');
        }
      } catch (err) {
        console.log(err)
      }
    }

    fetchTasks();
  }, [])


  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Board */}
      {
        loading ?
          <div className='flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-950 dark:text-gray-50'>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"></div>
            <span className='ml-4'>Loading...</span>
          </div>
          :
          <MainBoard />
      }

    </>
  )
}

export default App
