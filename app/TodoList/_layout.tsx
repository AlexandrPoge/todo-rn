import { Stack } from 'expo-router';

const TodoLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="TodoList" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};
export default TodoLayout;
