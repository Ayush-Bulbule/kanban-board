import React, { useEffect, useState } from 'react'
import { MdTune, MdDarkMode, MdKeyboardArrowDown, MdLightMode } from 'react-icons/md';

const Navbar = () => {
    const [theme, setTheme] = useState(null);
    const element = document.documentElement;

    //dropdown
    const [display, setDisplay] = useState(false);

    //Toggle Theme
    const toggleTheme = () => {
        theme === 'dark' ? setTheme('light') : setTheme('dark');
    }

    useEffect(() => {
        switch (theme) {
            case 'dark':
                element.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                break;
            case 'light':
                element.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            default:
                const localTheme = localStorage.getItem('theme');
                localTheme && setTheme(localTheme);
                break;
        }
    }, [theme]);

    //Toggle Display
    const toggleDisplay = () => {
        setDisplay(!display);
    }


    return (
        <section className="navbar flex justify-between py-4 px-6 bg-white dark:bg-gray-900 dark:text-gray-50">
            {/* Left: Toggle Button */}
            <div className="filter-wrapper  ">
                {/* Button */}
                <button onClick={toggleDisplay} className="btn-display px-1.5 py-0.5 rounded-md border-2 gap-2 shadow-sm sha shadow-gray-300 dark:shadow-gray-600 dark:border-gray-600 flex items-center border-gray-200 ">
                    <MdTune className='text-gray-500' />
                    <span>Display</span>
                    <MdKeyboardArrowDown className='text-gray-500' />
                </button>
                {/* Filter Dropdown  */}
                <div className={`p-4 rounded-md shadow-sm mt-3 px-6 bg-white dark:bg-gray-800 absolute ${display ? 'block' : 'hidden'}`}>
                    <div className="flex justify-between gap-20">
                        <span className='text-gray-500 dark:text-gray-200'>Grouping</span>
                        <select className='text-gray-700 border border-gray-200 rounded-md px-3 py-1 pr-8 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 outline-none cursor-pointer'>
                            <option value={'user'}>User</option>
                            <option value={'status'}>Status</option>
                            <option value={'priority'}>Priority</option>
                        </select>
                    </div>
                    <div className="flex justify-between gap-20 mt-2">
                        <span className='text-gray-500 dark:text-gray-200'>Ordering</span>
                        <select className='text-gray-700 border border-gray-200 rounded-md px-3 py-1 pr-8 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 outline-none cursor-pointer'>
                            <option value={'title'}>Title</option>
                            <option value={'priority'}>Priority</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Right: Theme Toggle Button */}
            <button>
                {
                    theme === 'dark' ? (
                        <MdLightMode onClick={toggleTheme} className='text-gray-100' />
                    ) : (
                        <MdDarkMode onClick={toggleTheme} className='text-gray-800' />
                    )

                }
            </button>
        </section>
    )
}

export default Navbar