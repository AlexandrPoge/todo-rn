import { router } from 'expo-router';
import { useState } from 'react';
import UUID from 'react-native-uuid';

import { useTaskContext } from './useTaskProvider';

const useFormData = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const { addTask, removeTask } = useTaskContext();
  const handleAddTask = () => {
    if (!date || !time || !description || !taskTitle) {
      alert('Please select all the field');
      return;
    }
    if (addTask) {
      addTask({ id: UUID.v4(), date, time, description, taskTitle });
    }
    setDate('');
    setTime('');
    setDescription('');
    setTaskTitle('');
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
  return {
    handleAddTask,
    handleRemoveTask,
    taskTitle,
    description,
    date,
    time,
    setDescription,
    setTaskTitle,
    setDate,
    setTime,
  };
};

export default useFormData;
