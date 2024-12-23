import { Text, View } from 'react-native';

export const EditScreenInfo = ({ path }: { path: string }) => {
  const title = 'Open up the code for this screen:';
  const description =
    'Change any of the text, save the file, and your app will automatically update.';

  return (
    <View>
      <View className='bg-red-500'>
        <Text className='text-red-400'>{title}</Text>
        <View className='bg-red-500'>
          <Text className='text-red'>{path}</Text>
        </View>
        <Text className='text-red'>{description}</Text>
      </View>
    </View>
  );
};

