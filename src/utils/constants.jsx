import { MdSignalCellularAlt1Bar, MdSignalCellularAlt, MdSignalCellularAlt2Bar, MdError, MdPieChart, MdOutlineIncompleteCircle, MdCheckCircle, MdCancel, } from 'react-icons/md';
import { LuCircle, LuCircleDashed } from 'react-icons/lu';


export const priority = [
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


export const status = [
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
    }
];