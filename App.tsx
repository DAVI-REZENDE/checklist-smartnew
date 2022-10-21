import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Routes } from './src/routes';

export default function App() {
  return (
    <View className='flex-1 bg-violet-500 items-center justify-center'>
      {/* <Routes /> */}
      <Text className='text-2xl uppercase text-white font-bold'>
        Example style with tailwind!
      </Text>
    </View>
  );
}
