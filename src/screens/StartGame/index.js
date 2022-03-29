import {
    View,
    Alert
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
            navigation.navigate(SCREENS.OpponentsGuess, { pickedNumber: number });
        }
    }

    function handleReset() {
        setNumber('');
    }

    function handleChangeNumber(value) {
        setNumber(value);
    }

    function isValidNumber() {
        if (!number || parseInt(number) < 1 || parseInt(number) > 99) {
            Alert.alert('Pick a number between 1 and 99');
            return false;
        }
        return true;
    }

    return (
        <Background>
            <View style={style.container}>
                <ScreenTitle title={"Guess My Number"} />
                <GuessNumberBoard title={"Enter a Number"}>
                    <Input
                        onChangeText={handleChangeNumber}
                        value={number}
                    />
                    <View style={style.buttonsContainer}>
                        <GameOptionButtom
                            title={"Reset"}
                            onPress={handleReset}
                        />
                        <GameOptionButtom
                            title={"Confirm"}
                            onPress={handleConfirm}
                        />
                    </View>
                </GuessNumberBoard>
            </View>
        </Background>
    );
}


