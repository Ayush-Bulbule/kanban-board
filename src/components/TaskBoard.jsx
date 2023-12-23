import React from 'react'
import { MdAdd, MdMoreHoriz, MdSignalCellular4Bar, MdSignalCellularAlt } from 'react-icons/md'
import Card from './Card'

const TaskBoard = ({ title, tasks }) => {

    console.log("TASK")
    console.log(tasks)

    return (
        <div className=" h-96  ">
            {/* Group Header */}
            <div className="group-header py-3 flex items-center  justify-between">
                <div className="group-header-left flex items-center gap-3 ">
                    <MdSignalCellularAlt className="" />
                    <span className='font-medium'>{title} 2</span>
                </div>
                <div className="group-header-right flex gap-2">
                    <MdAdd className='text-md' />
                    <MdMoreHoriz className='text-md' />
                </div>
            </div>
            {/* Cards */}
            {
                tasks.map((task) => (
                    <Card key={task.id} task={task} />
                ))
            }
        </div>
    )
}

export default TaskBoard