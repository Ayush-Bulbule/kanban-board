import { create } from 'zustand';

//1. Create a store

const taskStore = (set) => ({
    tasks: [],
    users: [],
    grouping: 'status',
    sorting: 'title',
    setTasks: (tasks) => set({ tasks }),
    setUsers: (users) => set({ users }),
    setGrouping: (grouping) => set({ grouping }),
    setSorting: (sorting) => set({ sorting }),
})

//2. Create a hook

const useTaskStore = create(taskStore);

export default useTaskStore;