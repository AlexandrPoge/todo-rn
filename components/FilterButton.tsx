import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';

import { icons } from '../constants';
import { Button } from '../types/types';

const FilterButton = ({ title, onPress }: Button) => {
  return (
    <View className="ml-4 mt-2 h-[33px] w-[110px] border">
      <TouchableOpacity
        onPress={onPress}
        className="flex-row items-center justify-center gap-2 self-center p-2">
        <Text className="font-bold text-[#006D77]">{title}</Text>
        <Image source={icons.filter} />
      </TouchableOpacity>
    </View>
  );
};

export default FilterButton;
