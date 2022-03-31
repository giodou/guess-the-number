import {
  StatusBar,
  LogBox
} from 'react-native';

import { Routes } from './src/routes';

import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold
} from '@expo-google-fonts/roboto'
import { Background } from './src/components/Background';

LogBox.ignoreLogs(
  [
    'Require cycles are allowed, but can result in uninitialized values. Consider refactoring to remove the need for a cycle.',
  ]
);

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_500Medium
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Background>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <Routes />
      </Background>
    );

  }
}

