import React, { useEffect, useState } from 'react'
import useTaskStore from '../store/taskStore'
import Tag from './Tag';
import { priority, status } from '../utils/constants';

const Card = ({ task, grouping }) => {
    const { users } = useTaskStore();
    const user = users.find((user) => user.id === task.userId);

    return (
        <div className="p-3 py-2 mt-2 rounded-md   bg-white  dark:bg-gray-900 shadow-[rgba(0,_0,_0,_0.133)_0px_0px_8px_0px] dark:shadow-[rgba(255,_255,_255,_0.133)_0px_0px_8px_0px] dark:border dark:border-gray-600">
            <div className="card-header flex justify-between">
                <span className='text-gray-500'>{task.id}</span>
                {
                    grouping !== 'userId' && (
                        <div className="user-avatar relative">
                            <img src={`https://ui-avatars.com/api/?name=${user.name}&size=32&background=random`} alt="JohnDoe" className="rounded-full h-4 w-4" />
                            <div className={`available absolute right-0 bottom-2 w-1.5 h-1.5 rounded-full ${user.available ? 'bg-amber-300' : 'bg-gray-500'}`}></div>
                        </div>
                    )
                }
            </div>

            <div className="card-body py-2 flex gap-1">
                {
                    grouping !== 'status' && (
                        <div className="h-5 w-5 mt-1">
                            {status.find((stat) => stat.text === task.status).icon}
                        </div>
                    )
                }
                <p className='text-sm font-medium text-gray-800 dark:text-gray-300'>{task.title}</p>
            </div>
            {/* Tags */}
            <div className="card-footer flex gap-2">
                {
                    grouping !== 'priority' && (
                        <span className="border border-gray-200 rounded-sm">
                            {priority[task.priority].icon}
                        </span>
                    )
                }
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


