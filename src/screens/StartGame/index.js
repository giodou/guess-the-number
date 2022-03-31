import {
    View,
    Alert,
    SafeAreaView
}
    from 'react-native'


import { style } from './styles';

import { ScreenTitle } from '../../components/ScreenTitle';
import { GuessNumberBoard } from '../../components/GuessNumberBoard';
import { Background } from '../../components/Background';
import { Input } from '../../components/Input'
import { GameOptionButtom } from '../../components/GameOptionButtom';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../../routes';

export function StartGame() {

    const [number, setNumber] = useState('');
    const navigation = useNavigation();

    function handleConfirm() {
        if (isValidNumber()) {
            const dataNumber = number;
            setNumber('');
            navigation.navigate(SCREENS.OpponentsGuess, { pickedNumber: dataNumber });
        }
    }

    function handleReset() {
        setNumber('');
    }

    function handleChangeNumber(value) {
        setNumber(value);
    }

    function isValidNumber() {
        const chosenNumber = parseInt(number);

        if (isNaN(chosenNumber) || chosenNumber < 1 || chosenNumber > 99) {
            Alert.alert(
                'Invalid Number',
                'Pick a number between 1 and 99',
                [{ text: 'ok...', style: 'destructive', onPress: handleReset }]
            );
            return false;
        }
        return true;
    }

    return (
        <Background>
            <SafeAreaView style={style.container}>
                <ScreenTitle title={"Guess My Number"} />
                <GuessNumberBoard title={"Enter a Number"}>
                    <Input
                        onChangeText={handleChangeNumber}
                        value={number}
                    />
                    <View style={style.buttonsContainer}>
                        <View style={style.buttonContainer}>
                            <GameOptionButtom
                                title={"Reset"}
                                onPress={handleReset}
                            />
                        </View>
                        <View style={style.buttonContainer}>
                            <GameOptionButtom
                                title={"Confirm"}
                                onPress={handleConfirm}
                            />
                        </View>
                    </View>
                </GuessNumberBoard>
            </SafeAreaView>
        </Background>
    );
}


