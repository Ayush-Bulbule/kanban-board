import React, { useEffect, useState } from 'react'
import TaskBoard from './TaskBoard'
import useTaskStore from '../store/taskStore';

const MainBoard = () => {
    const { tasks, grouping } = useTaskStore();
    const [groupedTasks, setGroupedTasks] = useState({});

    const groupTasks = (tasks, grouping) => {
        const groupedTasks = {};
        tasks.forEach((task) => {
            const groupKey = task[grouping];
            if (!groupedTasks[groupKey]) {
                groupedTasks[groupKey] = [];
            }

            groupedTasks[groupKey].push(task);
        });

        return groupedTasks;
    };

    useEffect(() => {
        setGroupedTasks(groupTasks(tasks, grouping));
        console.log(groupedTasks)
    }, [tasks, grouping])


    return (
        <div className='min-h-screen px-8 grid gap-4 py-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 bg-gray-100 dark:bg-gray-950 dark:text-gray-50'>
            {
                Object.keys(groupedTasks).map((groupKey) => (
                    <TaskBoard key={groupKey} title={groupKey} tasks={groupedTasks[groupKey]} />
                ))
            }
        </div>
    )
}

export default MainBoard