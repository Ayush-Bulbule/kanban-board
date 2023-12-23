import React, { useEffect, useState } from 'react';
import { MdAdd, MdMoreHoriz } from 'react-icons/md';
import Card from './Card';
import { priority, status } from '../utils/constants';
import useTaskStore from '../store/taskStore';

const TaskBoard = ({ title, tasks }) => {
    const [heading, setHeading] = useState(null);
    const [icon, setIcon] = useState(null);
    const { sorting, grouping, users } = useTaskStore();

    useEffect(() => {
        { grouping == 'priority' ? priority[Number(title)] : title }
        if (grouping === 'priority') {
            setHeading(priority[title].text);
            setIcon(priority[title].icon);
        } else if (grouping === 'status') {
            setHeading(title);
            setIcon(status.find((stat) => stat.text === title).icon);
        } else if (grouping === 'userId') {
            console.log(grouping);
            const user = users.find((user) => user.id === title);
            setIcon(
                <div className="user-avatar relative">
                    <img src={`https://ui-avatars.com/api/?name=${user.name}&size=32&background=random`} alt="JohnDoe" className="rounded-full h-4 w-4" />
                    <div className={`available absolute right-0 bottom-0 w-1.5 h-1.5 rounded-full ${user.available ? 'bg-amber-300' : 'bg-gray-500'}`}></div>
                </div>
            )
            setHeading(user.name);
        }
    }, [title]);

    // Sorting tasks based on the selected criteria
    const sortedTasks = tasks.slice().sort((a, b) => {
        if (sorting === 'title') {
            return a.title.localeCompare(b.title);
        } else if (sorting === 'priority') {
            return b.priority - a.priority;
        }
        return 0;
    });

    return (
        <div className="" >
            {/* Group Header */}
            < div className="group-header py-3 flex items-center justify-between" >
                <div className="group-header-left flex items-center gap-3">
                    <div className="relative">
                        {icon}
                    </div>
                    <p className="font-medium">
                        {heading} <span className="text-gray-400 font-normal">{tasks.length}</span>
                    </p>
                </div>
                <div className="group-header-right flex gap-2 text-gray-700">
                    <MdAdd className="text-md" />
                    <MdMoreHoriz className="text-md" />
                </div>
            </div >
            {/* Cards */}
            {
                sortedTasks.map((task) => (
                    <Card key={task.id} task={task} grouping={grouping} />
                ))
            }
        </div >
    );
};

export default TaskBoard;
