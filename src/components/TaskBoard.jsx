import React, { useEffect, useState } from 'react';
import { MdAdd, MdMoreHoriz, MdSignalCellularAlt1Bar, MdSignalCellularAlt, MdSignalCellularAlt2Bar, MdError, MdPieChart, MdOutlineIncompleteCircle, MdCheckCircle, MdCancel, } from 'react-icons/md';
import { LuCircle, LuCircleDashed } from 'react-icons/lu';
import Card from './Card';
import useTaskStore from '../store/taskStore';

const TaskBoard = ({ title, tasks }) => {
    const [heading, setHeading] = useState(null);
    const [icon, setIcon] = useState(null);

    const { sorting, grouping, users } = useTaskStore();

    //Static array with priority icons
    const priority = [
        {
            text: 'No Priority',
            icon: <MdSignalCellularAlt1Bar className="text-gray-500" />
        },
        {
            text: 'Low',
            icon: <MdSignalCellularAlt1Bar className="text-gray-500" />
        },
        {
            text: 'Medium',
            icon: <MdSignalCellularAlt2Bar className="text-gray-500" />
        },
        {
            text: 'High',
            icon: <MdSignalCellularAlt className="text-gray-500" />
        },
        {
            text: 'Urgent',
            icon: <MdError className="text-orange-600" />
        }
    ];

    //Static array with status icons
    const status = [
        {
            text: 'Backlog',
            icon: <LuCircleDashed className="text-gray-500" />
        },
        {
            text: 'Todo',
            icon: <LuCircle className="text-gray-500" />
        },
        {
            text: 'In progress',
            icon: <MdOutlineIncompleteCircle className="text-yellow-500" />
        },
        {
            text: 'Done',
            icon: <MdCheckCircle className="text-green-500" />
        },
        {
            text: 'Cancelled',
            icon: <MdCancel className="text-gray-500" />
        }];

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
        <div className="h-96" >
            {/* Group Header */}
            < div className="group-header py-3 flex items-center justify-between" >
                <div className="group-header-left flex items-center gap-3">
                    {grouping === 'userId' ? <img src={`https://ui-avatars.com/api/?name=${heading}&size=32&background=random`} className='rounded-full w-4 h-4' /> : icon}

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
                    <Card key={task.id} task={task} />
                ))
            }
        </div >
    );
};

export default TaskBoard;
