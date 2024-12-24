import { router } from 'expo-router';
import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, FlatList } from 'react-native';

import { icons } from '../../constants';
import useFormData from '../hooks/useFormData';
import { useTaskContext } from '../hooks/useTaskProvider';

const TodoList = () => {
  const { tasks } = useTaskContext();
  const { handleRemoveTask, handleStatusChange } = useFormData();

  const toggleStatus = (currentStatus: string) => {
    if (currentStatus === 'pending') return 'in-progress';
    if (currentStatus === 'in-progress') return 'completed';
    return 'pending';
  };

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
          <View className="m-4 max-h-[180px] max-w-[300px] bg-[#006D77] rounded-md flex-row">
            <View className="flex-col w-[260px] pl-2 gap-y-2">
              <Text className="text-[18px] text-[#FFDDD2] pt-2">{item.taskTitle}</Text>
              <Text className="text-[14px] text-[#FFDDD2]">
                Des: {item.description.length > 50 ? `${item.description.slice(0, 50)}...` : item.description}
              </Text>
              <Text className="text-[14px] text-[#FFDDD2]">Date: {item.date}</Text>
              <Text className="text-[14px] text-[#FFDDD2]">Time: {item.time}</Text>
              <Text className="text-[14px] text-[#FFDDD2]">Loc: {item.location}</Text>

              <TouchableOpacity
                onPress={() => handleStatusChange(item.id ?? '', toggleStatus(item.status ?? 'pending'))}
                className="mb-2 flex-row gap-2"
              >
                <Image source={icons.mark} />
                <Text className="text-[16px] text-[#FFDDD2]">{item.status}</Text>
              </TouchableOpacity>
            </View>

            <View className="flex-col items-center justify-center gap-y-5">
              <TouchableOpacity onPress={() => router.push({pathname:'/AdditionalInfoTodo/[id]', params:{id:item.id}})}>
                <Image source={icons.info} className="mr-3 " />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleRemoveTask(item.id)}>
                <Image source={icons.bag} className="mr-3" />
              </TouchableOpacity>
            </View>
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
