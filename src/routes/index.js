import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StartGame } from '../screens/StartGame';
import { OpponentsGuess } from '../screens/OpponentsGuess';
import { GameOver } from '../screens/GameOver';

const Stack = createNativeStackNavigator();

export function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}

            >
                <Stack.Screen name={SCREENS.StartGame} component={StartGame} />
                <Stack.Screen name={SCREENS.OpponentsGuess} component={OpponentsGuess} />
                <Stack.Screen name={SCREENS.GameOver} component={GameOver} />
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export const SCREENS = {
    OpponentsGuess: "OpponentsGuess",
    StartGame: "StartGame",
    GameOver: "GameOver"
}