import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { Task, TaskContextType } from '../../types/types';
import AsyncStorage from "@react-native-async-storage/async-storage";

interface TaskProviderProps {
  children: ReactNode; // Определяем тип для children
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const useTaskContext = (): TaskContextType => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const removeTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const updateTaskStatus = (id: string, status: 'pending' | 'in-progress' | 'completed') => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, status } : task))
    );
  };

  const updateTask = (id: string, updatedTask: Partial<Task>) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, ...updatedTask } : task))
    );
  };

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const storedTasks = await AsyncStorage.getItem('@tasks');
        if (storedTasks) setTasks(JSON.parse(storedTasks));
      } catch (error) {
        console.error('Failed to load tasks from storage', error);
      }
    };
    loadTasks();
  }, []);

  useEffect(() => {
    const saveTasks = async () => {
      try {
        await AsyncStorage.setItem('@tasks', JSON.stringify(tasks));
      } catch (error) {
        console.error('Failed to save tasks to storage', error);
      }
    };
    saveTasks();
  }, [tasks]);

  const value: TaskContextType = {
    tasks,
    addTask,
    removeTask,
    updateTaskStatus,
    updateTask,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
