import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Alert } from 'react-native';

import FormField from '../../components/FormField';
import { useTaskContext } from '../hooks/useTaskProvider';

const AdditionalInfoTodo = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const { tasks, updateTask } = useTaskContext();

  const [taskTitle, setTaskTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    if (!id) {
      Alert.alert('Error', 'No task ID provided. Returning to list.');
      router.push('/TodoList');
      return;
    }

    const task = tasks?.find((task) => task.id === id);
    if (task) {
      setTaskTitle(task.taskTitle );
      setDescription(task.description);
      setDate(task.date );
      setTime(task.time );
      setLocation(task.location );
    } else {
      Alert.alert('Error', 'Task not found. Returning to list.');
      router.push('/TodoList');
    }
  }, [id, tasks]);

  const handleUpdateTask = () => {
    if (!id) {
      Alert.alert('Error', 'No task ID provided.');
      return;
    }

    updateTask(id.toString(), {
      taskTitle,
      description,
      date,
      time,
      location,
    });

    Alert.alert('Success', 'Task updated successfully.');
    router.push('/TodoList');
  };

  return (
    <SafeAreaView className="h-full w-full flex-1 bg-[#FFDDD2]">
      <View className="mx-5 max-h-[50px] bg-[#83C5BE]">
        <Text className="py-2 text-center text-[24px] font-bold text-white">Edit Task</Text>
      </View>

      <View className="gap-y-5 p-4">
        <FormField
          title="Task title"
          value={taskTitle}
          handleChangeText={setTaskTitle}
          placeholder="Enter title"
        />
        <FormField
          title="Description"
          value={description}
          handleChangeText={setDescription}
          placeholder="Enter description"
        />
        <FormField
          title="Date"
          value={date}
          handleChangeText={setDate}
          isDatePicker
          placeholder="Select date"
        />
        <FormField
          title="Time"
          value={time}
          handleChangeText={setTime}
          isTimePicker
          placeholder="Select time"
        />
        <FormField
          title="Location"
          value={location}
          handleChangeText={setLocation}
          placeholder="Enter location"
        />
      </View>

      <TouchableOpacity
        onPress={handleUpdateTask}
        className="mx-auto mt-6 w-[150px] rounded-lg bg-[#83C5BE] py-3"
      >
        <Text className="text-center text-[18px] font-semibold text-white">Update Task</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AdditionalInfoTodo;
