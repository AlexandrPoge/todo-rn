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
          <Stack.Screen name="CreateFormTodo" options={{ headerTitle: 'Create task', headerBackTitle:'LIST',
            headerTitleAlign: 'center', headerTintColor:'#83C5BE', headerStyle: { backgroundColor: '#FFDDD2' }}} />
          <Stack.Screen
            name="AdditionalInfoTodo"
            options={{ headerTitle: 'Edit Task',
              headerTitleAlign: 'center', headerTintColor:'#83C5BE', headerStyle: { backgroundColor: '#FFDDD2'}}}
          />
        </Stack>
      </TaskProvider>
    </>
  );
};
export default RootLayout;
