import { TouchableOpacity, View, Text, Image } from "react-native";

import { Button } from '../types/types';
import { icons } from "../constants";
import React from "react";

const FilterButton = ({ title, onPress }: Button) => {

  return (
    <View className="border h-[33px] w-[110px] mt-2 ml-4">
        <TouchableOpacity onPress={onPress} className='flex-row gap-2 items-center justify-center self-center p-2'>
          <Text className={`text-[#006D77] font-bold`}>{title}</Text>
          <Image source={icons.filter}/>
        </TouchableOpacity>
    </View>
  );
};

export default FilterButton;
