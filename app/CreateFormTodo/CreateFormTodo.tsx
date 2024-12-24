import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';

import FormField from '../../components/FormField';
import useFormData from '../hooks/useFormData';

const CreateFormTodo = () => {
  const {
    time,
    date,
    description,
    taskTitle,
    handleAddTask,
    setDate,
    setTime,
    setDescription,
    setTaskTitle,
  } = useFormData();

  return (
    <SafeAreaView className="h-full w-full flex-1 bg-[#FFDDD2]">
      <View className="mx-5 max-h-[50px] bg-[#83C5BE]">
        <Text className="py-2 text-center text-[24px] font-bold text-white">Create your task</Text>
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
      </View>

      <TouchableOpacity
        onPress={handleAddTask}
        className="mx-auto mt-6 w-[150px] rounded-lg bg-[#83C5BE] py-3">
        <Text className="text-center text-[18px] font-semibold text-white">Add Task</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CreateFormTodo;
