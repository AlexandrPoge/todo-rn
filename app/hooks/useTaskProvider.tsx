import React, { createContext, useState, useContext, ReactNode } from 'react';

import { Task } from '../../types/types';

type TaskContextType = {
  tasks?: Task[];
  addTask?: (task: Task) => void;
  removeTask?: (id: string) => void;
  children?: ReactNode;
};

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: TaskContextType) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const removeTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const addTask = (task: Task) => setTasks((prevState) => [...prevState, task]);
  return <TaskContext.Provider value={{ tasks, addTask, removeTask }}>{children}</TaskContext.Provider>;
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a UseTaskProvider');
  }
  return context;
};
