import { ScreenContent } from './components/ScreenContent';
import { StatusBar } from 'expo-status-bar';

import './global.css';

export default function App() {
  return (
    <>
      <ScreenContent title="Homess" path="App.tsx" />
      <StatusBar style="dark" />
    </>
  );
}
