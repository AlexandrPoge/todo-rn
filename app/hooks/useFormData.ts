import { router } from 'expo-router';
import { useState } from 'react';
import UUID from 'react-native-uuid';

import { useTaskContext } from './useTaskProvider';

const useFormData = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');

  const { addTask, removeTask,updateTaskStatus } = useTaskContext();
  const handleAddTask = () => {
    if (!date || !time || !description || !taskTitle || !location) {
      alert('Please select all the field');
      return;
    }
    if (addTask) {
      addTask({ id: UUID.v4(), date, time, description, taskTitle, location, status:'pending' });
    }
    setDate('');
    setTime('');
    setDescription('');
    setTaskTitle('');
    setLocation('');
    router.push('/TodoList');
  };

  const handleRemoveTask = (id: string) => {
    if (!id) {
      alert('Invalid task ID');
      return;
    }

    if (removeTask) {
      removeTask(id);
    }
    setDate('');
    setTime('');
    setDescription('');
    setTaskTitle('');
    router.push('/TodoList');
  };
  const handleStatusChange = (id:string, currentStatus:string) => {
    const nextStatus = currentStatus === 'pending'
      ? 'in-progress'
      : currentStatus === 'in-progress'
        ? 'completed'
        : 'pending';
    if (updateTaskStatus) {
      updateTaskStatus(id, nextStatus);
    }
  };


  return {
    handleAddTask,
    handleRemoveTask,
    handleStatusChange,
    taskTitle,
    description,
    date,
    time,
    setDescription,
    setTaskTitle,
    setDate,
    setTime,
    location,
    setLocation,
  };
};

export default useFormData;
