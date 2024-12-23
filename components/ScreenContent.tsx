import {SafeAreaView, Text, View} from 'react-native';

import { EditScreenInfo } from './EditScreenInfo';
import {ReactNode} from "react";

type ScreenContentProps = {
  title: string;
  path: string;
  children?: ReactNode;
};

export const ScreenContent = ({ title, path, children }: ScreenContentProps) => {
  return (
      <SafeAreaView>
          <View className='bg-red-500'>
              <Text className='bg-black text-red-400 pt-5'>{title}</Text>
              <View className='bg-red-500' />
              <EditScreenInfo path={path} />
              {children}
          </View>
      </SafeAreaView>

  );
};

