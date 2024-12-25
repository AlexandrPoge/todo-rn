import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, FlatList, Task } from 'react-native';

import FilterButton from '../../components/FilterButton';
import { icons } from '../../constants';
import useFormData from '../hooks/useFormData';
import { useTaskContext } from '../hooks/useTaskProvider';

const TodoList = () => {
  const { tasks } = useTaskContext();
  const { handleRemoveTask, handleStatusChange } = useFormData();
  const [statusFilter, setStatusFilter] = useState('');

  const toggleStatus = (currentStatus: string) => {
    if (currentStatus === 'pending') return 'in-progress';
    if (currentStatus === 'in-progress') return 'completed';
    return 'pending';
  };

  const handleFilter = statusFilter ? tasks.filter((task) => task.status === statusFilter) : tasks;
  return (
    <SafeAreaView className="h-full flex-1 bg-[#FFDDD2]">
      <View className="mx-4 flex-row items-center justify-between border-b border-[#006D77]">
        <Text className="p-4 text-[20px] text-[#006D77]">Your Tasks</Text>
        <TouchableOpacity onPress={() => router.push('/CreateFormTodo')}>
          <Image source={icons.add} />
        </TouchableOpacity>
      </View>

      <View>
        <View className="flex-row flex-wrap ">
          <FilterButton title="All" onPress={() => setStatusFilter('')} />
          <FilterButton title="Pending" onPress={() => setStatusFilter('pending')} />
          <FilterButton title="In Progress" onPress={() => setStatusFilter('in-progress')} />
          <FilterButton title="Completed" onPress={() => setStatusFilter('completed')} />
        </View>
      </View>

      <FlatList
        data={handleFilter}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="m-4 max-h-[180px] max-w-[300px] flex-row rounded-md bg-[#006D77]">
            <View className="w-[260px] flex-col gap-y-2 pl-2">
              <Text className="pt-2 text-[18px] text-[#FFDDD2]">{item.taskTitle}</Text>
              <Text className="text-[14px] text-[#FFDDD2]">
                Des:{' '}
                {item.description.length > 50
                  ? `${item.description.slice(0, 50)}...`
                  : item.description}
              </Text>
              <Text className="text-[14px] text-[#FFDDD2]">Date: {item.date}</Text>
              <Text className="text-[14px] text-[#FFDDD2]">Time: {item.time}</Text>
              <Text className="text-[14px] text-[#FFDDD2]">Loc: {item.location}</Text>

              <TouchableOpacity
                onPress={() =>
                  handleStatusChange(item.id ?? '', toggleStatus(item.status ?? 'pending'))
                }
                className="mb-2 flex-row gap-2">
                <Image source={icons.mark} />
                <Text className="text-[16px] text-[#FFDDD2]">{item.status}</Text>
              </TouchableOpacity>
            </View>

            <View className="flex-col items-center justify-center gap-y-5">
              <TouchableOpacity
                onPress={() =>
                  router.push({ pathname: '/AdditionalInfoTodo/[id]', params: { id: item.id } })
                }>
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
