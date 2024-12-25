import { Stack } from 'expo-router';

const CreateFormLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="CreateFormTodo" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};
export default CreateFormLayout;