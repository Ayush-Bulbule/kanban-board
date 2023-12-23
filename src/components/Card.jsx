import React, { useEffect, useState } from 'react'
import useTaskStore from '../store/taskStore'
import Tag from './Tag';

const Card = ({ task }) => {
    const { users } = useTaskStore();
    const user = users.find((user) => user.id === task.userId);

    return (
        <div className="p-3 py-2 mt-2 rounded-md shadow-md  bg-white  dark:bg-gray-900">
            <div className="card-header flex justify-between">
                <span className='text-gray-500'>{task.id}</span>
                <div className="user-avatar relative">
                    <img src={`https://ui-avatars.com/api/?name=${user.name}&size=32&background=random`} alt="JohnDoe" className="rounded-full h-4 w-4" />
                    <div className={`available absolute right-0 bottom-2 w-1.5 h-1.5 rounded-full ${user.available ? 'bg-amber-300' : 'bg-gray-500'}`}></div>
                </div>
            </div>

            <div className="card-body py-2 flex">
                <p className='text-sm font-medium text-gray-800 dark:text-gray-300'>{task.title}</p>
            </div>
            {/* Tags */}
            <div className="card-footer flex gap-2">
                {
                    task.tag.map((tag, i) => (
                        <Tag key={i} tag={tag} />
                    ))
                }

            </div>
        </div>
    )
}

export default Card