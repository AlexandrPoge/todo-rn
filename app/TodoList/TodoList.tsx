import { router } from 'expo-router';
import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, FlatList } from 'react-native';

import { icons } from '../../constants';
import useFormData from '../hooks/useFormData';
import { useTaskContext } from '../hooks/useTaskProvider';

const TodoList = () => {
  const { tasks } = useTaskContext();
  const { handleRemoveTask } = useFormData();

  return (
    <SafeAreaView className="h-full flex-1 bg-[#FFDDD2]">
      <View className="mx-4 flex-row items-center justify-between border-b border-[#006D77]">
        <Text className="p-4 text-[20px] text-[#006D77]">Your Tasks</Text>
        <TouchableOpacity onPress={() => router.push('/CreateFormTodo')}>
          <Image source={icons.add} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="m-4 h-[107px] w-[262px] bg-[#006D77]">
            <Text className="text-[16px] text-[#FFDDD2]">Title: {item.taskTitle}</Text>
            <Text className="text-[16px] text-[#FFDDD2]">Des: {item.description}</Text>

            <Text className="text-[16px] text-[#FFDDD2]">Date: {item.date}</Text>
            <Text className="text-[16px] text-[#FFDDD2]">Time: {item.time}</Text>
            <TouchableOpacity onPress={() => handleRemoveTask(item.id)}>
              <Image source={icons.bag} className="mr-3 self-end" />
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={
          <Text className="p-4 text-center text-[16px] text-[#006D77]">No tasks added yet.</Text>
        }
      />
    </SafeAreaView>
  );
};

export default TodoList;
