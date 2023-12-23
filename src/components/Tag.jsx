import React from 'react'

const Tag = ({ i, tag }) => {
    return (
        <div className="flex px-1 items-center justify-center gap-1 rounded-sm border border-gray-200 dark:border-gray-500  text-gray-500">
            <span className="w-3 h-3 rounded-full bg-gray-500"></span>
            <span key={i} className='text-xs '>{tag}</span>
        </div>
    )
}

export default Tag