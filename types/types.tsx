import { ReactNode } from "react";

export type Task = {
  date: string;
  time: string;
  description:string
  taskTitle:string
  id:string
  status?: 'pending' | 'in-progress' | 'completed';
  location:string
};

export type TaskContextType = {
  tasks: Task[];
  addTask: (task: Task) => void;
  removeTask: (id: string) => void;
  updateTaskStatus: (id: string, status: 'pending' | 'in-progress' | 'completed') => void;
  updateTask: (id: string, updatedTask: Partial<Task>) => void
};