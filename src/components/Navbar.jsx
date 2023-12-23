import React, { useEffect, useState } from 'react'
import { MdTune, MdDarkMode, MdKeyboardArrowDown, MdLightMode } from 'react-icons/md';
import useTaskStore from '../store/taskStore';

const Navbar = () => {
    const [theme, setTheme] = useState(null);
    const element = document.documentElement;
    //dropdown
    const [display, setDisplay] = useState(false);

    //set display filters

    const { setGrouping, setSorting } = useTaskStore();

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
    const toggleDisplay = (e) => {
        e.preventDefault();
        setDisplay(!display);
    }

    //Handle Select Group
    const handleSelectGroup = (e) => {
        console.log(e.target.value);
        setGrouping(e.target.value);
    }

    //Handle Select Sort
    const handleSelectSort = (e) => {
        console.log(e.target.value);
        setSorting(e.target.value);
    }


    //To handle outside close of dropdown
    useEffect(() => {
        const closeDropdown = e => {
            if (e.target.tagName === 'BUTTON' || e.target.tagName === 'SPAN' || e.target.tagName === 'SELECT' || e.target.tagName === 'svg' || e.target.tagName === 'path') {
                return;
            }
            setDisplay(false);
        }
        document.body.addEventListener('click', closeDropdown);
        return () => document.body.removeEventListener('click', closeDropdown);
    }, [])


    return (
        <section className="navbar flex justify-between py-3 px-6 bg-white dark:bg-gray-900 dark:text-gray-50">
            {/* Left: Toggle Button */}
            <div className="filter-wrapper  ">
                {/* Button */}
                <button onClick={toggleDisplay} className="btn-display px-1.5 py-0.5 rounded-md border-2 gap-2  sha shadow-gray-300 dark:shadow-gray-600 dark:border-gray-700 flex items-center border-gray-300 shadow-[rgba(0,_0,_0,_0.133)_0px_0px_8px_0px] dark:shadow-[rgba(255,_255,_255,_0.133)_0px_0px_8px_0px] ">
                    <MdTune className='text-gray-500' />
                    <span>Display</span>
                    <MdKeyboardArrowDown className='text-gray-500' />
                </button>
                {/* Filter Dropdown  */}
                <div className={`p-4 rounded-md shadow-sm mt-3 px-6 z-50 bg-white dark:bg-gray-800 absolute ${display ? 'block' : 'hidden'}`}>
                    <div className="flex justify-between gap-20">
                        <span className='text-gray-500 dark:text-gray-200'>Grouping</span>
                        <select onChange={handleSelectGroup} className='text-gray-700 border border-gray-200 rounded-md px-3 py-1 pr-8 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 outline-none cursor-pointer'>
                            <option value={'status'}>Status</option>
                            <option value={'userId'}>User</option>
                            <option value={'priority'}>Priority</option>
                        </select>
                    </div>
                    <div className="flex justify-between gap-20 mt-2">
                        <span className='text-gray-500 dark:text-gray-200'>Ordering</span>
                        <select onChange={handleSelectSort} className='text-gray-700 border border-gray-200 rounded-md px-3 py-1 pr-8 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 outline-none cursor-pointer'>
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