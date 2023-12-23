import React, { useEffect, useState } from 'react';
import { MdAdd, MdMoreHoriz, MdSignalCellularAlt } from 'react-icons/md';
import Card from './Card';
import useTaskStore from '../store/taskStore';

const TaskBoard = ({ title, tasks }) => {
    const [heading, setHeading] = useState(null);

    const { sorting, grouping, users } = useTaskStore();

    const priority = ['No priority', 'Low', 'Medium', 'High', 'Urgent'];
    useEffect(() => {
        { grouping == 'priority' ? priority[Number(title)] : title }
        if (grouping === 'priority') {
            setHeading(priority[title]);
        } else if (grouping === 'status') {
            setHeading(title);
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
        <div className="h-96">
            {/* Group Header */}
            <div className="group-header py-3 flex items-center justify-between">
                <div className="group-header-left flex items-center gap-3">
                    <MdSignalCellularAlt className="" />
                    <p className="font-medium">
                        {heading} <span className="text-gray-400 font-normal">{tasks.length}</span>
                    </p>
                </div>
                <div className="group-header-right flex gap-2">
                    <MdAdd className="text-md" />
                    <MdMoreHoriz className="text-md" />
                </div>
            </div>
            {/* Cards */}
            {sortedTasks.map((task) => (
                <Card key={task.id} task={task} />
            ))}
        </div>
    );
};

export default TaskBoard;
