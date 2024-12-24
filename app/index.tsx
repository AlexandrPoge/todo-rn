import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Home = () => {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center bg-blue-50">
      <Text className="text-2xl font-bold text-blue-700">Добро пожаловать!</Text>
      <Text className="mt-4 text-center text-lg text-gray-600">
        Это ваш TODO-приложение. Начните добавлять задачи.
      </Text>
      <TouchableOpacity
        className="mt-6 rounded-lg bg-blue-500 px-4 py-2"
        onPress={() => router.push('/TodoList')}>
        <Text className="text-white">Перейти к списку задач</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
