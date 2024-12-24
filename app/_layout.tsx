import { Stack } from 'expo-router';

import '../global.css';
import { TaskProvider } from './hooks/useTaskProvider';

const RootLayout = () => {
  return (
    <>
      <TaskProvider>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="TodoList" options={{ headerShown: false }} />
        </Stack>
      </TaskProvider>
    </>
  );
};
export default RootLayout;
