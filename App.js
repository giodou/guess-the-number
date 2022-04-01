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

import {
  OpenSans_400Regular,
  OpenSans_500Medium,
  OpenSans_700Bold
} from '@expo-google-fonts/open-sans'



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
    Roboto_500Medium,
    'open-sans': OpenSans_400Regular,
    'open-sans-medium': OpenSans_500Medium,
    'open-sans-bold': OpenSans_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

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

