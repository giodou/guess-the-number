import { useState } from 'react';

import {
    View,
    FlatList,
    SafeAreaView,
    Alert
}
    from 'react-native'

import { useNavigation, useRoute } from '@react-navigation/native';

import { style } from './styles';

import { ScreenTitle } from '../../components/ScreenTitle';
import { GuessNumberBoard } from '../../components/GuessNumberBoard';
import { Background } from '../../components/Background';
import { GameOptionButtom } from '../../components/GameOptionButtom';
import { ScreenPickedNumber } from '../../components/ScreenPickedNumber';
import { OpponentGuessOption } from '../../components/OpponentGuessOption';

import { SCREENS } from '../../routes';

let currentInitialRangeGuessTip = 1;
let currentFinalRangeGuessTip = 99;

function setCurrentInitialRangeGuessTip(newInitialGuess) {
    currentInitialRangeGuessTip = newInitialGuess;
}

function setCurrentFinalRangeGuessTip(newFinalGuess) {
    currentFinalRangeGuessTip = newFinalGuess;
}

export function OpponentsGuess() {
    const route = useRoute();
    const navigation = useNavigation();

    let { pickedNumber } = route.params;
    const [oponnentPickedNumbers, setOponnentPickedNumbers] = useState([]);
    const [currentGuess, setCurrentGuess] = useState(false);

    function getRandomGuessBetweenRange(min, max) {
        return parseInt(Math.floor(Math.random() * (max - min)) + min);
    }

    function handleOpponentNewGuess() {
        setOponnentPickedNumbers([currentGuess, ...oponnentPickedNumbers]);

        const newGuess = getRandomGuessBetweenRange(currentInitialRangeGuessTip, currentFinalRangeGuessTip);

        setCurrentGuess(newGuess);
        checkGameOver(newGuess);
    }

    function handleTipForWrongGuess(isPickedNumberLower) {
        if ((isPickedNumberLower && pickedNumber > currentGuess)
            || (!isPickedNumberLower && pickedNumber < currentGuess)) {
            Alert.alert('Ei man...', 'This is not cool');
            return;
        }

        if (isPickedNumberLower) {
            setCurrentFinalRangeGuessTip(currentGuess - 1);
        } else {
            setCurrentInitialRangeGuessTip(currentGuess + 1);
        }

        handleOpponentNewGuess();
    }

    function handleGameOver() {
        navigation.navigate(SCREENS.GameOver, { gameInfo: { numberOfTrys: oponnentPickedNumbers.length+1, pickedNumber } });

        currentFinalRangeGuessTip = 99;
        currentInitialRangeGuessTip = 1;
        pickedNumber = false;
        setOponnentPickedNumbers([]);
    }

    function checkGameOver(guess) {
        if (guess === parseInt(pickedNumber)) {
            handleGameOver();
        }
    }

    if (!currentGuess) {
        const newGuess = getRandomGuessBetweenRange(currentInitialRangeGuessTip, currentFinalRangeGuessTip);
        setCurrentGuess(newGuess);
    }

    return (
        <Background>
            <SafeAreaView style={style.container}>
                <ScreenTitle title={"Opponent's Guess"} />

                <ScreenPickedNumber
                    pickerNumber={currentGuess}
                />

                <GuessNumberBoard title={"Higher or Lower?"}>
                    <View style={style.buttonsContainer}>
                        <View style={style.buttonContainer}>
                            <GameOptionButtom
                                title={"-"}
                                onPress={handleTipForWrongGuess.bind(this, true)}
                            />
                        </View>
                        <View style={style.buttonContainer}>
                            <GameOptionButtom
                                title={"+"}
                                onPress={handleTipForWrongGuess.bind(this, false)}
                            />
                        </View>
                    </View>
                </GuessNumberBoard>

                <FlatList
                    style={style.guessList}
                    data={oponnentPickedNumbers}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item, index }) => (
                        <OpponentGuessOption
                            guessTry={index + 1}
                            guess={item}
                        />
                    )}
                />

            </SafeAreaView>
        </Background>
    );
}


