import React from 'react'

const Card = () => {
    return (
        <div className="p-4 py-2 mt-2 rounded-md shadow-md  bg-white  dark:bg-gray-900">
            <div className="card-header flex justify-between">
                <span className='text-gray-500'>CAM-5</span>
                <img src="https://ui-avatars.com/api/?name=John+Doe&size=32&background=0D8ABC&color=fff" alt="JohnDoe" className="rounded-full h-5 w-5" />
            </div>

            <div className="card-body py-2">
                <p className='text-sm font-medium text-gray-800 dark:text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            {/* Tags */}
            <div className="card-footer flex gap-2">
                <span className='text-xs px-1 border border-gray-200 dark:border-gray-500  text-gray-500'>#bug</span>

            </div>
        </div>
    )
}

export default Card